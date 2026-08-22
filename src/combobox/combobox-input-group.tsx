import type { ComboboxInputGroupProps as BaseComboboxInputGroupProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A bordered container that wraps the input and its trailing controls (clear
 * and trigger buttons, or chips). Renders a `<div>` element.
 *
 * The group reads as the field's focus target: it shows a focus ring whenever
 * the inner input is focused, and dims when `disabled`. Place the
 * `<Combobox.Input>` first, then `<Combobox.Clear>` / `<Combobox.Trigger>` (or
 * `<Combobox.Chips>` for multi-select) so they line up against the trailing
 * edge.
 */
export interface ComboboxInputGroupProps extends BaseComboboxInputGroupProps {}

export function ComboboxInputGroup({ className, ...props }: ComboboxInputGroupProps) {
  return (
    <BaseCombobox.InputGroup
      className={mergeClassName(styles["combobox__input-group"], className)}
      {...props}
    />
  );
}
