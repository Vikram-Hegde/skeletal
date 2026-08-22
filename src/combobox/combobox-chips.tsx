import type { ComboboxChipsProps as BaseComboboxChipsProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A container for the chips in a multi-select combobox. Renders a `<div>`
 * element.
 *
 * Wrap the `<Combobox.Value>` (which renders one `Combobox.Chip` per selected
 * value, followed by the `<Combobox.Input>`) inside it. Chips wrap onto multiple
 * lines as the selection grows.
 */
export interface ComboboxChipsProps extends BaseComboboxChipsProps {}

export function ComboboxChips({ className, ...props }: ComboboxChipsProps) {
  return (
    <BaseCombobox.Chips className={mergeClassName(styles.combobox__chips, className)} {...props} />
  );
}
