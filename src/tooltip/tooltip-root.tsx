import type { TooltipRootProps } from "@base-ui/react/tooltip";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";

/**
 * The root of the tooltip, grouping all parts together. Renders no DOM element.
 *
 * All Base UI root props are supported: `open`, `defaultOpen`, `onOpenChange`,
 * `onOpenChangeComplete`, `disableHoverablePopup`, `trackCursorAxis`,
 * `actionsRef`, `disabled`, `handle`, `triggerId`, and `defaultTriggerId`.
 *
 * Tooltips open on hover and focus, and close on blur, Escape, or outside
 * press. They are disabled on touch devices (Base UI behavior) — tooltips are
 * a visual label for sighted mouse/keyboard users, not a replacement for an
 * accessible trigger name (`aria-label`).
 *
 * `disableHoverablePopup` (`@default false`) keeps the tooltip from staying
 * open when the pointer moves onto the popup itself — enable it for an
 * interactive popup.
 *
 * `trackCursorAxis` (`@default 'none'`) makes the popup follow the cursor
 * along the given axis ('x' | 'y' | 'both') instead of anchoring to the
 * trigger.
 */
export interface TooltipProps<Payload = unknown> extends TooltipRootProps<Payload> {}

export function TooltipRoot<Payload>(props: TooltipProps<Payload>) {
  return <BaseTooltip.Root {...props} />;
}
