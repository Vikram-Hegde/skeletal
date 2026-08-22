import type { DrawerBackdropProps as BaseDrawerBackdropProps } from "@base-ui/react/drawer";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./drawer.module.css";

/**
 * An overlay displayed beneath the drawer popup. Renders a `<div>` element.
 *
 * Clicking the backdrop dismisses the drawer (unless
 * `disablePointerDismissal` is set on the root). It dims the page and fades as
 * the drawer is swiped toward dismissal (its opacity tracks the drawer's swipe
 * progress), and can be customised with `className` or the `render` prop.
 */
export interface DrawerBackdropProps extends BaseDrawerBackdropProps {}

export function DrawerBackdrop({ className, ...props }: DrawerBackdropProps) {
  return (
    <BaseDrawer.Backdrop
      className={mergeClassName(styles.drawer__backdrop, className)}
      {...props}
    />
  );
}
