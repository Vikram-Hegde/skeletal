import { DialogClose } from "@elemental/dialog/dialog-close";
import { DialogDescription } from "@elemental/dialog/dialog-description";
import { DialogPortal } from "@elemental/dialog/dialog-portal";
import { DialogTitle } from "@elemental/dialog/dialog-title";
import { DrawerBackdrop } from "./drawer-backdrop";
import { DrawerContent } from "./drawer-content";
import { DrawerFooter } from "./drawer-footer";
import { DrawerHeader } from "./drawer-header";
import { DrawerPopup } from "./drawer-popup";
import { DrawerRoot } from "./drawer-root";
import { DrawerSwipeArea } from "./drawer-swipe-area";
import { DrawerTrigger } from "./drawer-trigger";
import { DrawerViewport } from "./drawer-viewport";

/**
 * Compound component for drawers.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Drawer } from '@vikram-hegde/elemental'
 *
 * <Drawer.Root side="right">
 *   <Drawer.Trigger>Open</Drawer.Trigger>
 *   <Drawer.Portal>
 *     <Drawer.Backdrop />
 *     <Drawer.Viewport>
 *       <Drawer.Popup>
 *         <Drawer.Header>
 *           <Drawer.Title>Title</Drawer.Title>
 *           <Drawer.Close size="sm" variant="ghost">✕</Drawer.Close>
 *         </Drawer.Header>
 *         <Drawer.Content>
 *           <Drawer.Description>Description</Drawer.Description>
 *         </Drawer.Content>
 *         <Drawer.Footer>
 *           <Drawer.Close>Cancel</Drawer.Close>
 *           <Drawer.Close variant="primary">Confirm</Drawer.Close>
 *         </Drawer.Footer>
 *       </Drawer.Popup>
 *     </Drawer.Viewport>
 *   </Drawer.Portal>
 * </Drawer.Root>
 * ```
 *
 * Composition follows the Base UI anatomy — `Drawer.Viewport` is the
 * full-screen positioning/scroll container that pins `Drawer.Popup` to the
 * edge set by the root's `side` prop.
 *
 * All parts are thin styled wrappers over Base UI's `Drawer`, so every Base UI
 * prop, `render` override, and ref behaves the same. The drawer adds swipe-to-
 * dismiss gestures on top of a Dialog, so `Backdrop`, `Viewport`, `Popup`,
 * `Content`, and `SwipeArea` are drawer-specific; `Portal`, `Title`,
 * `Description`, and `Close` are the same styled parts as `Dialog`'s (their
 * prop types live under `Dialog*Props`). `Header` and `Footer` are plain
 * sticky bars that stay pinned while `Content` scrolls.
 *
 * Position the drawer with the `side` prop on `Root`. Use `SwipeArea` to let
 * users swipe open a closed drawer from the screen edge.
 */
export const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Portal: DialogPortal,
  Backdrop: DrawerBackdrop,
  Viewport: DrawerViewport,
  Popup: DrawerPopup,
  Header: DrawerHeader,
  Content: DrawerContent,
  Footer: DrawerFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
  SwipeArea: DrawerSwipeArea,
};

export type { DrawerBackdropProps } from "./drawer-backdrop";
export type { DrawerContentProps } from "./drawer-content";
export type { DrawerFooterProps } from "./drawer-footer";
export type { DrawerHeaderProps } from "./drawer-header";
export type { DrawerPopupProps, DrawerPopupSize } from "./drawer-popup";
export type { DrawerProps, DrawerSide } from "./drawer-root";
export type { DrawerSwipeAreaProps } from "./drawer-swipe-area";
export type { DrawerTriggerProps } from "./drawer-trigger";
export type { DrawerViewportProps } from "./drawer-viewport";
