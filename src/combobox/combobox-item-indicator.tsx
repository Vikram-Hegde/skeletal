import type { ComboboxItemIndicatorProps as BaseComboboxItemIndicatorProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A checkmark slot shown on the selected item. Renders a `<span>` element.
 *
 * Place it as the first child of a `Combobox.Item`; it sits in the leading grid
 * column. The indicator (and its children) unmount when the item is not
 * selected unless `keepMounted` is set. It animates in/out via
 * `data-starting-style` / `data-ending-style`.
 *
 * @default keepMounted = false
 */
export interface ComboboxItemIndicatorProps extends BaseComboboxItemIndicatorProps {}

export function ComboboxItemIndicator({ className, ...props }: ComboboxItemIndicatorProps) {
  return (
    <BaseCombobox.ItemIndicator
      className={mergeClassName(styles["combobox__item-indicator"], className)}
      {...props}
    />
  );
}
