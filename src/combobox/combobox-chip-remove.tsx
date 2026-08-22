import type { ComboboxChipRemoveProps as BaseComboboxChipRemoveProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A button that removes its parent `Combobox.Chip`. Renders a `<button>`
 * element.
 *
 * Place it as the last child of a chip with an `x` icon. Give it an
 * `aria-label` like `Remove <value>`.
 */
export interface ComboboxChipRemoveProps extends BaseComboboxChipRemoveProps {}

export function ComboboxChipRemove({ className, ...props }: ComboboxChipRemoveProps) {
  return (
    <BaseCombobox.ChipRemove
      className={mergeClassName(styles["combobox__chip-remove"], className)}
      {...props}
    />
  );
}
