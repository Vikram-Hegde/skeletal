import type { ComboboxInputProps as BaseComboboxInputProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * The text input used to filter the items. Renders an `<input>` element.
 *
 * Inside a `Combobox.InputGroup` the input grows to fill it, and trailing
 * controls push against its right edge; the group provides the border, focus
 * ring, and leading gutter. Rendered directly inside `Combobox.Popup` (the
 * searchable-select pattern) it spans the popup end-to-end with a bottom
 * divider, and its inline gutter matches the list's so text lines up with
 * items. Placeholder text is muted.
 *
 * This is the combobox's form control, so label it with a native `<label>` (or
 * `aria-label`) for an accessible name.
 */
export interface ComboboxInputProps extends BaseComboboxInputProps {}

export function ComboboxInput({ className, ...props }: ComboboxInputProps) {
  return (
    <BaseCombobox.Input className={mergeClassName(styles.combobox__input, className)} {...props} />
  );
}
