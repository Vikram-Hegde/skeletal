import type { DrawerSwipeAreaProps as BaseDrawerSwipeAreaProps } from "@base-ui/react/drawer";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./drawer.module.css";

/**
 * An invisible area that listens for swipe gestures to open the drawer. Renders
 * a `<div>` element.
 *
 * Place it along the edge the drawer slides out from. The default
 * `swipeDirection` (opposite of the root's) matches that edge, so a right-side
 * drawer opens by swiping from the right edge, a bottom sheet by swiping up
 * from the bottom edge, and so on.
 *
 * The swipe area is styled to fill the screen edge it sits on (a thin strip).
 * Style it with `className` if you want to make it visible or resize it.
 *
 * @default disabled = false
 */
export interface DrawerSwipeAreaProps extends BaseDrawerSwipeAreaProps {}

export function DrawerSwipeArea({ className, ...props }: DrawerSwipeAreaProps) {
  return (
    <BaseDrawer.SwipeArea
      className={mergeClassName(styles["drawer__swipe-area"], className)}
      {...props}
    />
  );
}
