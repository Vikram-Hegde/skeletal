import type { TooltipPopupProps as BaseTooltipPopupProps } from "@base-ui/react/tooltip";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./tooltip.module.css";

/**
 * The tooltip panel that holds the content. Renders a `<div>` element.
 *
 * Accepts all Base UI popup props. Content animates in/out via the
 * `data-starting-style` / `data-ending-style` transitions, and `data-instant`
 * skips the animation when the tooltip opens instantly (e.g. inside a
 * `Tooltip.Provider` group).
 *
 * Keep tooltip content short and label-like. For rich or essential content use
 * a `Popover` or inline text so touch and screen-reader users can access it.
 */
export interface TooltipPopupProps extends BaseTooltipPopupProps {}

export function TooltipPopup({ className, ...props }: TooltipPopupProps) {
  return (
    <BaseTooltip.Popup className={mergeClassName(styles.tooltip__popup, className)} {...props} />
  );
}
