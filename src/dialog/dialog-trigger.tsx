import type { DialogTriggerProps as BaseDialogTriggerProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";

/**
 * A button that opens the dialog. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`,
 * `onClick`, ...) plus the dialog-trigger props from Base UI (`payload`,
 * `handle`, `id`). Defaults to the `primary` variant.
 *
 * The `payload` prop lets you pass data from the trigger to the dialog's
 * render-prop content.
 */
export interface DialogTriggerProps<Payload = unknown>
  extends ButtonProps,
    Omit<BaseDialogTriggerProps<Payload>, "className" | "style" | "render" | "nativeButton"> {}

export function DialogTrigger<Payload>({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: DialogTriggerProps<Payload>) {
  return (
    <BaseDialog.Trigger
      render={<Button variant={variant} size={size} fullWidth={fullWidth} className={className} />}
      {...props}
    />
  );
}
