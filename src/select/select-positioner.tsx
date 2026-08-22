import type { SelectPositionerProps as BaseSelectPositionerProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * Positions the select popup against the trigger. Renders a `<div>` element.
 *
 * Accepts all Base UI positioner props: `side`, `align`, `sideOffset`,
 * `alignOffset`, `collisionAvoidance`, `collisionBoundary`, `collisionPadding`,
 * `sticky`, `positionMethod`, `arrowPadding`, and `anchor`.
 *
 * By default `alignItemWithTrigger` is `true`: the popup overlaps the trigger
 * so the selected item's text aligns with the trigger's value text (the
 * `data-side` is `"none"` on the popup in this mode). Set it to `false` for a
 * plain dropdown that floats below the trigger. Other positioning props like
 * `side`/`align` only take effect when `alignItemWithTrigger` is `false` or in
 * fallback mode.
 *
 * @default sideOffset = 4
 * @default alignItemWithTrigger = true
 */
export interface SelectPositionerProps extends BaseSelectPositionerProps {}

export function SelectPositioner({ className, sideOffset = 4, ...props }: SelectPositionerProps) {
  return (
    <BaseSelect.Positioner
      className={mergeClassName(styles.select__positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}
