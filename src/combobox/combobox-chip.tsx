import type { ComboboxChipProps as BaseComboboxChipProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * An individual chip representing one selected value in a multi-select
 * combobox. Renders a `<div>` element.
 *
 * Give it the value's label as children and a `Combobox.ChipRemove` for the
 * remove affordance. Provide an `aria-label` describing the value.
 */
export interface ComboboxChipProps extends BaseComboboxChipProps {}

export function ComboboxChip({ className, ...props }: ComboboxChipProps) {
  return (
    <BaseCombobox.Chip className={mergeClassName(styles.combobox__chip, className)} {...props} />
  );
}
