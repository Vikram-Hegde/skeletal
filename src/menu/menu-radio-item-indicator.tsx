import type { MenuRadioItemIndicatorProps as BaseMenuRadioItemIndicatorProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * Marks a `Menu.RadioItem` as selected. Renders a `<span>` element.
 *
 * Place it as the first child of the radio item and render your selected-state
 * glyph inside (e.g. an `<Icon name={Check} />`). `keepMounted` keeps the
 * indicator in the DOM when the item is not selected (useful for exit
 * animations).
 *
 * @default keepMounted = false
 */
export interface MenuRadioItemIndicatorProps extends BaseMenuRadioItemIndicatorProps {}

export function MenuRadioItemIndicator({ className, ...props }: MenuRadioItemIndicatorProps) {
  return (
    <BaseMenu.RadioItemIndicator
      className={mergeClassName(styles["menu__radio-item-indicator"], className)}
      {...props}
    />
  );
}
