import type { DialogBackdropProps as BaseDialogBackdropProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./dialog.module.css";

/**
 * An overlay displayed beneath the dialog content. Renders a `<div>` element.
 *
 * Clicking the backdrop dismisses the dialog (unless
 * `disablePointerDismissal` is set on the root). It dims the page and can be
 * customised with `className` or the `render` prop.
 */
export interface DialogBackdropProps extends BaseDialogBackdropProps {}

export function DialogBackdrop({ className, ...props }: DialogBackdropProps) {
  return (
    <BaseDialog.Backdrop
      className={mergeClassName(styles.dialog__backdrop, className)}
      {...props}
    />
  );
}
