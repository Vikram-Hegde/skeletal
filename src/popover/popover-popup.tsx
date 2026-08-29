import type { PopoverPopupProps as BasePopoverPopupProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./popover.module.css";

/**
 * The popover panel that holds the content. Renders a `<div>` element.
 *
 * Accepts all Base UI popup props, including `initialFocus` and `finalFocus`
 * for controlling focus when the popover opens and closes. Content animates
 * in/out via the `data-starting-style` / `data-ending-style` transitions and
 * `data-instant` skips the animation for instant open types.
 *
 * By default the popup sizes to its content with a max width of `20rem`; pass
 * `style={{ width: ... }}` or a `className` to constrain it. It supports
 * `--popup-width` / `--popup-height` / `--available-width` CSS variables from
 * the positioner for responsive sizing.
 */
export interface PopoverPopupProps extends BasePopoverPopupProps {}

export function PopoverPopup({ className, ...props }: PopoverPopupProps) {
  return <BasePopover.Popup className={mergeClassName(styles.popover__popup, className)} {...props} />;
}
