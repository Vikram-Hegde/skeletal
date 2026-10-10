import type { MenuInputProps as BaseMenuInputProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A search field that filters the menu items. Renders an `<input>` element.
 *
 * Requires the menu to be wrapped in `<Menu.FilterProvider>`. Place it as the
 * first child of `<Menu.Popup>` so `<Menu.Clear>` overlays its end edge, and
 * label it with `aria-label`, `aria-labelledby`, or a visible `<label>`.
 *
 * Accepts all Base UI input props (`placeholder`, `value`, `defaultValue`,
 * `onChange`, ...).
 */
export interface MenuInputProps extends BaseMenuInputProps {}

export function MenuInput({ className, ...props }: MenuInputProps) {
  return (
    <BaseMenu.Input className={mergeClassName(styles.menu__input, className)} {...props} />
  );
}
