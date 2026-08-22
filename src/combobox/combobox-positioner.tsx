import type { ComboboxPositionerProps as BaseComboboxPositionerProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * Positions the combobox popup against the anchor. Renders a `<div>` element.
 *
 * Accepts all Base UI positioner props: `side`, `align`, `sideOffset`,
 * `alignOffset`, `collisionAvoidance`, `collisionBoundary`, `collisionPadding`,
 * `sticky`, `positionMethod`, `arrowPadding`, and `anchor`.
 *
 * By default the popup anchors to the `Combobox.InputGroup` (so it matches the
 * field's width), or to the trigger when the input lives inside the popup.
 *
 * @default sideOffset = 4
 */
export interface ComboboxPositionerProps extends BaseComboboxPositionerProps {}

export function ComboboxPositioner({
  className,
  sideOffset = 4,
  ...props
}: ComboboxPositionerProps) {
  return (
    <BaseCombobox.Positioner
      className={mergeClassName(styles.combobox__positioner, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}
