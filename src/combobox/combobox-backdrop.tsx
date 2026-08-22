import type { ComboboxBackdropProps as BaseComboboxBackdropProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * An overlay rendered beneath the combobox popup. Renders a `<div>` element.
 *
 * Only rendered when the combobox is modal. Clicking the backdrop dismisses the
 * popup. The overlay is translucent; set a fully opaque color (or remove it) if
 * you prefer a "dimmed page" look vs. a light scrim.
 */
export interface ComboboxBackdropProps extends BaseComboboxBackdropProps {}

export function ComboboxBackdrop({ className, ...props }: ComboboxBackdropProps) {
  return (
    <BaseCombobox.Backdrop
      className={mergeClassName(styles.combobox__backdrop, className)}
      {...props}
    />
  );
}
