import type { MenuGroupProps as BaseMenuGroupProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * Groups related menu items under an accessible label. Renders a `<div>`
 * element.
 *
 * Pair with `<Menu.GroupLabel>` inside the group; Base UI wires the
 * `aria-labelledby` association automatically.
 *
 * Rendered with `display: contents` so its items participate directly in the
 * popup grid, letting checkbox items share the tick-mark column via subgrid.
 */
export interface MenuGroupProps extends BaseMenuGroupProps {}

export function MenuGroup({ className, ...props }: MenuGroupProps) {
  return <BaseMenu.Group className={mergeClassName(styles.menu__group, className)} {...props} />;
}
