import type { DialogPortalProps as BaseDialogPortalProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./dialog.module.css";

/**
 * Moves the dialog content to a different part of the DOM, appended to
 * `<body>` by default. Renders a `<div>` element.
 *
 * `keepMounted` keeps the portal in the DOM while the dialog is closed
 * (useful for exit animations). `container` overrides the portal target.
 *
 * @default keepMounted = false
 */
export interface DialogPortalProps extends BaseDialogPortalProps {}

export function DialogPortal({ className, ...props }: DialogPortalProps) {
  return (
    <BaseDialog.Portal className={mergeClassName(styles.dialog__portal, className)} {...props} />
  );
}
