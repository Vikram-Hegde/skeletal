import type { SelectGroupProps as BaseSelectGroupProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * Groups related select items under an accessible label. Renders a `<div>`
 * element.
 *
 * Pair with `<Select.GroupLabel>` inside the group; Base UI wires the
 * `aria-labelledby` association automatically.
 *
 * Rendered with `display: contents` so its items participate directly in the
 * popup grid.
 */
export interface SelectGroupProps extends BaseSelectGroupProps {}

export function SelectGroup({ className, ...props }: SelectGroupProps) {
  return (
    <BaseSelect.Group className={mergeClassName(styles.select__group, className)} {...props} />
  );
}
