import type { ComboboxListProps as BaseComboboxListProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A scrollable container for the filtered items. Renders a `<div>` element.
 *
 * Constrained by `--available-height` so long lists scroll. Children may be a
 * render function that receives each item (and index), which is the idiomatic
 * way to map filtered items to `Combobox.Item`s.
 */
export interface ComboboxListProps extends BaseComboboxListProps {}

export function ComboboxList({ className, ...props }: ComboboxListProps) {
  return (
    <BaseCombobox.List className={mergeClassName(styles.combobox__list, className)} {...props} />
  );
}
