import type { MenuCheckboxItemIndicatorProps as BaseMenuCheckboxItemIndicatorProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * Marks a `Menu.CheckboxItem` as checked. Renders a `<span>` element.
 *
 * Place it as the first child of the checkbox item and render your checked
 * glyph inside (e.g. an `<Icon name={Check} />`). `keepMounted` keeps the
 * indicator in the DOM when the item is not checked (useful for exit
 * animations).
 *
 * @default keepMounted = false
 */
export interface MenuCheckboxItemIndicatorProps extends BaseMenuCheckboxItemIndicatorProps {}

export function MenuCheckboxItemIndicator({ className, ...props }: MenuCheckboxItemIndicatorProps) {
  return (
    <BaseMenu.CheckboxItemIndicator
      className={mergeClassName(styles["menu__checkbox-item-indicator"], className)}
      {...props}
    />
  );
}
