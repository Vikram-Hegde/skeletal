import type { ComboboxSeparatorProps as BaseComboboxSeparatorProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A horizontal divider between groups of items. Renders a `<div>` element.
 *
 * It is announced to screen readers via `role="separator"`.
 *
 * @default orientation = 'horizontal'
 */
export interface ComboboxSeparatorProps extends BaseComboboxSeparatorProps {}

export function ComboboxSeparator({ className, ...props }: ComboboxSeparatorProps) {
  return (
    <BaseCombobox.Separator
      className={mergeClassName(styles.combobox__separator, className)}
      {...props}
    />
  );
}
