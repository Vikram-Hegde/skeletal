import type { SelectItemProps as BaseSelectItemProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * An individual option in the select popup. Renders a `<div>` element.
 *
 * Accepts all Base UI item props: `value` (any primitive or object), `disabled`,
 * and `label` for keyboard text navigation. Give each item a unique `value`;
 * when `Select.Value` renders the label, pass the same `items` to `Select.Root`.
 *
 * A selected item shows its `Select.ItemIndicator` (e.g. a check icon) in the
 * leading column.
 *
 * @default value = null
 * @default disabled = false
 */
export interface SelectItemProps extends BaseSelectItemProps {}

export function SelectItem({ className, ...props }: SelectItemProps) {
  return <BaseSelect.Item className={mergeClassName(styles.select__item, className)} {...props} />;
}
