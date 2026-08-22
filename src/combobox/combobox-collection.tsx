import type { ComboboxCollectionProps as BaseComboboxCollectionProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";

/**
 * Renders filtered list items as a group. Renders no DOM element.
 *
 * Provide a render function receiving each item (and index) to map filtered
 * items to `Combobox.Item`s. This is the building block for custom layouts
 * (e.g. grouped/grid lists); for a flat list, pass the same function directly
 * to `Combobox.List`, which implicitly wraps it.
 */
export interface ComboboxCollectionProps extends BaseComboboxCollectionProps {}

export function ComboboxCollection(props: ComboboxCollectionProps) {
  return <BaseCombobox.Collection {...props} />;
}
