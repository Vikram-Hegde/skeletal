import type { DialogTitleProps as BaseDialogTitleProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./dialog.module.css";

/**
 * A heading that labels the dialog. Renders an `<h2>` element.
 *
 * Required for accessibility — the dialog is announced with this title.
 * Prefer a short, specific title (e.g. "Delete project?").
 */
export interface DialogTitleProps extends BaseDialogTitleProps {}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <BaseDialog.Title className={mergeClassName(styles.dialog__title, className)} {...props} />
  );
}
