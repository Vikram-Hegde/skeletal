import type { ComboboxArrowProps as BaseComboboxArrowProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A small arrow pointing from the popup to the anchor. Renders a `<div>`
 * element.
 *
 * Place it inside `Combobox.Popup` (before the list). It orients itself based
 * on the popup's `data-side` attribute, so it works for any placement. Pair
 * with a larger `sideOffset` on the `Combobox.Positioner` so the arrow has room.
 */
export interface ComboboxArrowProps extends BaseComboboxArrowProps {}

export function ComboboxArrow({ className, ...props }: ComboboxArrowProps) {
  return (
    <BaseCombobox.Arrow className={mergeClassName(styles.combobox__arrow, className)} {...props} />
  );
}
