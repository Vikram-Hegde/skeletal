import { DialogBackdrop } from "@skeletal/dialog/dialog-backdrop";
import { DialogPortal } from "@skeletal/dialog/dialog-portal";
import { DialogViewport } from "@skeletal/dialog/dialog-viewport";
import { CommandPaletteContent } from "./command-palette-content";
import { CommandPaletteEmpty } from "./command-palette-empty";
import { CommandPaletteFooter } from "./command-palette-footer";
import { CommandPaletteGroup } from "./command-palette-group";
import { CommandPaletteGroupLabel } from "./command-palette-group-label";
import { CommandPaletteInput } from "./command-palette-input";
import { CommandPaletteInputGroup } from "./command-palette-input-group";
import { CommandPaletteItem } from "./command-palette-item";
import { CommandPaletteList } from "./command-palette-list";
import { CommandPaletteRoot } from "./command-palette-root";

/**
 * Compound component for a command palette.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { CommandPalette } from '@vikram-hegde/skeletal'
 *
 * <CommandPalette.Root open={open} onOpenChange={setOpen} items={commands}>
 *   <CommandPalette.Portal>
 *     <CommandPalette.Backdrop />
 *     <CommandPalette.Viewport>
 *       <CommandPalette.Content>
 *         <CommandPalette.InputGroup>
 *           <Icon name={MagnifyingGlass} size={16} />
 *           <CommandPalette.Input placeholder="Type a command…" />
 *         </CommandPalette.InputGroup>
 *         <CommandPalette.List>
 *           {(command) => (
 *             <CommandPalette.Item value={command.id} onClick={…}>
 *               {command.label}
 *             </CommandPalette.Item>
 *           )}
 *         </CommandPalette.List>
 *         <CommandPalette.Empty>No commands found.</CommandPalette.Empty>
 *         <CommandPalette.Footer>
 *           <kbd>↑↓</kbd> navigate · <kbd>↵</kbd> select
 *         </CommandPalette.Footer>
 *       </CommandPalette.Content>
 *     </CommandPalette.Viewport>
 *   </CommandPalette.Portal>
 * </CommandPalette.Root>
 * ```
 *
 * The palette is a modal Dialog composed with a query-filtered Base UI
 * Autocomplete (`inline` mode): typing filters the items, arrow keys navigate,
 * and Enter/click executes the highlighted command via the item's `onClick`.
 * Open it with a shortcut by controlling `open`.
 */
export const CommandPalette = {
  Root: CommandPaletteRoot,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Viewport: DialogViewport,
  Content: CommandPaletteContent,
  InputGroup: CommandPaletteInputGroup,
  Input: CommandPaletteInput,
  List: CommandPaletteList,
  Group: CommandPaletteGroup,
  GroupLabel: CommandPaletteGroupLabel,
  Item: CommandPaletteItem,
  Empty: CommandPaletteEmpty,
  Footer: CommandPaletteFooter,
};

export type { CommandPaletteContentProps } from "./command-palette-content";
export type { CommandPaletteEmptyProps } from "./command-palette-empty";
export type { CommandPaletteFooterProps } from "./command-palette-footer";
export type { CommandPaletteGroupProps } from "./command-palette-group";
export type { CommandPaletteGroupLabelProps } from "./command-palette-group-label";
export type { CommandPaletteInputProps } from "./command-palette-input";
export type { CommandPaletteInputGroupProps } from "./command-palette-input-group";
export type { CommandPaletteItemProps } from "./command-palette-item";
export type { CommandPaletteListProps } from "./command-palette-list";
export type {
  CommandPaletteOpenChangeDetails,
  CommandPaletteRootProps,
} from "./command-palette-root";
