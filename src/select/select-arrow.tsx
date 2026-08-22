import type { SelectArrowProps as BaseSelectArrowProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A small arrow pointing from the popup to the trigger. Renders a `<div>`
 * element.
 *
 * Place it inside `Select.Popup` (before the list). It orients itself based on
 * the popup's `data-side` attribute, so it works for any placement. Pair with a
 * larger `sideOffset` on the `Select.Positioner` so the arrow has room.
 */
export interface SelectArrowProps extends BaseSelectArrowProps {}

export function SelectArrow({ className, ...props }: SelectArrowProps) {
  return (
    <BaseSelect.Arrow className={mergeClassName(styles.select__arrow, className)} {...props} />
  );
}
