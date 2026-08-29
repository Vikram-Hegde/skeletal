import { alertDialogDoc } from "@/docs/components/alert-dialog";
import { badgeDoc } from "@/docs/components/badge";
import { buttonDoc } from "@/docs/components/button";
import { checkboxDoc } from "@/docs/components/checkbox";
import { comboboxDoc } from "@/docs/components/combobox";
import { commandPaletteDoc } from "@/docs/components/command-palette";
import { dialogDoc } from "@/docs/components/dialog";
import { fieldDoc } from "@/docs/components/field";
import { drawerDoc } from "@/docs/components/drawer";
import { iconDoc } from "@/docs/components/icon";
import { menuDoc } from "@/docs/components/menu";
import { radioDoc } from "@/docs/components/radio";
import { selectDoc } from "@/docs/components/select";
import { skeletonDoc } from "@/docs/components/skeleton";
import { spinnerDoc } from "@/docs/components/spinner";
import { scrollAreaDoc } from "@/docs/components/scroll-area";
import { switchDoc } from "@/docs/components/switch";
import { tooltipDoc } from "@/docs/components/tooltip";
import { apiProps } from "@/docs/generated/api.generated";
import { boxDoc } from "@/docs/layout/box";
import { centerDoc } from "@/docs/layout/center";
import { clusterDoc } from "@/docs/layout/cluster";
import { containerDoc } from "@/docs/layout/container";
import { coverDoc } from "@/docs/layout/cover";
import { frameDoc } from "@/docs/layout/frame";
import { gridDoc } from "@/docs/layout/grid";
import { imposterDoc } from "@/docs/layout/imposter";
import { reelDoc } from "@/docs/layout/reel";
import { sidebarDoc } from "@/docs/layout/sidebar";
import { stackDoc } from "@/docs/layout/stack";
import { switcherDoc } from "@/docs/layout/switcher";
import type { Doc, DocGroup, DocProps } from "@/docs/types";

const RAW_DOCS: [Doc, ...Doc[]] = [
  buttonDoc,
  badgeDoc,
  iconDoc,
  fieldDoc,
  dialogDoc,
  drawerDoc,
  alertDialogDoc,
  comboboxDoc,
  commandPaletteDoc,
  menuDoc,
  selectDoc,
  checkboxDoc,
  radioDoc,
  switchDoc,
  skeletonDoc,
  spinnerDoc,
  tooltipDoc,
  scrollAreaDoc,
  stackDoc,
  boxDoc,
  clusterDoc,
  gridDoc,
  centerDoc,
  coverDoc,
  sidebarDoc,
  switcherDoc,
  frameDoc,
  imposterDoc,
  reelDoc,
  containerDoc,
];

/**
 * Each doc's API table is the JSDoc-derived rows (from `bun run gen:docs`)
 * merged with the hand-curated extras in the doc file. A curated row with the
 * same `name` overrides the generated one (e.g. an imported alias type written
 * out by hand).
 */
function withApiProps(doc: Doc): ResolvedDoc {
  const generated = apiProps[doc.id] ?? [];
  const extras = doc.props ?? [];
  const generatedNames = new Set(generated.map((prop) => prop.name));
  const merged: DocProps[] = [
    ...generated.map((prop) => extras.find((extra) => extra.name === prop.name) ?? prop),
    ...extras.filter((prop) => !generatedNames.has(prop.name)),
  ];
  return { ...doc, props: merged };
}

/** A `Doc` after the API rows have been merged in — `props` is always present. */
export interface ResolvedDoc extends Doc {
  props: DocProps[];
}

export const DOCS: [ResolvedDoc, ...ResolvedDoc[]] = RAW_DOCS.map(withApiProps) as [
  ResolvedDoc,
  ...ResolvedDoc[],
];

/**
 * Fun display names for the doc groups, used in the sidebar, home page,
 * command palette hints, and 404 suggestions. `DocGroup` stays semantic for
 * filtering; these labels are pure presentation.
 */
export const GROUP_LABELS: Record<DocGroup, string> = {
  Components: "Bones",
  Layout: "Spine",
};

export const DOC_GROUPS: Array<{ id: DocGroup; label: string; docs: ResolvedDoc[] }> = (
  ["Components", "Layout"] as DocGroup[]
).map((id) => ({
  id,
  label: GROUP_LABELS[id],
  docs: DOCS.filter((doc) => doc.group === id),
}));

export type { Doc, DocGroup, DocProps, Example } from "@/docs/types";
