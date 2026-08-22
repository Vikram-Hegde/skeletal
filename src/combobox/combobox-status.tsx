import type { ComboboxStatusProps as BaseComboboxStatusProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * Displays a status message (e.g. "Loading…") whose changes are announced
 * politely to screen readers. Renders a `<div>` element.
 *
 * Useful for conveying the state of an asynchronously loaded list. Keep the
 * element mounted in the DOM — update or conditionally render its children
 * instead — so announcements are consistent.
 */
export interface ComboboxStatusProps extends BaseComboboxStatusProps {}

export function ComboboxStatus({ className, ...props }: ComboboxStatusProps) {
  return (
    <BaseCombobox.Status
      className={mergeClassName(styles.combobox__status, className)}
      {...props}
    />
  );
}
