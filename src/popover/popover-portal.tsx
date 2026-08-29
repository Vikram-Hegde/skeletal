import type { PopoverPortalProps as BasePopoverPortalProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./popover.module.css";

/**
 * Moves the popover popup to a different part of the DOM, appended to `<body>`
 * by default. Renders a `<div>` element.
 *
 * `keepMounted` keeps the portal in the DOM while the popover is closed (useful
 * for exit animations). `container` overrides the portal target.
 *
 * @default keepMounted = false
 */
export interface PopoverPortalProps extends BasePopoverPortalProps {}

export function PopoverPortal({ className, ...props }: PopoverPortalProps) {
  return (
    <BasePopover.Portal className={mergeClassName(styles.popover__portal, className)} {...props} />
  );
}
