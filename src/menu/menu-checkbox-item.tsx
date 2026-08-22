import type { MenuCheckboxItemProps as BaseMenuCheckboxItemProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A menu item that toggles a setting on or off. Renders a `<div>` element.
 *
 * Accepts all Base UI checkbox-item props: `checked`, `defaultChecked`, and
 * `onCheckedChange` for controlled/uncontrolled state, plus `disabled`,
 * `label`, and `closeOnClick` (defaults to `false`).
 *
 * The first column is reserved for a `Menu.CheckboxItemIndicator`, so labels
 * stay aligned whether or not an item is checked.
 */
export interface MenuCheckboxItemProps extends BaseMenuCheckboxItemProps {}

export function MenuCheckboxItem({ className, ...props }: MenuCheckboxItemProps) {
  return (
    <BaseMenu.CheckboxItem
      className={mergeClassName(styles["menu__checkbox-item"], className)}
      {...props}
    />
  );
}
