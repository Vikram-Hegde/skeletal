import { AlertDialog } from "@elemental";
import type { Doc } from "@/docs/types";

export const alertDialogDoc: Doc = {
  id: "alert-dialog",
  group: "Components",
  name: "AlertDialog",
  blurb:
    "An interruption that requires a decision. Cannot be dismissed by clicking outside; pressing Esc still closes it.",
  examples: [
    {
      title: "Basic",
      code: `import { AlertDialog } from "@vikram-hegde/elemental";

<AlertDialog.Root>
  <AlertDialog.Trigger variant="destructive">Discard draft</AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Backdrop />
    <AlertDialog.Viewport>
      <AlertDialog.Content size="sm">
        <AlertDialog.Title>Discard draft?</AlertDialog.Title>
        <AlertDialog.Description>You can't undo this action.</AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Close>Cancel</AlertDialog.Close>
          <AlertDialog.Close variant="destructive">Discard</AlertDialog.Close>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Viewport>
  </AlertDialog.Portal>
</AlertDialog.Root>`,
      demo: (
        <AlertDialog.Root>
          <AlertDialog.Trigger variant="destructive">Discard draft</AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Backdrop />
            <AlertDialog.Viewport>
              <AlertDialog.Content size="sm">
                <AlertDialog.Title>Discard draft?</AlertDialog.Title>
                <AlertDialog.Description>You can't undo this action.</AlertDialog.Description>
                <AlertDialog.Footer>
                  <AlertDialog.Close>Cancel</AlertDialog.Close>
                  <AlertDialog.Close variant="destructive">Discard</AlertDialog.Close>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog.Viewport>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      ),
    },
  ],
  props: [
    {
      name: "open / defaultOpen",
      type: "boolean",
      default: "false",
      description: "Controlled / uncontrolled open state.",
    },
    {
      name: "onOpenChange",
      type: "(open, details) => void",
      default: "—",
      description: "Called when the alert dialog opens or closes.",
    },
    {
      name: "Trigger.variant",
      type: `'primary' | 'destructive' | …`,
      default: "'primary'",
      description: "Button variant for the trigger.",
    },
    {
      name: "Close.variant",
      type: `'secondary' | 'destructive' | …`,
      default: "'secondary'",
      description: "Button variant for close actions.",
    },
    {
      name: "Footer",
      type: "HTMLAttributes<HTMLDivElement>",
      default: "—",
      description:
        "A right-aligned action bar with a muted background and top border. Put the Cancel/Confirm buttons inside it.",
    },
  ],
};
