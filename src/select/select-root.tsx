import type { SelectRootProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";

/**
 * The root of the select, grouping all parts together. Renders no DOM element.
 *
 * All Base UI root props are supported: `value` / `defaultValue`,
 * `onValueChange`, `multiple`, `items`, `itemToStringValue`, `open` /
 * `defaultOpen`, `onOpenChange`, `disabled`, `readOnly`, `required`,
 * `modal`, `name`, `form`, and `autoComplete`.
 *
 * Pass `items` (an array of `{ value, label }` or a record of label lookups)
 * so `Select.Value` renders the matching label for the selected value instead
 * of the raw value. Add `multiple` to allow multi-selection.
 *
 * `modal` is `true` by default (pointer outside is blocked and page scroll is
 * locked while open); set `modal={false}` for a non-blocking dropdown that
 * dismisses when you click elsewhere.
 *
 * @default modal = true
 */
export interface SelectProps<Value, Multiple extends boolean | undefined = false>
  extends SelectRootProps<Value, Multiple> {}

export function SelectRoot<Value, Multiple extends boolean | undefined = false>(
  props: SelectProps<Value, Multiple>,
) {
  return <BaseSelect.Root {...props} />;
}
