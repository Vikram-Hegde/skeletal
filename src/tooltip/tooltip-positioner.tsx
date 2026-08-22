import type { TooltipPositionerProps as BaseTooltipPositionerProps } from "@base-ui/react/tooltip";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./tooltip.module.css";

/**
 * Positions the tooltip popup against the trigger. Renders a `<div>` element.
 *
 * Accepts all Base UI positioner props: `side`, `align`, `sideOffset`,
 * `alignOffset`, `collisionAvoidance`, `collisionBoundary`, `collisionPadding`,
 * `sticky`, `positionMethod`, `arrowPadding`, and `anchor`.
 *
 * `side` may flip automatically to avoid collisions (default `'top'`). Pair
 * the `sideOffset` with the `Tooltip.Arrow` so the arrow has room to point at
 * the trigger.
 *
 * When one popup is shared across several triggers (via `handle` +
 * `Tooltip.Viewport`), size it with the `--positioner-width` /
 * `--positioner-height` / `--available-width` CSS variables so content changes
 * don't thrash the layout.
 *
 * @default side = 'top'
 * @default align = 'center'
 * @default sideOffset = 8
 */
export interface TooltipPositionerProps extends BaseTooltipPositionerProps {}

export function TooltipPositioner({ className, sideOffset = 8, ...props }: TooltipPositionerProps) {
  return (
    <BaseTooltip.Positioner
      className={mergeClassName(styles.tooltip__positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}
