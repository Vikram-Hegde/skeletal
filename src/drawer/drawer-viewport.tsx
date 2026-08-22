import type { DrawerViewportProps as BaseDrawerViewportProps } from "@base-ui/react/drawer";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./drawer.module.css";

/**
 * The full-screen positioning container for the drawer popup. Renders a
 * `<div>` element.
 *
 * Per the Base UI anatomy, render `<Drawer.Popup>` inside
 * `<Drawer.Viewport>`:
 *
 * ```tsx
 * <Drawer.Portal>
 *   <Drawer.Backdrop />
 *   <Drawer.Viewport>
 *     <Drawer.Popup>...</Drawer.Popup>
 *   </Drawer.Viewport>
 * </Drawer.Portal>
 * ```
 *
 * The viewport is `position: fixed`, fills the screen, and pins the popup to
 * the edge selected by the root's `side` prop (left/right drawers stretch to
 * full height, top/bottom sheets stretch to full width). The drawer's swipe
 * gesture is registered on the viewport, so don't wrap the popup in an extra
 * positioning element.
 *
 * Styled with the `drawer__viewport` BEM class; override positioning with
 * `className` if you need a different layout.
 */
export interface DrawerViewportProps extends BaseDrawerViewportProps {}

export function DrawerViewport({ className, ...props }: DrawerViewportProps) {
  return (
    <BaseDrawer.Viewport
      className={mergeClassName(styles.drawer__viewport, className)}
      {...props}
    />
  );
}
