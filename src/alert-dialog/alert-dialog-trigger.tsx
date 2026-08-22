import type { AlertDialogTriggerProps as BaseAlertDialogTriggerProps } from "@base-ui/react/alert-dialog";
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import type { ButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";

/**
 * A button that opens the alert dialog. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`, ...)
 * plus the alert-dialog-trigger props from Base UI (`payload`, `handle`, `id`).
 * Defaults to the `primary` variant; for destructive triggers (e.g. "Delete"),
 * pass `variant="destructive"`.
 */
export interface AlertDialogTriggerProps<Payload = unknown>
  extends ButtonProps,
    Omit<BaseAlertDialogTriggerProps<Payload>, "className" | "style" | "render" | "nativeButton"> {}

export function AlertDialogTrigger<Payload>({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: AlertDialogTriggerProps<Payload>) {
  return (
    <BaseAlertDialog.Trigger
      render={<Button variant={variant} size={size} fullWidth={fullWidth} className={className} />}
      {...props}
    />
  );
}
