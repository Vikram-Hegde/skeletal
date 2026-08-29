import type { PopoverTitleProps as BasePopoverTitleProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./popover.module.css";

/**
 * A heading that labels the popover. Renders an `<h2>` element.
 *
 * Prefer a short, specific title (e.g. "Notifications"). The popover is
 * announced with this title for accessibility.
 */
export interface PopoverTitleProps extends BasePopoverTitleProps {}

export function PopoverTitle({ className, ...props }: PopoverTitleProps) {
  return <BasePopover.Title className={mergeClassName(styles.popover__title, className)} {...props} />;
}
