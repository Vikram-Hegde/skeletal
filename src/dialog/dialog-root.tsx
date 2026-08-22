import type { DialogRootProps } from "@base-ui/react/dialog";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";

/**
 * The root of the dialog, grouping all parts together. Renders no DOM element.
 *
 * All Base UI root props are supported: `open`, `defaultOpen`, `modal`,
 * `onOpenChange`, `onOpenChangeComplete`, `disablePointerDismissal`,
 * `actionsRef`, `handle`, and `triggerId`.
 *
 * Use `open` + `onOpenChange` to control the dialog; otherwise it is
 * uncontrolled. `modal` accepts `true`, `'trap-focus'`, or `false`.
 *
 * @default modal = true
 */
export interface DialogProps<Payload = unknown> extends DialogRootProps<Payload> {}

export function DialogRoot<Payload>(props: DialogProps<Payload>) {
  return <BaseDialog.Root {...props} />;
}
