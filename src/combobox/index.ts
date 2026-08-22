import { ComboboxArrow } from "./combobox-arrow";
import { ComboboxBackdrop } from "./combobox-backdrop";
import { ComboboxChip } from "./combobox-chip";
import { ComboboxChipRemove } from "./combobox-chip-remove";
import { ComboboxChips } from "./combobox-chips";
import { ComboboxClear } from "./combobox-clear";
import { ComboboxCollection } from "./combobox-collection";
import { ComboboxEmpty } from "./combobox-empty";
import { ComboboxGroup } from "./combobox-group";
import { ComboboxGroupLabel } from "./combobox-group-label";
import { ComboboxIcon } from "./combobox-icon";
import { ComboboxInput } from "./combobox-input";
import { ComboboxInputGroup } from "./combobox-input-group";
import { ComboboxItem } from "./combobox-item";
import { ComboboxItemIndicator } from "./combobox-item-indicator";
import { ComboboxLabel } from "./combobox-label";
import { ComboboxList } from "./combobox-list";
import { ComboboxPopup } from "./combobox-popup";
import { ComboboxPortal } from "./combobox-portal";
import { ComboboxPositioner } from "./combobox-positioner";
import { ComboboxRoot } from "./combobox-root";
import { ComboboxRow } from "./combobox-row";
import { ComboboxSeparator } from "./combobox-separator";
import { ComboboxStatus } from "./combobox-status";
import { ComboboxTrigger } from "./combobox-trigger";
import { ComboboxValue } from "./combobox-value";

/**
 * Compound component for a filterable select — an input combined with a list of
 * predefined items.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Combobox } from '@vikram-hegde/elemental'
 *
 * const fruits = [
 *   { value: 'apple', label: 'Apple' },
 *   { value: 'banana', label: 'Banana' },
 *   { value: 'orange', label: 'Orange' },
 * ]
 *
 * <Combobox.Root items={fruits}>
 *   <Combobox.Label>Choose a fruit</Combobox.Label>
 *   <Combobox.InputGroup>
 *     <Combobox.Input placeholder="e.g. Apple" />
 *     <Combobox.Clear aria-label="Clear selection">
 *       <Icon name={X} size={14} />
 *     </Combobox.Clear>
 *     <Combobox.Trigger aria-label="Open popup">
 *       <Combobox.Icon>
 *         <Icon name={CaretDown} size={16} />
 *       </Combobox.Icon>
 *     </Combobox.Trigger>
 *   </Combobox.InputGroup>
 *   <Combobox.Portal>
 *     <Combobox.Positioner>
 *       <Combobox.Popup>
 *         <Combobox.Empty>No fruits found.</Combobox.Empty>
 *         <Combobox.List>
 *           {(fruit) => (
 *             <Combobox.Item key={fruit.value} value={fruit}>
 *               <Combobox.ItemIndicator>
 *                 <Icon name={Check} size={14} />
 *               </Combobox.ItemIndicator>
 *               {fruit.label}
 *             </Combobox.Item>
 *           )}
 *         </Combobox.List>
 *       </Combobox.Popup>
 *     </Combobox.Positioner>
 *   </Combobox.Portal>
 * </Combobox.Root>
 * ```
 *
 * Composition follows the Base UI anatomy — the popup anchors to the
 * `Combobox.InputGroup` (so it matches the field's width) and handles collision
 * avoidance; `Combobox.Portal` moves it to `<body>`. Add `multiple` to
 * `Combobox.Root` and render `Combobox.Chip`s inside `Combobox.Value` for
 * multi-select.
 *
 * All parts are thin styled wrappers over Base UI's `Combobox`, so every Base UI
 * prop, `render` override, and ref behaves the same. Part prop types are
 * exported separately (`ComboboxProps`, `ComboboxItemProps`, etc.).
 */
export const Combobox = {
  Root: ComboboxRoot,
  Label: ComboboxLabel,
  InputGroup: ComboboxInputGroup,
  Input: ComboboxInput,
  Trigger: ComboboxTrigger,
  Icon: ComboboxIcon,
  Clear: ComboboxClear,
  Value: ComboboxValue,
  Chips: ComboboxChips,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
  Portal: ComboboxPortal,
  Backdrop: ComboboxBackdrop,
  Positioner: ComboboxPositioner,
  Popup: ComboboxPopup,
  Arrow: ComboboxArrow,
  Status: ComboboxStatus,
  Empty: ComboboxEmpty,
  List: ComboboxList,
  Row: ComboboxRow,
  Item: ComboboxItem,
  ItemIndicator: ComboboxItemIndicator,
  Separator: ComboboxSeparator,
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
  Collection: ComboboxCollection,
};

export type { ComboboxArrowProps } from "./combobox-arrow";
export type { ComboboxBackdropProps } from "./combobox-backdrop";
export type { ComboboxChipProps } from "./combobox-chip";
export type { ComboboxChipRemoveProps } from "./combobox-chip-remove";
export type { ComboboxChipsProps } from "./combobox-chips";
export type { ComboboxClearProps } from "./combobox-clear";
export type { ComboboxCollectionProps } from "./combobox-collection";
export type { ComboboxEmptyProps } from "./combobox-empty";
export type { ComboboxGroupProps } from "./combobox-group";
export type { ComboboxGroupLabelProps } from "./combobox-group-label";
export type { ComboboxIconProps } from "./combobox-icon";
export type { ComboboxInputProps } from "./combobox-input";
export type { ComboboxInputGroupProps } from "./combobox-input-group";
export type { ComboboxItemProps } from "./combobox-item";
export type { ComboboxItemIndicatorProps } from "./combobox-item-indicator";
export type { ComboboxLabelProps } from "./combobox-label";
export type { ComboboxListProps } from "./combobox-list";
export type { ComboboxPopupProps } from "./combobox-popup";
export type { ComboboxPortalProps } from "./combobox-portal";
export type { ComboboxPositionerProps } from "./combobox-positioner";
export type { ComboboxProps } from "./combobox-root";
export type { ComboboxRowProps } from "./combobox-row";
export type { ComboboxSeparatorProps } from "./combobox-separator";
export type { ComboboxStatusProps } from "./combobox-status";
export type { ComboboxTriggerProps } from "./combobox-trigger";
export type { ComboboxValueProps } from "./combobox-value";
