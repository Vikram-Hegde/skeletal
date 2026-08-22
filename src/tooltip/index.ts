import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { TooltipArrow } from "./tooltip-arrow";
import { TooltipPopup } from "./tooltip-popup";
import { TooltipPortal } from "./tooltip-portal";
import { TooltipPositioner } from "./tooltip-positioner";
import { TooltipProvider } from "./tooltip-provider";
import { TooltipRoot } from "./tooltip-root";
import { TooltipTrigger } from "./tooltip-trigger";
import { TooltipViewport } from "./tooltip-viewport";

/**
 * Compound component for tooltips.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Tooltip } from '@vikram-hegde/skeletal'
 *
 * <Tooltip.Provider>
 *   <Tooltip.Root>
 *     <Tooltip.Trigger aria-label="Bold">
 *       <BoldIcon aria-hidden="true" />
 *     </Tooltip.Trigger>
 *     <Tooltip.Portal>
 *       <Tooltip.Positioner sideOffset={8}>
 *         <Tooltip.Popup>
 *           <Tooltip.Arrow />
 *           Bold
 *         </Tooltip.Popup>
 *       </Tooltip.Positioner>
 *     </Tooltip.Portal>
 *   </Tooltip.Root>
 * </Tooltip.Provider>
 * ```
 *
 * Tooltips appear on hover/focus and are visual-only: the trigger must carry
 * an `aria-label` matching the tooltip content. They are disabled on touch
 * devices. Use `Popover` for essential or interactive content.
 *
 * `Tooltip.createHandle()` links a `Root` with triggers rendered outside of it
 * (detached triggers), including multiple triggers sharing one popup:
 *
 * ```tsx
 * const tip = Tooltip.createHandle();
 * <Tooltip.Trigger handle={tip} aria-label="Delete">…</Tooltip.Trigger>
 * <Tooltip.Root handle={tip}>…</Tooltip.Root>
 * ```
 *
 * All parts are thin styled wrappers over Base UI's `Tooltip`, so every Base UI
 * prop, `render` override, and ref behaves the same. Part prop types are
 * exported separately (`TooltipProps`, `TooltipTriggerProps`, ...).
 */
export const Tooltip = {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Popup: TooltipPopup,
  Arrow: TooltipArrow,
  Viewport: TooltipViewport,
  createHandle: BaseTooltip.createHandle,
};

/** The handle created by `Tooltip.createHandle()`, for typing detached triggers. */
export type TooltipHandle<Payload> = BaseTooltip.Handle<Payload>;

export type { TooltipArrowProps } from "./tooltip-arrow";
export type { TooltipPopupProps } from "./tooltip-popup";
export type { TooltipPortalProps } from "./tooltip-portal";
export type { TooltipPositionerProps } from "./tooltip-positioner";
export type { TooltipProviderProps } from "./tooltip-provider";
export type { TooltipProps } from "./tooltip-root";
export type { TooltipTriggerProps } from "./tooltip-trigger";
export type { TooltipViewportProps } from "./tooltip-viewport";
