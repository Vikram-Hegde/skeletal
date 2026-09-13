# Skeletal Design System

- use `pnpm` for running all commands (`pnpm install`, `pnpm run play`, `pnpm run build`, `pnpm run gen:docs`). Node >=20.
- no useEffect's or useState's, we'll be using base-ui as the library which handles the complexity for us, the design system itself should be a styling layer alone.
- fully typed, derive / extend from base-ui library wherever necessary and expose the same.
- JSDoc on each exposed prop is a must, with @default annotation, with decisions on each variant available as the humans / LLM's can read JSDocs to make decisions on what / when to use.
- Use CSS Modules for styling with BEM methodology and modern CSS
- Use clsx for conditional styles
- Every element is `box-sizing: border-box` — enforced once by a global reset in `src/index.css` (`*`, `*::before`, `*::after`). Do not redeclare `box-sizing` per component. The one exception is `Center` (`src/layout/center.module.css`), which intentionally opts back into `content-box` so its `max-inline-size` measure excludes the gutters (Every Layout's Center pattern).
- **Cascade layers**: every skeletal style (tokens/reset in `src/index.css` and every `*.module.css`) lives in `@layer skeletal`, declared first in `src/index.css`. Consumers override it from their own layer (or unlayered styles) instead of fighting specificity/source order — e.g. the docs declare `@layer skeletal, docs;` then wrap `docs.css` in `@layer docs`. Keep the layer name `skeletal` when adding new CSS.
- **No global element styling**: shipped CSS only targets skeletal-owned selectors — BEM classes from `*.module.css`, tokens/`font-family` on `:root`, and true resets (`box-sizing`, scrollbars). Never add bare element selectors that reach into consumer markup (e.g. `label:has([role="checkbox"])` forcing layout/typography on consumer-written `<label>`s) — the component doesn't render that markup, so restyling it breaks consumers in surprising ways. Pairings the component doesn't render (label + control text) are composed in userland with layout primitives (`Cluster`), as the Switch docs do. Docs-demo polish that needs a shortcut lives in the docs' own CSS, never in shipped CSS.
- **Theming**: tokens in `src/index.css` use the `light-dark()` CSS function so components adapt to `prefers-color-scheme` automatically via `color-scheme: light dark` on `:root`. Every `--sk-*` token is additionally declared with `@property` in the registry at the top of `src/index.css` — typed `syntax`, explicit `inherits`, computationally independent `initial-value`. Component internals (`--_*`) are registered the same way but colocated at the top of their own `*.module.css` (unlayered — registration is document-wide wherever the rule sits, and it ships with the component chunk). Tokens inherit (set on `:root`, read everywhere); internals use `inherits: false` (set and read on the same element), except reads that depend on inheritance (`button-fg` in `::before`/`::after`, skeleton descendants) which keep `inherits: true`. Never register Base UI-managed variables. Full rules live in the registry's header comment — follow them when adding a token or internal. Consumers force a theme with `html.dark` / `html.light`. All global tokens are namespaced with an `sk-` prefix (`--sk-primary`, `--sk-background`, `--sk-border`, `--sk-radius`, `--sk-shadow-sm/md/lg`, ...) so they never collide with app-level CSS variables; component-internal custom properties use the standard internal notation `--_<name>` (e.g. `--_stack-space`, `--_button-bg`) since they're scoped to skeletal elements. Exception: Base UI-managed variables (`--transform-origin`, `--anchor-width`, `--available-height`) keep their unprefixed names — they're set by Base UI's positioners, renaming them breaks floating behavior. Never hardcode theme-specific colors, shadows, or radius in components — use the global tokens. When a value derives from a token, derive it at use-site with relative color syntax (`oklch(from var(--sk-primary) calc(l - 0.08) c h)`) rather than restating a fixed value, so re-theming `:root` cascades everywhere. For theme-aware one-offs that have no token (hover darken/lighten, overlays) use `light-dark(a, b)` rather than fixed `black`/`white`.

## Component API

- Each component is exported as a single compound object, imported as one name:

  ```ts
  import { Dialog } from '@vikram-hegde/skeletal'
  ```

- Parts are accessed as properties on the object: `Dialog.Trigger`, `Dialog.Content`, `Dialog.Close`, etc. Do not export individual parts as top-level named exports.
- Part prop types are exported as named types next to the compound object (`DialogProps`, `DialogContentProps`, `DialogTriggerProps`, ...).
- Alert Dialog reuses the Dialog parts for `Portal`/`Backdrop`/`Content`/`Title`/`Description`/`Close`/`Viewport` — only its `Root` and `Trigger` are unique. Shared parts keep their `Dialog*Props` type names.
- **Always follow the Base UI component docs for how parts are composed** (anatomy, nesting, scroll/viewport patterns). The docs at `node_modules/@base-ui/react/docs/react/components/*.md` are authoritative — e.g. `Dialog.Viewport` is a full-screen positioning/scroll container that wraps `Dialog.Content`, it is not a no-op.
- **Button-like parts reuse `Button`**: `Dialog.Trigger`, `Dialog.Close`, and `AlertDialog.Trigger` are composed from the `Button` component via Base UI's `render` prop (accepting `variant`/`size`/`fullWidth`). Never re-style them from scratch in their own CSS modules.
- **Layout primitives** (`Stack`, `Box`, `Cluster`, `Grid`, `Center`, `Cover`, `Sidebar`, `Switcher`, `Frame`, `Imposter`, `Reel`, `Container`) live in `src/layout/` and are pure CSS + React composition — no state, no Base UI. They are single-part components exported as named values, configurable via props that map to internal CSS custom properties (e.g. `space` → `--_stack-space`). For behaviors CSS can't express (Stack `splitAfter`, Switcher `limit`), clone children in React rather than using `var()` inside `:nth-child()` (lightningcss rejects it).

## CSS Modules (typed)

- Every `*.module.css` gets a generated `*.module.css.d.ts` next to it via [typed-css-modules](https://github.com/Quramy/typed-css-modules). Never hand-write those files.
- Generate with `pnpm run css:types` (regenerates on every `typecheck`/`build`) or `pnpm run css:types:watch` during development.
- The generated files are gitignored — only `dist/index.css` ships to consumers.
- Access classes with dot notation: `styles.dialog__trigger`. For BEM modifier classes (invalid identifiers, e.g. `dialog__content--sm`), use bracket notation with a template literal: `styles[`dialog__content--${size}`]`.
- Prefer BEM element names for exports (default tcm mode, no `--camelCase`).

## Testing

- Tests cover purely visual regressions via Vitest browser `toMatchScreenshot` — Base UI owns functional behavior, so don't assert interactions/state. Don't test the programming language or the browser itself, those are already tested.
- `*.visual.test.tsx` next to the component, one screenshot per variant group. Baselines live in `__screenshots__/` — commit them.
- Run locally with `pnpm test:visual` — it always runs the suite in the pinned browser container, so local and CI render identically.
- Regenerate baselines with `pnpm test:visual:update`, review the diff, and push. (Do not pass `-- --update` through `test:visual` — pnpm forwards the `--` literally, so vitest treats `--update` as a filename filter and update mode never activates.)
- Vitest docs at https://vitest.dev are authoritative for test config.

## References

- Base UI Docs - https://base-ui.com/llms.txt
- React Docs - https://react.dev
- BEM docs - https://getbem.com/
- typed-css-modules - https://github.com/Quramy/typed-css-modules
