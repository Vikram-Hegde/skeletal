import type { DialogDescriptionProps as BaseDialogDescriptionProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./dialog.module.css";

/**
 * A paragraph with additional information about the dialog. Renders a `<p>`
 * element.
 *
 * Keep the first paragraph specific and concise — it is announced alongside
 * the title to screen readers.
 */
export interface DialogDescriptionProps extends BaseDialogDescriptionProps {}

export function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <BaseDialog.Description
      className={mergeClassName(styles.dialog__description, className)}
      {...props}
    />
  );
}
