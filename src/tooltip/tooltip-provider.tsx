import type { TooltipProviderProps as BaseTooltipProviderProps } from "@base-ui/react/tooltip";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";

/**
 * Provides a shared delay for a group of tooltips. Renders no DOM element.
 *
 * Wrap several `Tooltip.Root`s in one `Tooltip.Provider` so that, once a
 * tooltip in the group has opened, the next one opens instantly when the
 * pointer moves to it (within `timeout` ms) instead of re-waiting the full
 * hover `delay`.
 *
 * @default delay = 600 (on each trigger)
 * @default closeDelay = 0 (on each trigger)
 * @default timeout = 300
 */
export interface TooltipProviderProps extends BaseTooltipProviderProps {}

export function TooltipProvider({ timeout = 300, ...props }: TooltipProviderProps) {
  return <BaseTooltip.Provider timeout={timeout} {...props} />;
}
