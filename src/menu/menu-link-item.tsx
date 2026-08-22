import type { MenuLinkItemProps as BaseMenuLinkItemProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A link inside the menu for navigating to another page or section. Renders an
 * `<a>` element.
 *
 * Accepts all Base UI link-item props plus anchor attributes (`href`, `target`,
 * `rel`, ...). Keyboard navigation, type-ahead, and highlight behave the same
 * as `Menu.Item`.
 *
 * @default closeOnClick = false
 */
export interface MenuLinkItemProps extends BaseMenuLinkItemProps {}

export function MenuLinkItem({ className, ...props }: MenuLinkItemProps) {
  return (
    <BaseMenu.LinkItem
      className={mergeClassName(styles["menu__link-item"], className)}
      {...props}
    />
  );
}
