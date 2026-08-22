import type { AutocompleteInputProps as BaseAutocompleteInputProps } from "@base-ui/react/autocomplete";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./command-palette.module.css";

/**
 * The search input that filters the commands as you type. Renders an `<input>`
 * element. Borderless and transparent — the surrounding `InputGroup` provides
 * the chrome.
 */
export interface CommandPaletteInputProps extends BaseAutocompleteInputProps {}

export function CommandPaletteInput({ className, ...props }: CommandPaletteInputProps) {
  return (
    <BaseAutocomplete.Input
      className={mergeClassName(styles.command__input, className)}
      {...props}
    />
  );
}
