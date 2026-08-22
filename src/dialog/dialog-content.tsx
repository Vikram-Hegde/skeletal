import type { DialogPopupProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { Stack } from "@elemental/layout/stack";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import { clsx } from "clsx";
import styles from "./dialog.module.css";

/**
 * Width of the dialog content.
 */
export type DialogContentSize = "sm" | "md" | "lg";

/**
 * The dialog card itself. Renders a `<div>` element with the popup role.
 *
 * Per the Base UI anatomy it is centered by its parent
 * `<Dialog.Viewport>`, which is responsible for positioning and scrolling.
 *
 * Accepts all Base UI popup props, including `initialFocus` and `finalFocus`
 * for controlling focus when the dialog opens and closes.
 *
 * `size` controls the content width:
 * - `sm`: 24rem — short confirmations and prompts.
 * - `md`: 32rem — default; most dialogs and simple forms.
 * - `lg`: 44rem — complex forms, tables, and detail views.
 *
 * The children are wrapped in a `Stack` layout primitive for the dialog's
 * vertical rhythm (`space="1.25rem"`) and stretched to fill the content box
 * (`fill`) so the footer bleeds to the dialog's bottom edge.
 *
 * Responsive: below `48rem` the dialog renders as a bottom sheet — full width,
 * rounded top corners, pinned to the bottom edge, sliding up on open. The
 * `size` modifier only constrains width, so it has no effect on the sheet.
 *
 * @default size = 'md'
 */
export interface DialogContentProps extends DialogPopupProps {
  size?: DialogContentSize;
}

export function DialogContent({ className, size = "md", children, ...props }: DialogContentProps) {
  const sizeClass = size !== "md" ? styles[`dialog__content--${size}`] : undefined;
  return (
    <BaseDialog.Popup
      className={mergeClassName(clsx(styles.dialog__content, sizeClass), className)}
      {...props}
    >
      <Stack space="1.25rem" fill>
        {children}
      </Stack>
    </BaseDialog.Popup>
  );
}
