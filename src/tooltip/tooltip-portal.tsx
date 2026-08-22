import type { TooltipPortalProps as BaseTooltipPortalProps } from "@base-ui/react/tooltip";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./tooltip.module.css";

/**
 * Moves the tooltip popup to a different part of the DOM, appended to `<body>`
 * by default. Renders a `<div>` element.
 *
 * `keepMounted` keeps the portal in the DOM while the tooltip is closed (useful
 * for exit animations). `container` overrides the portal target.
 *
 * @default keepMounted = false
 */
export interface TooltipPortalProps extends BaseTooltipPortalProps {}

export function TooltipPortal({ className, ...props }: TooltipPortalProps) {
  return (
    <BaseTooltip.Portal className={mergeClassName(styles.tooltip__portal, className)} {...props} />
  );
}
