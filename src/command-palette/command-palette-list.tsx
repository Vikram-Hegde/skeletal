import type { AutocompleteListProps as BaseAutocompleteListProps } from "@base-ui/react/autocomplete";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./command-palette.module.css";

/**
 * The scrollable list of filtered commands. Renders a `<div>` element with the
 * listbox role.
 *
 * The children can be a render function that receives each filtered item:
 *
 * ```tsx
 * <CommandPalette.List>
 *   {(command) => <CommandPalette.Item value={command.id}>…</CommandPalette.Item>}
 * </CommandPalette.List>
 * ```
 */
export interface CommandPaletteListProps extends BaseAutocompleteListProps {}

export function CommandPaletteList({ className, ...props }: CommandPaletteListProps) {
  return (
    <BaseAutocomplete.List className={mergeClassName(styles.command__list, className)} {...props} />
  );
}
