import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./dialog.module.css";

/**
 * A footer bar for dialog actions. Renders a `<div>` element.
 *
 * Place it as the last child of `Dialog.Content` to group the dialog's action
 * buttons (e.g. Cancel / Confirm) into a distinct container. It bleeds to the
 * card's edges with its own muted background and top border, so it reads as a
 * separate section of the dialog rather than a loose row of buttons.
 *
 * Buttons are laid out in a right-aligned, wrapping row with a small gap —
 * the conventional placement for primary/destructive actions in dialogs.
 * Override alignment with `className` or `style` (e.g.
 * `justifyContent: "space-between"`) when needed.
 *
 * Use it in an Alert Dialog the same way via `AlertDialog.Footer`.
 */
export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={clsx(styles.dialog__footer, className)} {...props} />;
}
