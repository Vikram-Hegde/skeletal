import type {
  AutocompleteRootChangeEventDetails,
  AutocompleteRootProps,
} from "@base-ui/react/autocomplete";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import type { DialogRootChangeEventDetails, DialogRootProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ReactNode } from "react";

/**
 * The open/close event details shared by the underlying Dialog and Autocomplete.
 */
export type CommandPaletteOpenChangeDetails =
  | DialogRootChangeEventDetails
  | AutocompleteRootChangeEventDetails;

/**
 * The root of the command palette, composing a modal Dialog with a
 * query-filtered Autocomplete list. Renders no DOM element.
 *
 * Use `open` + `onOpenChange` to control the palette (e.g. a Cmd/Ctrl+K
 * shortcut) and `items` to provide the commands. Items are filtered as the
 * user types; highlight/selection and keyboard navigation are handled by Base
 * UI's Autocomplete.
 *
 * ```tsx
 * <CommandPalette.Root
 *   open={open}
 *   onOpenChange={setOpen}
 *   items={commands}
 *   autoHighlight="always"
 * >
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
 *             <CommandPalette.Item
 *               key={command.id}
 *               value={command.id}
 *               onClick={() => runCommand(command)}
 *             >
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
 */
export interface CommandPaletteRootProps<Item>
  extends DialogRootProps,
    Pick<
      AutocompleteRootProps<Item>,
      | "value"
      | "defaultValue"
      | "onValueChange"
      | "onItemHighlighted"
      | "mode"
      | "autoHighlight"
      | "keepHighlight"
      | "highlightItemOnHover"
      | "itemToStringValue"
      | "submitOnItemClick"
      | "filter"
    > {
  /**
   * The commands to filter and display.
   */
  items?: readonly Item[];
  /**
   * Event handler called when the palette opens or closes.
   */
  onOpenChange?: (open: boolean, eventDetails: CommandPaletteOpenChangeDetails) => void;
}

export function CommandPaletteRoot<Item>({
  open,
  defaultOpen,
  onOpenChange,
  onOpenChangeComplete,
  modal = true,
  children,
  items,
  value,
  defaultValue,
  onValueChange,
  onItemHighlighted,
  mode = "list",
  autoHighlight = "always",
  keepHighlight,
  highlightItemOnHover,
  itemToStringValue,
  submitOnItemClick,
  filter,
  ...dialogProps
}: CommandPaletteRootProps<Item>) {
  return (
    <BaseDialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      onOpenChangeComplete={onOpenChangeComplete}
      modal={modal}
      {...dialogProps}
    >
      <BaseAutocomplete.Root
        items={items}
        open={open}
        defaultOpen={defaultOpen}
        inline
        mode={mode}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        onItemHighlighted={onItemHighlighted}
        autoHighlight={autoHighlight}
        keepHighlight={keepHighlight}
        highlightItemOnHover={highlightItemOnHover}
        itemToStringValue={itemToStringValue}
        submitOnItemClick={submitOnItemClick}
        filter={filter}
      >
        {children as ReactNode}
      </BaseAutocomplete.Root>
    </BaseDialog.Root>
  );
}
