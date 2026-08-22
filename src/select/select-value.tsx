import type { SelectValueProps as BaseSelectValueProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * The currently selected value shown in the trigger. Renders a `<span>` element.
 *
 * By default renders the raw value, or the matching label when `items` is
 * passed to `Select.Root`. Pass `placeholder` to show hint text when no value
 * is selected, or a function as `children` to format the value:
 *
 * ```tsx
 * <Select.Value placeholder="Choose a theme">
 *   {(value) => value ? labels[value] : 'Nothing selected'}
 * </Select.Value>
 * ```
 *
 * Placeholder text is styled muted via the `data-placeholder` state.
 */
export interface SelectValueProps extends BaseSelectValueProps {}

export function SelectValue({ className, ...props }: SelectValueProps) {
  return (
    <BaseSelect.Value className={mergeClassName(styles.select__value, className)} {...props} />
  );
}
