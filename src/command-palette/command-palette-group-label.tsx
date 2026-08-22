import type { AutocompleteGroupLabelProps as BaseAutocompleteGroupLabelProps } from "@base-ui/react/autocomplete";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./command-palette.module.css";

/**
 * A label for a `<CommandPalette.Group>`, automatically associated with it for
 * screen readers. Renders a `<div>` element.
 *
 * Styled small, muted and uppercase; add a `<CommandPalette.Group>` before the
 * group to visually divide it from the commands above.
 */
export interface CommandPaletteGroupLabelProps extends BaseAutocompleteGroupLabelProps {}

export function CommandPaletteGroupLabel({ className, ...props }: CommandPaletteGroupLabelProps) {
  return (
    <BaseAutocomplete.GroupLabel
      className={mergeClassName(styles["command__group-label"], className)}
      {...props}
    />
  );
}
