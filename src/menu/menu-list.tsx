import type { MenuListProps as BaseMenuListProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * Groups the menu items so other content, such as `<Menu.Input>`, can share
 * the popup. Renders a `<div>` element.
 *
 * Spans the popup's grid via subgrid so items and checkbox gutters stay
 * aligned, and scrolls when the filtered list is taller than the viewport.
 * Use it as the container for `<Menu.Item>`s and `<Menu.Group>`s whenever the
 * menu is filterable.
 */
export interface MenuListProps extends BaseMenuListProps {}

export function MenuList({ className, ...props }: MenuListProps) {
  return <BaseMenu.List className={mergeClassName(styles.menu__list, className)} {...props} />;
}
