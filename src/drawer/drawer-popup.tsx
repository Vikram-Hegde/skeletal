import type { DrawerPopupProps as BaseDrawerPopupProps } from "@base-ui/react/drawer";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import { clsx } from "clsx";
import styles from "./drawer.module.css";

/**
 * The extent of the drawer along its slide axis.
 *
 * For left/right drawers this is the panel width; for top/bottom sheets it is
 * the maximum height (the sheet grows to its content, capped at this size):
 * - `sm`: 20rem
 * - `md`: 24rem — default; most drawers.
 * - `lg`: 32rem — wide panels and complex forms.
 *
 * @default 'md'
 */
export type DrawerPopupSize = "sm" | "md" | "lg";

/**
 * The sliding panel itself. Renders a `<div>` element with the popup role.
 *
 * Per the Base UI anatomy it sits inside `<Drawer.Viewport>`, which pins it to
 * the edge selected by the root's `side` prop. The popup carries the surface
 * (background, border, shadow, radius) and animates in and out of view —
 * including following the finger while the drawer is being swiped to dismiss.
 *
 * Accepts all Base UI popup props, including `initialFocus` and `finalFocus`
 * for controlling focus when the drawer opens and closes.
 *
 * `size` controls the drawer's extent along its slide axis. The popup lays out
 * as a column: render `<Drawer.Content>` for the scrollable middle, with an
 * optional sticky `<Drawer.Header>` and `<Drawer.Footer>` that stay pinned.
 *
 * @default size = 'md'
 */
export interface DrawerPopupProps extends BaseDrawerPopupProps {
  /** Extent of the drawer along its slide axis. @default 'md' */
  size?: DrawerPopupSize;
}

export function DrawerPopup({ className, size = "md", children, ...props }: DrawerPopupProps) {
  const sizeClass = size !== "md" ? styles[`drawer__popup--${size}`] : undefined;
  return (
    <BaseDrawer.Popup
      className={mergeClassName(clsx(styles.drawer__popup, sizeClass), className)}
      {...props}
    >
      {children}
    </BaseDrawer.Popup>
  );
}
