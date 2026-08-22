import type { AlertDialogRootProps } from "@base-ui/react/alert-dialog";
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";

/**
 * The root of the alert dialog, grouping all parts together. Renders no DOM
 * element.
 *
 * Semantically an alert dialog (`role="alertdialog"`) — always modal with
 * focus trapped, and it cannot be dismissed by clicking outside. Note that
 * pressing Esc still closes it (Base UI behavior). Use it for interruptions
 * that require a decision.
 *
 * All Base UI root props are supported: `open`, `defaultOpen`,
 * `onOpenChange`, `onOpenChangeComplete`, `actionsRef`, `handle`, and
 * `triggerId`.
 */
export interface AlertDialogProps<Payload = unknown> extends AlertDialogRootProps<Payload> {}

export function AlertDialogRoot<Payload>(props: AlertDialogProps<Payload>) {
  return <BaseAlertDialog.Root {...props} />;
}
