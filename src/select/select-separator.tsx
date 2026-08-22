import type { SelectSeparatorProps as BaseSelectSeparatorProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A horizontal divider between groups of select items. Renders a `<div>` element.
 *
 * It is announced to screen readers via `role="separator"`.
 *
 * @default orientation = 'horizontal'
 */
export interface SelectSeparatorProps extends BaseSelectSeparatorProps {}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <BaseSelect.Separator
      className={mergeClassName(styles.select__separator, className)}
      {...props}
    />
  );
}
