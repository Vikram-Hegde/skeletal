import type { PopoverBackdropProps as BasePopoverBackdropProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./popover.module.css";

/**
 * An overlay displayed beneath the popover when `modal` is enabled on the
 * root. Renders a `<div>` element.
 *
 * Clicking the backdrop dismisses the popover. It dims the page and fades
 * in/out via `data-starting-style` / `data-ending-style`. Only rendered when
 * `modal` is `true` — non-modal popovers have no backdrop.
 */
export interface PopoverBackdropProps extends BasePopoverBackdropProps {}

export function PopoverBackdrop({ className, ...props }: PopoverBackdropProps) {
  return (
    <BasePopover.Backdrop className={mergeClassName(styles.popover__backdrop, className)} {...props} />
  );
}
