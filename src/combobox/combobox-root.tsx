import type { ComboboxRootProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";

/**
 * The root of the combobox, grouping all parts together. Renders no DOM element.
 *
 * All Base UI root props are supported: `value` / `defaultValue`,
 * `onValueChange`, `multiple`, `items`, `itemToStringLabel`,
 * `itemToStringValue`, `isItemEqualToValue`, `open` / `defaultOpen`,
 * `onOpenChange`, `onInputValueChange`, `autoHighlight`, `highlightItemOnHover`,
 * `disabled`, `readOnly`, `required`, `name`, `form`, `autoComplete`, and the
 * `filter` function.
 *
 * Pass `items` (an array of `{ value, label }` or a record of label lookups)
 * so filtering and value formatting work. The `Value` type is inferred from
 * `value` / `defaultValue`. Add `multiple` to allow multi-selection with chips.
 *
 * @default multiple = false
 */
export interface ComboboxProps<Value, Multiple extends boolean | undefined = false>
  extends ComboboxRootProps<Value, Multiple> {}

export function ComboboxRoot<Value, Multiple extends boolean | undefined = false>(
  props: ComboboxProps<Value, Multiple>,
) {
  return <BaseCombobox.Root {...props} />;
}
