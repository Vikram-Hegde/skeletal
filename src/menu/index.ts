import { MenuArrow } from "./menu-arrow";
import { MenuBackdrop } from "./menu-backdrop";
import { MenuCheckboxItem } from "./menu-checkbox-item";
import { MenuCheckboxItemIndicator } from "./menu-checkbox-item-indicator";
import { MenuClear } from "./menu-clear";
import { MenuEmpty } from "./menu-empty";
import { MenuFilterProvider } from "./menu-filter-provider";
import { MenuInput } from "./menu-input";
import { MenuList } from "./menu-list";
import { MenuGroup } from "./menu-group";
import { MenuGroupLabel } from "./menu-group-label";
import { MenuItem } from "./menu-item";
import { MenuLinkItem } from "./menu-link-item";
import { MenuPopup } from "./menu-popup";
import { MenuPortal } from "./menu-portal";
import { MenuPositioner } from "./menu-positioner";
import { MenuRadioGroup } from "./menu-radio-group";
import { MenuRadioItem } from "./menu-radio-item";
import { MenuRadioItemIndicator } from "./menu-radio-item-indicator";
import { MenuRoot } from "./menu-root";
import { MenuSeparator } from "./menu-separator";
import { MenuSubmenuRoot } from "./menu-submenu-root";
import { MenuSubmenuTrigger } from "./menu-submenu-trigger";
import { MenuTrigger } from "./menu-trigger";
import { MenuViewport } from "./menu-viewport";

/**
 * Compound component for dropdown menus.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Menu } from '@vikram-hegde/skeletal'
 *
 * <Menu.Root>
 *   <Menu.Trigger>Options</Menu.Trigger>
 *   <Menu.Portal>
 *     <Menu.Positioner sideOffset={8} align="start">
 *       <Menu.Popup>
 *         <Menu.Item onClick={…}>Edit</Menu.Item>
 *         <Menu.Separator />
 *         <Menu.Item danger>Delete</Menu.Item>
 *       </Menu.Popup>
 *     </Menu.Positioner>
 *   </Menu.Portal>
 * </Menu.Root>
 * ```
 *
 * Composition follows the Base UI anatomy — `Menu.Positioner` floats the
 * popup against the trigger and handles collision avoidance; `Menu.Portal`
 * moves it to `<body>`.
 *
 * All parts are thin styled wrappers over Base UI's `Menu`, so every Base UI
 * prop, `render` override, and ref behaves the same. Part prop types are
 * exported separately (`MenuItemProps`, `MenuPopupProps`, etc.).
 */
export const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Portal: MenuPortal,
  Backdrop: MenuBackdrop,
  Positioner: MenuPositioner,
  Popup: MenuPopup,
  Item: MenuItem,
  LinkItem: MenuLinkItem,
  Separator: MenuSeparator,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  SubmenuRoot: MenuSubmenuRoot,
  SubmenuTrigger: MenuSubmenuTrigger,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  Arrow: MenuArrow,
  Viewport: MenuViewport,
  FilterProvider: MenuFilterProvider,
  Input: MenuInput,
  Clear: MenuClear,
  Empty: MenuEmpty,
  List: MenuList,
};

export type { MenuArrowProps } from "./menu-arrow";
export type { MenuBackdropProps } from "./menu-backdrop";
export type { MenuCheckboxItemProps } from "./menu-checkbox-item";
export type { MenuCheckboxItemIndicatorProps } from "./menu-checkbox-item-indicator";
export type { MenuClearProps } from "./menu-clear";
export type { MenuEmptyProps } from "./menu-empty";
export type { MenuFilterProviderProps } from "./menu-filter-provider";
export type { MenuInputProps } from "./menu-input";
export type { MenuListProps } from "./menu-list";
export type { MenuGroupProps } from "./menu-group";
export type { MenuGroupLabelProps } from "./menu-group-label";
export type { MenuItemProps } from "./menu-item";
export type { MenuLinkItemProps } from "./menu-link-item";
export type { MenuPopupProps } from "./menu-popup";
export type { MenuPortalProps } from "./menu-portal";
export type { MenuPositionerProps } from "./menu-positioner";
export type { MenuRadioGroupProps } from "./menu-radio-group";
export type { MenuRadioItemProps } from "./menu-radio-item";
export type { MenuRadioItemIndicatorProps } from "./menu-radio-item-indicator";
export type { MenuProps } from "./menu-root";
export type { MenuSeparatorProps } from "./menu-separator";
export type { MenuSubmenuRootProps } from "./menu-submenu-root";
export type { MenuSubmenuTriggerProps } from "./menu-submenu-trigger";
export type { MenuTriggerProps } from "./menu-trigger";
export type { MenuViewportProps } from "./menu-viewport";
