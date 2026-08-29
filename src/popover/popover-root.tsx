import type { PopoverRootProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";

/**
 * Groups all parts of the popover. Renders no DOM element.
 *
 * All Base UI root props are supported: `open`, `defaultOpen`, `onOpenChange`,
 * `onOpenChangeComplete`, `modal`, `triggerId`, `defaultTriggerId`, `handle`,
 * `actionsRef`, and `children` (or a render function receiving `payload`).
 *
 * Use `open` + `onOpenChange` to control the popover; otherwise it is
 * uncontrolled. `modal` accepts `true`, `'trap-focus'`, or `false`.
 *
 * - `true`: user interaction is limited to the popover — page scroll is locked
 *   and outside pointer interactions are disabled.
 * - `'trap-focus'`: focus is trapped inside the popover but page scroll and
 *   outside pointer interactions remain enabled. Render `<Popover.Close>`
 *   inside `<Popover.Popup>` so touch screen readers can escape.
 * - `false`: interaction with the rest of the document stays enabled.
 *
 * @default modal = false
 * @default defaultOpen = false
 */
export interface PopoverProps<Payload = unknown> extends PopoverRootProps<Payload> {}

export function PopoverRoot<Payload>(props: PopoverProps<Payload>) {
  return <BasePopover.Root {...props} />;
}
