import type { PopoverPositionerProps as BasePopoverPositionerProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./popover.module.css";

/**
 * Positions the popover popup against the trigger. Renders a `<div>` element.
 *
 * Accepts all Base UI positioner props: `side`, `align`, `sideOffset`,
 * `alignOffset`, `collisionAvoidance`, `collisionBoundary`, `collisionPadding`,
 * `sticky`, `positionMethod`, `arrowPadding`, and `anchor`.
 *
 * `side` may flip automatically to avoid collisions (default `'bottom'`).
 * `align` controls the cross-axis placement — use `'start'` to align the
 * popup's leading edge with the trigger. Pair `sideOffset` with
 * `<Popover.Arrow>` so the arrow has room to point at the trigger.
 *
 * @default side = 'bottom'
 * @default align = 'center'
 * @default sideOffset = 8
 */
export interface PopoverPositionerProps extends BasePopoverPositionerProps {}

export function PopoverPositioner({ className, sideOffset = 8, ...props }: PopoverPositionerProps) {
  return (
    <BasePopover.Positioner
      className={mergeClassName(styles.popover__positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}
