import type { MenuPopupProps as BaseMenuPopupProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * The menu panel that holds the items. Renders a `<div>` element.
 *
 * Accepts all Base UI popup props, including `finalFocus` for controlling
 * focus when the menu closes. Content animates in/out via the
 * `data-starting-style` / `data-ending-style` transitions.
 *
 * By default the popup sizes to its content with a `min-width` of 10rem; pass
 * `style={{ width: ... }}` or a `className` to constrain it.
 *
 * @default finalFocus = true
 */
export interface MenuPopupProps extends BaseMenuPopupProps {}

export function MenuPopup({ className, ...props }: MenuPopupProps) {
  return <BaseMenu.Popup className={mergeClassName(styles.menu__popup, className)} {...props} />;
}
