import type { MenuPositionerProps as BaseMenuPositionerProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * Positions the menu popup against the trigger. Renders a `<div>` element.
 *
 * Accepts all Base UI positioner props: `side`, `align`, `sideOffset`,
 * `alignOffset`, `collisionAvoidance`, `collisionBoundary`, `collisionPadding`,
 * `sticky`, `positionMethod`, `arrowPadding`, and `anchor`.
 *
 * `side` may flip automatically to avoid collisions (default `'bottom'`).
 * `align` controls horizontal placement against the trigger — use `'start'`
 * to align the popup's leading edge with the trigger.
 *
 * @default side = 'bottom'
 * @default sideOffset = 8
 */
export interface MenuPositionerProps extends BaseMenuPositionerProps {}

export function MenuPositioner({ className, sideOffset = 8, ...props }: MenuPositionerProps) {
  return (
    <BaseMenu.Positioner
      className={mergeClassName(styles.menu__positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}
