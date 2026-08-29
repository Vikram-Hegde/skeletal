import type { PopoverArrowProps as BasePopoverArrowProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./popover.module.css";

/**
 * A small arrow pointing from the popup to the trigger. Renders a `<div>`
 * element.
 *
 * Place it inside `<Popover.Popup>` (before the content). It orients itself
 * based on the popup's `data-side` attribute, so it works for any placement.
 * Keep `arrowPadding` on the positioner in sync so the arrow never hangs off
 * rounded corners.
 */
export interface PopoverArrowProps extends BasePopoverArrowProps {}

export function PopoverArrow({ className, ...props }: PopoverArrowProps) {
  return <BasePopover.Arrow className={mergeClassName(styles.popover__arrow, className)} {...props} />;
}
