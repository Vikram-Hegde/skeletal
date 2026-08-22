import type { SelectGroupLabelProps as BaseSelectGroupLabelProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A label for a `<Select.Group>`, automatically associated with it for screen
 * readers. Renders a `<div>` element.
 *
 * Styled small and muted; add a `Select.Separator` before the group to visually
 * divide it from the items above.
 */
export interface SelectGroupLabelProps extends BaseSelectGroupLabelProps {}

export function SelectGroupLabel({ className, ...props }: SelectGroupLabelProps) {
  return (
    <BaseSelect.GroupLabel
      className={mergeClassName(styles["select__group-label"], className)}
      {...props}
    />
  );
}
