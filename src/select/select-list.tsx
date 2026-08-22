import type { SelectListProps as BaseSelectListProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A scrollable container for the select items. Renders a `<div>` element.
 *
 * Constrained by `--available-height` so long lists scroll; wrap it between
 * the `Select.ScrollUpArrow` and `Select.ScrollDownArrow` for edge scrolling.
 */
export interface SelectListProps extends BaseSelectListProps {}

export function SelectList({ className, ...props }: SelectListProps) {
  return <BaseSelect.List className={mergeClassName(styles.select__list, className)} {...props} />;
}
