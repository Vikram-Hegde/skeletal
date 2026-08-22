import type { DialogViewportProps as BaseDialogViewportProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./dialog.module.css";

/**
 * The full-screen positioning and scroll container for the dialog content.
 * Renders a `<div>` element.
 *
 * Per the Base UI anatomy, render `<Dialog.Content>` inside
 * `<Dialog.Viewport>`:
 *
 * ```tsx
 * <Dialog.Portal>
 *   <Dialog.Backdrop />
 *   <Dialog.Viewport>
 *     <Dialog.Content>...</Dialog.Content>
 *   </Dialog.Viewport>
 * </Dialog.Portal>
 * ```
 *
 * The viewport is `position: fixed`, fills the screen, and centers the content
 * while scrolling when content is taller than the viewport. Styled with the
 * `dialog__viewport` BEM class; override positioning with `className` if you
 * need a different layout (e.g. a bottom sheet).
 *
 * Responsive: below `48rem` the viewport pins its content to the bottom edge
 * instead of centering it, so the dialog renders as a bottom sheet. This also
 * applies to `AlertDialog` and `CommandPalette`, which share this part.
 */
export interface DialogViewportProps extends BaseDialogViewportProps {}

export function DialogViewport({ className, ...props }: DialogViewportProps) {
  return (
    <BaseDialog.Viewport
      className={mergeClassName(styles.dialog__viewport, className)}
      {...props}
    />
  );
}
