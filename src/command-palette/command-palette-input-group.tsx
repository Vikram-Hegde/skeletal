import type { AutocompleteInputGroupProps as BaseAutocompleteInputGroupProps } from "@base-ui/react/autocomplete";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { Cluster } from "@skeletal/layout/cluster";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./command-palette.module.css";

/**
 * A row containing the search icon and the query input, separated from the
 * list by a bottom border. Renders a `<div>` element.
 *
 * The icon and input are composed in a `Cluster` layout primitive
 * (`space="0.625rem"`, `align="center"`).
 */
export interface CommandPaletteInputGroupProps extends BaseAutocompleteInputGroupProps {}

export function CommandPaletteInputGroup({
  className,
  children,
  ...props
}: CommandPaletteInputGroupProps) {
  return (
    <BaseAutocomplete.InputGroup
      className={mergeClassName(styles["command__input-group"], className)}
      {...props}
    >
      <Cluster space="0.625rem" align="center">
        {children}
      </Cluster>
    </BaseAutocomplete.InputGroup>
  );
}
