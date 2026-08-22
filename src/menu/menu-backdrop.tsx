import type { MenuBackdropProps as BaseMenuBackdropProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * An overlay rendered beneath the menu popup, used when the menu is modal.
 * Renders a `<div>` element.
 *
 * Only needed when `Menu.Root` is modal (the default). Clicking the backdrop
 * dismisses the menu. The overlay is translucent; set a fully opaque color
 * (or remove it) if you prefer a "dimmed page" look vs. a light scrim.
 */
export interface MenuBackdropProps extends BaseMenuBackdropProps {}

export function MenuBackdrop({ className, ...props }: MenuBackdropProps) {
  return (
    <BaseMenu.Backdrop className={mergeClassName(styles.menu__backdrop, className)} {...props} />
  );
}
