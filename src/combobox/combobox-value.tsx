import type { ComboboxValueProps as BaseComboboxValueProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";

/**
 * The current selected value, for formatting. Renders no DOM element.
 *
 * By default renders the selected value's label (when `items` is passed to
 * `Combobox.Root`) or the raw value. Pass `placeholder` to show hint text when
 * no value is selected, or a function as `children` to format the value:
 *
 * ```tsx
 * <Combobox.Value placeholder="Choose a fruit">
 *   {(value) => value ? value.label.toUpperCase() : ''}
 * </Combobox.Value>
 * ```
 *
 * In multi-select mode the child function receives the array of selected values
 * (the place to render `Combobox.Chip`s).
 */
export interface ComboboxValueProps extends BaseComboboxValueProps {}

export function ComboboxValue(props: ComboboxValueProps) {
  return <BaseCombobox.Value {...props} />;
}
