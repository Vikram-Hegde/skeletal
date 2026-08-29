import type { PopoverViewportProps as BasePopoverViewportProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./popover.module.css";

/**
 * The scroll container for popover content. Renders a `<div>` element.
 *
 * Place it inside `<Popover.Popup>` when the popover may overflow the viewport
 * — it clips and scrolls while keeping the popup's border and shadow intact.
 * This mirrors the `Viewport` pattern used by `Tooltip` and `Menu`.
 */
export interface PopoverViewportProps extends BasePopoverViewportProps {}

export function PopoverViewport({ className, ...props }: PopoverViewportProps) {
  return (
    <BasePopover.Viewport className={mergeClassName(styles.popover__viewport, className)} {...props} />
  );
}
