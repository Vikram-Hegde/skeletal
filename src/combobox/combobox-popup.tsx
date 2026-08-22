import type { ComboboxPopupProps as BaseComboboxPopupProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * The popup panel that holds the list (and optionally the input). Renders a
 * `<div>` element.
 *
 * Accepts all Base UI popup props, including `initialFocus` / `finalFocus` for
 * controlling focus when the popup opens/closes. Content animates in/out via
 * the `data-starting-style` / `data-ending-style` transitions.
 *
 * By default the popup is at least as wide as its anchor (`min-width:
 * var(--anchor-width)`), so the list aligns with the input group. Pass
 * `style={{ width: ... }}` or a `className` to constrain it.
 */
export interface ComboboxPopupProps extends BaseComboboxPopupProps {}

export function ComboboxPopup({ className, ...props }: ComboboxPopupProps) {
  return (
    <BaseCombobox.Popup className={mergeClassName(styles.combobox__popup, className)} {...props} />
  );
}
