import type { ComboboxLabelProps as BaseComboboxLabelProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * An accessible label for the combobox. Renders a `<div>` element.
 *
 * In the trigger pattern this labels the trigger; in the input pattern, label
 * the `<Combobox.Input>` with a native `<label>` (or pass `aria-label`) instead.
 * Place it as a sibling of the input/trigger inside `Combobox.Root`; Base UI
 * wires the `aria-labelledby` association automatically.
 *
 * Styled medium-weight with comfortable spacing below it (0.5rem), so the label
 * reads as a field caption rather than crowding the control. It dims to the
 * muted color when the combobox is `disabled`.
 */
export interface ComboboxLabelProps extends BaseComboboxLabelProps {}

export function ComboboxLabel({ className, ...props }: ComboboxLabelProps) {
  return (
    <BaseCombobox.Label className={mergeClassName(styles.combobox__label, className)} {...props} />
  );
}
