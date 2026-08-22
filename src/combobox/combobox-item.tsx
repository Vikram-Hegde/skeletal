import type { ComboboxItemProps as BaseComboboxItemProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * An individual option in the combobox list. Renders a `<div>` element.
 *
 * Accepts all Base UI item props: `value` (any primitive or object),
 * `disabled`, `label` for keyboard text navigation, and `onClick`. Give each
 * item a unique `value`; when `Combobox.Value` renders the label, pass the same
 * `items` to `Combobox.Root`.
 *
 * A selected item shows its `Combobox.ItemIndicator` (e.g. a check icon) in the
 * leading column; the highlighted item (keyboard/pointer) gets the accent
 * background.
 *
 * The leading column is always reserved: every item mirrors the list's
 * two-column grid template, so labels line up on the same baseline whether or
 * not an indicator is mounted.
 *
 * @default value = null
 * @default disabled = false
 */
export interface ComboboxItemProps extends BaseComboboxItemProps {}

export function ComboboxItem({ className, ...props }: ComboboxItemProps) {
  return (
    <BaseCombobox.Item className={mergeClassName(styles.combobox__item, className)} {...props} />
  );
}
