import type { DialogPopupProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./command-palette.module.css";

/**
 * The palette card: a compact, flush container holding the input and the
 * command list. Renders a `<div>` element with the dialog popup role.
 *
 * Styled with the `command__content` BEM class — no inner padding; the input
 * group and list define their own rhythm.
 *
 * Responsive: below `48rem` the palette renders as a full-width bottom sheet
 * with rounded top corners, pinned to the bottom edge and sliding up on open.
 */
export interface CommandPaletteContentProps extends DialogPopupProps {}

export function CommandPaletteContent({ className, ...props }: CommandPaletteContentProps) {
  return (
    <BaseDialog.Popup className={mergeClassName(styles.command__content, className)} {...props} />
  );
}
