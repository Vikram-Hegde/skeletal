import type { MenuEmptyProps as BaseMenuEmptyProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A message shown when no items match the filter query. Renders a `<div>`
 * element.
 *
 * Requires the menu to be wrapped in `<Menu.FilterProvider>`. Place it after
 * `<Menu.Input>` and before `<Menu.List>`.
 */
export interface MenuEmptyProps extends BaseMenuEmptyProps {}

export function MenuEmpty({ className, ...props }: MenuEmptyProps) {
  return <BaseMenu.Empty className={mergeClassName(styles.menu__empty, className)} {...props} />;
}
