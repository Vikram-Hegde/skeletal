import { DialogBackdrop } from "./dialog-backdrop";
import { DialogClose } from "./dialog-close";
import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogFooter } from "./dialog-footer";
import { DialogPortal } from "./dialog-portal";
import { DialogRoot } from "./dialog-root";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";
import { DialogViewport } from "./dialog-viewport";

/**
 * Compound component for dialogs.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Dialog } from '@vikram-hegde/skeletal'
 *
 * <Dialog.Root>
 *   <Dialog.Trigger>Open</Dialog.Trigger>
 *   <Dialog.Portal>
 *     <Dialog.Backdrop />
 *     <Dialog.Viewport>
 *       <Dialog.Content>
 *         <Dialog.Title>Title</Dialog.Title>
 *         <Dialog.Description>Description</Dialog.Description>
 *         <Dialog.Footer>
 *           <Dialog.Close>Cancel</Dialog.Close>
 *           <Dialog.Close variant="primary">Confirm</Dialog.Close>
 *         </Dialog.Footer>
 *       </Dialog.Content>
 *     </Dialog.Viewport>
 *   </Dialog.Portal>
 * </Dialog.Root>
 * ```
 *
 * Composition follows the Base UI anatomy — `Dialog.Viewport` is the
 * full-screen positioning/scroll container that centers `Dialog.Content`.
 *
 * All parts are thin styled wrappers over Base UI's `Dialog`, so every Base UI
 * prop, `render` override, and ref behaves the same. Part prop types are
 * exported separately (`DialogContentProps`, etc.).
 */
export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
  Close: DialogClose,
  Viewport: DialogViewport,
};

export type { DialogBackdropProps } from "./dialog-backdrop";
export type { DialogCloseProps } from "./dialog-close";
export type { DialogContentProps, DialogContentSize } from "./dialog-content";
export type { DialogDescriptionProps } from "./dialog-description";
export type { DialogFooterProps } from "./dialog-footer";
export type { DialogPortalProps } from "./dialog-portal";
export type { DialogProps } from "./dialog-root";
export type { DialogTitleProps } from "./dialog-title";
export type { DialogTriggerProps } from "./dialog-trigger";
export type { DialogViewportProps } from "./dialog-viewport";
