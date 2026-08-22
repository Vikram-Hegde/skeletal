import type { ComboboxRowProps as BaseComboboxRowProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * Displays a single row of items in a grid list. Renders a `<div>` element.
 *
 * Enable `grid` on `Combobox.Root` to turn the listbox into a grid, then wrap
 * each row's items in a `Combobox.Row`. Rendered with `display: contents` so
 * rows don't disrupt the flat list layout when `grid` is off.
 */
export interface ComboboxRowProps extends BaseComboboxRowProps {}

export function ComboboxRow({ className, ...props }: ComboboxRowProps) {
  return (
    <BaseCombobox.Row className={mergeClassName(styles.combobox__row, className)} {...props} />
  );
}
