import type { SelectItemTextProps as BaseSelectItemTextProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * The text label of a select item. Renders a `<div>` element.
 *
 * Place it as a child of a `Select.Item`; it fills the trailing grid column and
 * truncates with an ellipsis when the popup is narrower than its content.
 */
export interface SelectItemTextProps extends BaseSelectItemTextProps {}

export function SelectItemText({ className, ...props }: SelectItemTextProps) {
  return (
    <BaseSelect.ItemText
      className={mergeClassName(styles["select__item-text"], className)}
      {...props}
    />
  );
}
