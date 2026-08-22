import type { TooltipArrowProps as BaseTooltipArrowProps } from "@base-ui/react/tooltip";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./tooltip.module.css";

/**
 * A small arrow pointing from the popup to the trigger. Renders a `<div>`
 * element.
 *
 * Place it inside `<Tooltip.Popup>` (before the content). It orients itself
 * based on the popup's `data-side` attribute, so it works for any placement.
 */
export interface TooltipArrowProps extends BaseTooltipArrowProps {}

export function TooltipArrow({ className, ...props }: TooltipArrowProps) {
  return (
    <BaseTooltip.Arrow className={mergeClassName(styles.tooltip__arrow, className)} {...props} />
  );
}
