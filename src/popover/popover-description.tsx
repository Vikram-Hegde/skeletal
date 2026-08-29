import type { PopoverDescriptionProps as BasePopoverDescriptionProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./popover.module.css";

/**
 * A paragraph with additional information about the popover. Renders a `<p>`
 * element.
 *
 * Keep it specific and concise — it is announced alongside the title to
 * screen readers.
 */
export interface PopoverDescriptionProps extends BasePopoverDescriptionProps {}

export function PopoverDescription({ className, ...props }: PopoverDescriptionProps) {
  return (
    <BasePopover.Description
      className={mergeClassName(styles.popover__description, className)}
      {...props}
    />
  );
}
