import type { MenuClearProps as BaseMenuClearProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A button that clears the filter query. Renders a `<button>` element only
 * while the input has text.
 *
 * Requires the menu to be wrapped in `<Menu.FilterProvider>`. It is overlaid
 * on the end edge of `<Menu.Input>`, so pass an icon child and an
 * `aria-label` (e.g. `Clear filter`) rather than relying on visible text.
 */
export interface MenuClearProps extends BaseMenuClearProps {}

export function MenuClear({ className, ...props }: MenuClearProps) {
  return <BaseMenu.Clear className={mergeClassName(styles.menu__clear, className)} {...props} />;
}
