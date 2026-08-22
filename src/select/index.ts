import { SelectArrow } from "./select-arrow";
import { SelectBackdrop } from "./select-backdrop";
import { SelectGroup } from "./select-group";
import { SelectGroupLabel } from "./select-group-label";
import { SelectIcon } from "./select-icon";
import { SelectItem } from "./select-item";
import { SelectItemIndicator } from "./select-item-indicator";
import { SelectItemText } from "./select-item-text";
import { SelectLabel } from "./select-label";
import { SelectList } from "./select-list";
import { SelectPopup } from "./select-popup";
import { SelectPortal } from "./select-portal";
import { SelectPositioner } from "./select-positioner";
import { SelectRoot } from "./select-root";
import { SelectScrollDownArrow } from "./select-scroll-down-arrow";
import { SelectScrollUpArrow } from "./select-scroll-up-arrow";
import { SelectSeparator } from "./select-separator";
import { SelectTrigger } from "./select-trigger";
import { SelectValue } from "./select-value";

/**
 * Compound component for choosing a predefined value from a dropdown.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Select } from '@vikram-hegde/skeletal'
 *
 * const items = [
 *   { value: 'system', label: 'System default' },
 *   { value: 'light', label: 'Light' },
 *   { value: 'dark', label: 'Dark' },
 * ]
 *
 * <Select.Root items={items} defaultValue="system">
 *   <Select.Label>Theme</Select.Label>
 *   <Select.Trigger>
 *     <Select.Value placeholder="Select theme" />
 *     <Select.Icon>
 *       <Icon name={CaretDown} size={16} />
 *     </Select.Icon>
 *   </Select.Trigger>
 *   <Select.Portal>
 *     <Select.Positioner>
 *       <Select.Popup>
 *         <Select.List>
 *           {items.map((item) => (
 *             <Select.Item key={item.value} value={item.value}>
 *               <Select.ItemIndicator>
 *                 <Icon name={Check} size={14} />
 *               </Select.ItemIndicator>
 *               <Select.ItemText>{item.label}</Select.ItemText>
 *             </Select.Item>
 *           ))}
 *         </Select.List>
 *       </Select.Popup>
 *     </Select.Positioner>
 *   </Select.Portal>
 * </Select.Root>
 * ```
 *
 * Composition follows the Base UI anatomy — `Select.Positioner` floats the
 * popup against the trigger and handles collision avoidance; by default it
 * overlaps the trigger so the selected item aligns with the trigger's value
 * text (`alignItemWithTrigger`). `Select.Portal` moves the popup to `<body>`.
 * `Select.ScrollUpArrow` / `Select.ScrollDownArrow` give edge scrolling on long
 * lists.
 *
 * All parts are thin styled wrappers over Base UI's `Select`, so every Base UI
 * prop, `render` override, and ref behaves the same. Part prop types are
 * exported separately (`SelectProps`, `SelectItemProps`, etc.).
 */
export const Select = {
  Root: SelectRoot,
  Label: SelectLabel,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Backdrop: SelectBackdrop,
  Positioner: SelectPositioner,
  Popup: SelectPopup,
  List: SelectList,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Arrow: SelectArrow,
  ScrollUpArrow: SelectScrollUpArrow,
  ScrollDownArrow: SelectScrollDownArrow,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Separator: SelectSeparator,
};

export type { SelectArrowProps } from "./select-arrow";
export type { SelectBackdropProps } from "./select-backdrop";
export type { SelectGroupProps } from "./select-group";
export type { SelectGroupLabelProps } from "./select-group-label";
export type { SelectIconProps } from "./select-icon";
export type { SelectItemProps } from "./select-item";
export type { SelectItemIndicatorProps } from "./select-item-indicator";
export type { SelectItemTextProps } from "./select-item-text";
export type { SelectLabelProps } from "./select-label";
export type { SelectListProps } from "./select-list";
export type { SelectPopupProps } from "./select-popup";
export type { SelectPortalProps } from "./select-portal";
export type { SelectPositionerProps } from "./select-positioner";
export type { SelectProps } from "./select-root";
export type { SelectScrollDownArrowProps } from "./select-scroll-down-arrow";
export type { SelectScrollUpArrowProps } from "./select-scroll-up-arrow";
export type { SelectSeparatorProps } from "./select-separator";
export type { SelectTriggerProps } from "./select-trigger";
export type { SelectValueProps } from "./select-value";
