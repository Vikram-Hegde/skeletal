import type { AutocompleteEmptyProps as BaseAutocompleteEmptyProps } from "@base-ui/react/autocomplete";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./command-palette.module.css";

/**
 * Rendered when the query matches no commands. Renders a `<div>` element.
 */
export interface CommandPaletteEmptyProps extends BaseAutocompleteEmptyProps {}

export function CommandPaletteEmpty({ className, ...props }: CommandPaletteEmptyProps) {
  return (
    <BaseAutocomplete.Empty
      className={mergeClassName(styles.command__empty, className)}
      {...props}
    />
  );
}
