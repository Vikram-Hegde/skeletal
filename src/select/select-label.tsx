import type { SelectLabelProps as BaseSelectLabelProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * An accessible label for the select trigger. Renders a `<div>` element.
 *
 * Clicking it focuses the trigger without opening the popup. Place it as a
 * sibling of the trigger inside `Select.Root`; Base UI wires the
 * `aria-labelledby` association automatically.
 *
 * Styled medium-weight with comfortable spacing below it (0.5rem), so the
 * label reads as a field caption rather than crowding the trigger. It dims to
 * the muted color when the select is `disabled`.
 */
export interface SelectLabelProps extends BaseSelectLabelProps {}

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <BaseSelect.Label className={mergeClassName(styles.select__label, className)} {...props} />
  );
}
