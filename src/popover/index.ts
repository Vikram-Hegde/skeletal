import { Popover as BasePopover } from "@base-ui/react/popover";
import { PopoverArrow } from "./popover-arrow";
import { PopoverBackdrop } from "./popover-backdrop";
import { PopoverClose } from "./popover-close";
import { PopoverDescription } from "./popover-description";
import { PopoverPortal } from "./popover-portal";
import { PopoverPositioner } from "./popover-positioner";
import { PopoverPopup } from "./popover-popup";
import { PopoverRoot } from "./popover-root";
import { PopoverTitle } from "./popover-title";
import { PopoverTrigger } from "./popover-trigger";
import { PopoverViewport } from "./popover-viewport";

/**
 * Compound component for popovers.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Popover } from '@vikram-hegde/skeletal'
 *
 * <Popover.Root>
 *   <Popover.Trigger>Open</Popover.Trigger>
 *   <Popover.Portal>
 *     <Popover.Positioner sideOffset={8}>
 *       <Popover.Popup>
 *         <Popover.Arrow />
 *         <Popover.Title>Notifications</Popover.Title>
 *         <Popover.Description>You are all caught up.</Popover.Description>
 *         <Popover.Close>Dismiss</Popover.Close>
 *       </Popover.Popup>
 *     </Popover.Positioner>
 *   </Popover.Portal>
 * </Popover.Root>
 * ```
 *
 * Composition follows the Base UI anatomy — `Popover.Positioner` floats the
 * popup against the trigger and handles collision avoidance; `Popover.Portal`
 * moves it to `<body>`. Use `Popover.Backdrop` with `modal` on the root to
 * dim the page. `Popover.Viewport` provides a scroll container for
 * overflowing content.
 *
 * All parts are thin styled wrappers over Base UI's `Popover`, so every Base UI
 * prop, `render` override, and ref behaves the same. Part prop types are
 * exported separately (`PopoverProps`, `PopoverPopupProps`, etc.).
 *
 * Detached triggers are supported via `Popover.createHandle()`:
 *
 * ```tsx
 * const handle = Popover.createHandle();
 * <Popover.Trigger handle={handle}>Open</Popover.Trigger>
 * <Popover.Root handle={handle}>…</Popover.Root>
 * ```
 */
export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Backdrop: PopoverBackdrop,
  Positioner: PopoverPositioner,
  Popup: PopoverPopup,
  Arrow: PopoverArrow,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
  Viewport: PopoverViewport,
  createHandle: BasePopover.createHandle,
};

/** The handle created by `Popover.createHandle()`, for typing detached triggers. */
export type PopoverHandle<Payload> = BasePopover.Handle<Payload>;

export type { PopoverArrowProps } from "./popover-arrow";
export type { PopoverBackdropProps } from "./popover-backdrop";
export type { PopoverCloseProps } from "./popover-close";
export type { PopoverDescriptionProps } from "./popover-description";
export type { PopoverPortalProps } from "./popover-portal";
export type { PopoverPositionerProps } from "./popover-positioner";
export type { PopoverPopupProps } from "./popover-popup";
export type { PopoverProps } from "./popover-root";
export type { PopoverTitleProps } from "./popover-title";
export type { PopoverTriggerProps } from "./popover-trigger";
export type { PopoverViewportProps } from "./popover-viewport";
