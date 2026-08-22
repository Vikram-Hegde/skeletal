import type { ComboboxGroupProps as BaseComboboxGroupProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * Groups related items under an accessible label. Renders a `<div>` element.
 *
 * Pair with `<Combobox.GroupLabel>` inside the group; Base UI wires the
 * `aria-labelledby` association automatically.
 *
 * Rendered with `display: contents` so its items participate directly in the
 * popup layout.
 */
export interface ComboboxGroupProps extends BaseComboboxGroupProps {}

export function ComboboxGroup({ className, ...props }: ComboboxGroupProps) {
  return (
    <BaseCombobox.Group className={mergeClassName(styles.combobox__group, className)} {...props} />
  );
}
