import type { AutocompleteItemProps as BaseAutocompleteItemProps } from "@base-ui/react/autocomplete";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import type { ReactNode } from "react";
import styles from "./command-palette.module.css";

/**
 * A single command row. Renders a `<div>` element with the option role.
 *
 * Runs whatever you pass to `onClick` when activated (click or Enter on the
 * highlighted item). Pass `hint` for a muted, right-aligned shortcut or group
 * label.
 */
export interface CommandPaletteItemProps extends BaseAutocompleteItemProps {
  /**
   * A muted hint shown on the right side of the row (e.g. a keyboard shortcut
   * or the command's group).
   */
  hint?: ReactNode;
}

export function CommandPaletteItem({
  className,
  hint,
  children,
  ...props
}: CommandPaletteItemProps) {
  return (
    <BaseAutocomplete.Item className={mergeClassName(styles.command__item, className)} {...props}>
      {children}
      {hint !== undefined && <span className={styles["command__item-hint"]}>{hint}</span>}
    </BaseAutocomplete.Item>
  );
}
