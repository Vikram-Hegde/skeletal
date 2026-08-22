import { DialogBackdrop } from "@skeletal/dialog/dialog-backdrop";
import { DialogClose } from "@skeletal/dialog/dialog-close";
import { DialogContent } from "@skeletal/dialog/dialog-content";
import { DialogDescription } from "@skeletal/dialog/dialog-description";
import { DialogFooter } from "@skeletal/dialog/dialog-footer";
import { DialogPortal } from "@skeletal/dialog/dialog-portal";
import { DialogTitle } from "@skeletal/dialog/dialog-title";
import { DialogViewport } from "@skeletal/dialog/dialog-viewport";
import { AlertDialogRoot } from "./alert-dialog-root";
import { AlertDialogTrigger } from "./alert-dialog-trigger";

/**
 * Compound component for alert dialogs.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { AlertDialog } from '@vikram-hegde/skeletal'
 *
 * <AlertDialog.Root>
 *   <AlertDialog.Trigger>Delete</AlertDialog.Trigger>
 *   <AlertDialog.Portal>
 *     <AlertDialog.Backdrop />
 *     <AlertDialog.Viewport>
 *       <AlertDialog.Content size="sm">
 *         <AlertDialog.Title>Delete project?</AlertDialog.Title>
 *         <AlertDialog.Description>This cannot be undone.</AlertDialog.Description>
 *         <AlertDialog.Footer>
 *           <AlertDialog.Close>Cancel</AlertDialog.Close>
 *           <AlertDialog.Close variant="destructive">Delete</AlertDialog.Close>
 *         </AlertDialog.Footer>
 *       </AlertDialog.Content>
 *     </AlertDialog.Viewport>
 *   </AlertDialog.Portal>
 * </AlertDialog.Root>
 * ```
 *
 * An alert dialog is a dialog at heart, so `Portal`, `Backdrop`, `Content`,
 * `Title`, `Description`, `Footer`, `Close`, and `Viewport` are the same styled
 * parts as `Dialog`'s (their prop types live under `Dialog*Props`). Only `Root`
 * and `Trigger` are alert-dialog specific.
 */
export const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
  Close: DialogClose,
  Viewport: DialogViewport,
};

export type { AlertDialogProps } from "./alert-dialog-root";
export type { AlertDialogTriggerProps } from "./alert-dialog-trigger";
