/**
 * Generates `playground/src/docs/generated/api.generated.ts` from the JSDoc on
 * each component's props interface.
 *
 * The playground API table (`Doc.props`) is derived from the source of truth —
 * the JSDoc (with `@default`) on every exposed prop, per AGENTS.md. This script
 * parses each `src/**\/*.tsx` with the native TypeScript 7 AST API, extracts
 * prop name / type / description / `@default`, and emits a typed module the
 * docs merge into their tables. Curated rows (inherited Base UI props, merged
 * part rows) are authored in the doc files themselves; this generator only
 * produces the skeletal-owned rows.
 *
 * Run with `pnpm run gen:docs` (wired into `pnpm run play`).
 */

import { mkdirSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import {
  getJSDocTags,
  getTextOfJSDocComment,
  type InterfaceDeclaration,
  type SourceFile,
  type Statement,
  SyntaxKind,
} from "typescript/unstable/ast";
import { API } from "typescript/unstable/async";

/**
 * doc id -> source file + props interface. Layout primitives declare their
 * props directly; composite components document them on the `<Part>Root`.
 */
const REGISTRY: Record<string, { file: string; interface: string }> = {
  badge: { file: "src/badge/badge.tsx", interface: "BadgeProps" },
  button: { file: "src/button/button.tsx", interface: "ButtonProps" },
  icon: { file: "src/icon/icon.tsx", interface: "IconProps" },
  dialog: { file: "src/dialog/dialog-root.tsx", interface: "DialogProps" },
  drawer: { file: "src/drawer/drawer-root.tsx", interface: "DrawerProps" },
  "alert-dialog": { file: "src/alert-dialog/alert-dialog-root.tsx", interface: "AlertDialogProps" },
  "command-palette": {
    file: "src/command-palette/command-palette-root.tsx",
    interface: "CommandPaletteRootProps",
  },
  menu: { file: "src/menu/menu-root.tsx", interface: "MenuProps" },
  combobox: { file: "src/combobox/combobox-root.tsx", interface: "ComboboxProps" },
  select: { file: "src/select/select-root.tsx", interface: "SelectProps" },
  spinner: { file: "src/spinner/spinner.tsx", interface: "SpinnerProps" },
  skeleton: { file: "src/skeleton/skeleton.tsx", interface: "SkeletonProps" },
  tooltip: { file: "src/tooltip/tooltip-root.tsx", interface: "TooltipProps" },
  checkbox: { file: "src/checkbox/checkbox-root.tsx", interface: "CheckboxProps" },
  radio: { file: "src/radio/radio-root.tsx", interface: "RadioProps" },
  switch: { file: "src/switch/switch-root.tsx", interface: "SwitchProps" },
  "scroll-area": { file: "src/scroll-area/scroll-area-viewport.tsx", interface: "ScrollAreaViewportProps" },
  stack: { file: "src/layout/stack.tsx", interface: "StackProps" },
  box: { file: "src/layout/box.tsx", interface: "BoxProps" },
  cluster: { file: "src/layout/cluster.tsx", interface: "ClusterProps" },
  grid: { file: "src/layout/grid.tsx", interface: "GridProps" },
  center: { file: "src/layout/center.tsx", interface: "CenterProps" },
  cover: { file: "src/layout/cover.tsx", interface: "CoverProps" },
  sidebar: { file: "src/layout/sidebar.tsx", interface: "SidebarProps" },
  switcher: { file: "src/layout/switcher.tsx", interface: "SwitcherProps" },
  frame: { file: "src/layout/frame.tsx", interface: "FrameProps" },
  imposter: { file: "src/layout/imposter.tsx", interface: "ImposterProps" },
  reel: { file: "src/layout/reel.tsx", interface: "ReelProps" },
  container: { file: "src/layout/container.tsx", interface: "ContainerProps" },
};

const OUT_FILE = "playground/src/docs/generated/api.generated.ts";

const warnings: string[] = [];

function firstLine(text: string | undefined): string | undefined {
  if (!text) return undefined;
  return text
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.length > 0);
}

function typeAliases(sourceFile: SourceFile): Map<string, string> {
  const aliases = new Map<string, string>();
  for (const statement of sourceFile.statements) {
    if (statement.kind === SyntaxKind.TypeAliasDeclaration) {
      const decl = statement;
      aliases.set(decl.name.getText(sourceFile), decl.type.getText(sourceFile));
    }
  }
  return aliases;
}

/** Expand a property's type text through same-file `type X = ...` aliases. */
function expandType(typeText: string, aliases: Map<string, string>, depth = 0): string {
  if (depth > 4) return typeText;
  const resolved = aliases.get(typeText);
  return resolved === undefined || resolved === typeText
    ? typeText
    : expandType(resolved, aliases, depth + 1);
}

function propRow(
  member: InterfaceDeclaration["members"][number],
  sourceFile: SourceFile,
  aliases: Map<string, string>,
) {
  const name = member.name.getText(sourceFile);
  const type = expandType(member.type.getText(sourceFile), aliases).replace(/"/g, "'");

  const jsdoc = member.jsDoc?.at(-1);
  const description = firstLine(getTextOfJSDocComment(jsdoc?.comment));

  const defaultTag = getJSDocTags(member).find(
    (tag) => tag.tagName?.getText(sourceFile) === "default",
  );
  const rawDefault = defaultTag ? getTextOfJSDocComment(defaultTag.comment)?.trim() : undefined;
  const defaultValue = rawDefault && rawDefault !== "undefined" ? rawDefault : "—";

  if (description === undefined) {
    warnings.push(`${sourceFile.fileName}: ${name} has no JSDoc description`);
  }

  return { name, type, default: defaultValue, description: description ?? "" };
}

const api = new API({});
const snapshot = await api.updateSnapshot({ openProjects: ["tsconfig.json"] });
const project = snapshot.getProject("tsconfig.json");
if (!project) {
  throw new Error("gen-docs-api: could not open tsconfig.json project");
}

const output: Record<string, unknown> = {};

for (const [id, { file, interface: interfaceName }] of Object.entries(REGISTRY)) {
  const sourceFile = await project.program.getSourceFile(file);
  if (!sourceFile) {
    throw new Error(`gen-docs-api: source file not found: ${file}`);
  }

  const declaration = sourceFile.statements.find(
    (statement: Statement) =>
      statement.kind === SyntaxKind.InterfaceDeclaration &&
      statement.name.getText(sourceFile) === interfaceName,
  ) as InterfaceDeclaration | undefined;

  if (!declaration) {
    throw new Error(`gen-docs-api: interface ${interfaceName} not found in ${file}`);
  }

  const aliases = typeAliases(sourceFile);
  output[id] = declaration.members
    .filter((member) => member.kind === SyntaxKind.PropertySignature)
    .map((member) => propRow(member, sourceFile, aliases));
}

const content = [
  "// AUTO-GENERATED by `pnpm run gen:docs` — do not edit by hand.",
  "// The playground API table is derived from the JSDoc on each component's",
  '// props interface (src/**). Regenerate with `pnpm run gen:docs`.',
  'import type { DocProps } from "../types";',
  "",
  `export const apiProps: Record<string, DocProps[]> = ${JSON.stringify(output, null, 2)};`,
  "",
].join("\n");

mkdirSync(dirname(OUT_FILE), { recursive: true });
await writeFile(OUT_FILE, content, "utf8");

await snapshot.dispose();
await api.close();

for (const warning of warnings) {
  console.warn(`warn: ${warning}`);
}
console.log(`gen-docs-api: wrote ${join(OUT_FILE)} (${Object.keys(output).length} docs)`);
