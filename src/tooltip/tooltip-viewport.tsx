import type { TooltipViewportProps as BaseTooltipViewportProps } from "@base-ui/react/tooltip";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./tooltip.module.css";

/**
 * A transition container for tooltip content. Renders a `<div>` element.
 *
 * Only required when one popup is opened by multiple triggers, its content
 * changes based on the trigger, and switching between them is animated (e.g. a
 * shared tooltip for several `Tooltip.Trigger`s via `handle`).
 *
 * When used, size the positioner with the `--positioner-width` /
 * `--positioner-height` CSS variables so content changes don't thrash the
 * layout.
 */
export interface TooltipViewportProps extends BaseTooltipViewportProps {}

export function TooltipViewport({ className, ...props }: TooltipViewportProps) {
  return (
    <BaseTooltip.Viewport
      className={mergeClassName(styles.tooltip__viewport, className)}
      {...props}
    />
  );
}
