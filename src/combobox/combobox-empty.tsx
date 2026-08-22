import type { ComboboxEmptyProps as BaseComboboxEmptyProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * Renders its children only when the filtered list is empty. Renders a `<div>`
 * element.
 *
 * Requires the `items` prop on `Combobox.Root`. Keep the element mounted in the
 * DOM (don't `display: none` or conditionally unmount it) — render or update its
 * children instead — so the "no results" announcement is consistent across
 * screen readers.
 */
export interface ComboboxEmptyProps extends BaseComboboxEmptyProps {}

export function ComboboxEmpty({ className, ...props }: ComboboxEmptyProps) {
  return (
    <BaseCombobox.Empty className={mergeClassName(styles.combobox__empty, className)} {...props} />
  );
}
