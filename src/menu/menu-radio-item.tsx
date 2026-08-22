import type { MenuRadioItemProps as BaseMenuRadioItemProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A menu item that behaves like a radio button within its `Menu.RadioGroup`.
 * Renders a `<div>` element.
 *
 * `value` (required) is what `Menu.RadioGroup.onValueChange` reports on
 * selection. Also accepts `disabled`, `label`, and `closeOnClick` (defaults to
 * `false` — selecting usually keeps the menu open).
 *
 * The first column is reserved for a `Menu.RadioItemIndicator`, so labels
 * stay aligned whether or not an item is checked.
 */
export interface MenuRadioItemProps extends BaseMenuRadioItemProps {}

export function MenuRadioItem({ className, ...props }: MenuRadioItemProps) {
  return (
    <BaseMenu.RadioItem
      className={mergeClassName(styles["menu__radio-item"], className)}
      {...props}
    />
  );
}
