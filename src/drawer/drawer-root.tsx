import type { DrawerRootProps } from "@base-ui/react/drawer";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";

/**
 * The edge of the screen the drawer slides out from.
 *
 * Pairs with `side` to position the drawer and pick the swipe gesture:
 * - `right`: a side panel on the right edge (default) — dismiss by swiping right.
 * - `left`: a side panel on the left edge — dismiss by swiping left.
 * - `bottom`: a bottom sheet — dismiss by swiping down.
 * - `top`: a top sheet — dismiss by swiping up.
 *
 * @default 'right'
 */
export type DrawerSide = "left" | "right" | "top" | "bottom";

/**
 * Maps a `side` to the Base UI swipe direction that dismisses the drawer.
 * Positioning in the CSS keys off the `data-swipe-direction` attribute Base UI
 * sets on the popup, so a single `side` prop drives both gesture and layout.
 */
const SIDE_TO_SWIPE_DIRECTION: Record<DrawerSide, "up" | "down" | "left" | "right"> = {
  left: "left",
  right: "right",
  top: "up",
  bottom: "down",
};

/**
 * The root of the drawer, grouping all parts together. Renders no DOM element.
 *
 * All Base UI root props are supported: `open`, `defaultOpen`, `modal`,
 * `onOpenChange`, `onOpenChangeComplete`, `actionsRef`, `handle`,
 * `triggerId`, `snapPoints`, and `swipeDirection`.
 *
 * `side` picks which edge the drawer slides from and is the recommended way to
 * position it — it maps to `swipeDirection` under the hood. Pass
 * `swipeDirection` directly instead when you need fine-grained control (or
 * snap points, which only apply to top/bottom sheets).
 *
 * Use `open` + `onOpenChange` to control the drawer; otherwise it is
 * uncontrolled. `modal` accepts `true`, `'trap-focus'`, or `false`.
 *
 * @default modal = true, side = 'right'
 */
export interface DrawerProps<Payload = unknown> extends DrawerRootProps<Payload> {
  /** Edge of the screen the drawer slides out from. @default 'right' */
  side?: DrawerSide;
}

export function DrawerRoot<Payload>({
  side = "right",
  swipeDirection,
  ...props
}: DrawerProps<Payload>) {
  return (
    <BaseDrawer.Root swipeDirection={swipeDirection ?? SIDE_TO_SWIPE_DIRECTION[side]} {...props} />
  );
}
