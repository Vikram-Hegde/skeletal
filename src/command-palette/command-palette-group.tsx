import type { AutocompleteGroupProps as BaseAutocompleteGroupProps } from "@base-ui/react/autocomplete";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./command-palette.module.css";

/**
 * Groups related commands under an accessible label. Renders a `<div>`
 * element.
 *
 * Pair with `<CommandPalette.GroupLabel>` inside the group; Base UI wires the
 * `aria-labelledby` association automatically. Pass the group's items via the
 * `items` prop so filtering and keyboard navigation can find them.
 *
 * ```tsx
 * <CommandPalette.List>
 *   {(group) => (
 *     <CommandPalette.Group key={group.value} items={group.items}>
 *       <CommandPalette.GroupLabel>{group.value}</CommandPalette.GroupLabel>
 *       {group.items.map((command) => (
 *         <CommandPalette.Item key={command.id} value={command.label}>
 *           {command.label}
 *         </CommandPalette.Item>
 *       ))}
 *     </CommandPalette.Group>
 *   )}
 * </CommandPalette.List>
 * ```
 *
 * Rendered with `display: contents` so its items participate directly in the
 * scroll list.
 */
export interface CommandPaletteGroupProps extends BaseAutocompleteGroupProps {}

export function CommandPaletteGroup({ className, ...props }: CommandPaletteGroupProps) {
  return (
    <BaseAutocomplete.Group
      className={mergeClassName(styles.command__group, className)}
      {...props}
    />
  );
}
