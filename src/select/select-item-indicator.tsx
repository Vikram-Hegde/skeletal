import type { SelectItemIndicatorProps as BaseSelectItemIndicatorProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A checkmark slot shown on the selected item. Renders a `<span>` element.
 *
 * Place it as the first child of a `Select.Item`; it sits in the leading grid
 * column. The indicator (and its children) unmount when the item is not
 * selected unless `keepMounted` is set. It animates in/out via
 * `data-starting-style` / `data-ending-style`.
 *
 * @default keepMounted = false
 */
export interface SelectItemIndicatorProps extends BaseSelectItemIndicatorProps {}

export function SelectItemIndicator({ className, ...props }: SelectItemIndicatorProps) {
  return (
    <BaseSelect.ItemIndicator
      className={mergeClassName(styles["select__item-indicator"], className)}
      {...props}
    />
  );
}
