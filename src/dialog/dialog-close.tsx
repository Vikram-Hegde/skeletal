import type { DialogCloseProps as BaseDialogCloseProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ButtonProps } from "@elemental/button/button";
import { Button } from "@elemental/button/button";

/**
 * A button that closes the dialog. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`, ...).
 * Defaults to the `secondary` variant. For destructive confirmations (e.g. the
 * "Discard" action in an Alert Dialog), pass `variant="destructive"`.
 */
export interface DialogCloseProps
  extends ButtonProps,
    Omit<BaseDialogCloseProps, "className" | "style" | "render" | "nativeButton"> {}

export function DialogClose({
  className,
  variant = "secondary",
  size = "md",
  fullWidth = false,
  ...props
}: DialogCloseProps) {
  return (
    <BaseDialog.Close
      render={<Button variant={variant} size={size} fullWidth={fullWidth} className={className} />}
      {...props}
    />
  );
}
