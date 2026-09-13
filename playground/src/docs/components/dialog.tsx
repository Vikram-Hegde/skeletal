import { useState } from "react";
import { Cluster, Dialog } from "@skeletal";
import type { Doc } from "@/docs/types";

function SaveDialog() {
  const [savedAt, setSavedAt] = useState<string | null>(null);
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>Edit profile</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Viewport>
            <Dialog.Content>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Saving applies your changes immediately and closes the dialog.
              </Dialog.Description>
              <Dialog.Footer>
                <Dialog.Close variant="ghost">Cancel</Dialog.Close>
                <Dialog.Close
                  variant="primary"
                  onClick={() => setSavedAt(new Date().toLocaleTimeString())}
                >
                  Save changes
                </Dialog.Close>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
      {savedAt ? (
        <p style={{ fontSize: "0.8125rem", color: "var(--docs-muted)" }}>
          Saved at {savedAt}
        </p>
      ) : null}
    </>
  );
}

export const dialogDoc: Doc = {
  id: "dialog",
  group: "Components",
  name: "Dialog",
  blurb:
    "A popup that opens on top of the page. Assemble parts as Dialog.Root, .Trigger, .Portal, .Backdrop, .Viewport, .Content, .Title, .Description, .Close.",
  examples: [
    {
      title: "Basic",
      code: `import { Dialog } from "@vikram-hegde/skeletal";

<Dialog.Root>
  <Dialog.Trigger>View notifications</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Viewport>
      <Dialog.Content>
        <Dialog.Title>Notifications</Dialog.Title>
        <Dialog.Description>You are all caught up. Good job!</Dialog.Description>
        <Dialog.Footer>
          <Dialog.Close>Close</Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Viewport>
  </Dialog.Portal>
</Dialog.Root>`,
      demo: (
        <Dialog.Root>
          <Dialog.Trigger>View notifications</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Viewport>
              <Dialog.Content>
                <Dialog.Title>Notifications</Dialog.Title>
                <Dialog.Description>You are all caught up. Good job!</Dialog.Description>
                <Dialog.Footer>
                  <Dialog.Close>Close</Dialog.Close>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Viewport>
          </Dialog.Portal>
        </Dialog.Root>
      ),
    },
    {
      title: "Primary action that saves and closes",
      code: `<Dialog.Footer>
  <Dialog.Close variant="ghost">Cancel</Dialog.Close>
  {/* onClick runs your action first — the dialog still closes. */}
  <Dialog.Close variant="primary" onClick={handleSave}>
    Save changes
  </Dialog.Close>
</Dialog.Footer>`,
      demo: <SaveDialog />,
    },
    {
      title: "Sizes",
      code: `<Dialog.Content size="sm">…</Dialog.Content>
<Dialog.Content size="md">…</Dialog.Content>
<Dialog.Content size="lg">…</Dialog.Content>`,
      demo: (
        <Cluster>
          <Dialog.Root>
            <Dialog.Trigger variant="outline" size="sm">
              sm
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop />
              <Dialog.Viewport>
                <Dialog.Content size="sm">
                  <Dialog.Title>Small</Dialog.Title>
                  <Dialog.Description>24rem wide.</Dialog.Description>
                  <Dialog.Footer>
                    <Dialog.Close>Close</Dialog.Close>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog.Viewport>
            </Dialog.Portal>
          </Dialog.Root>
          <Dialog.Root>
            <Dialog.Trigger variant="outline" size="sm">
              lg
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop />
              <Dialog.Viewport>
                <Dialog.Content size="lg">
                  <Dialog.Title>Large</Dialog.Title>
                  <Dialog.Description>44rem wide.</Dialog.Description>
                  <Dialog.Footer>
                    <Dialog.Close>Close</Dialog.Close>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog.Viewport>
            </Dialog.Portal>
          </Dialog.Root>
        </Cluster>
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
      name: "modal",
      type: "boolean | 'trap-focus'",
      default: "true",
      description: "Modal behavior and focus handling.",
    },
    {
      name: "onOpenChange",
      type: "(open, details) => void",
      default: "—",
      description: "Called when the dialog opens or closes.",
    },
    {
      name: "Content.size",
      type: `'sm' | 'md' | 'lg'`,
      default: "'md'",
      description: "Width of the dialog content.",
    },
    {
      name: "Content.initialFocus / finalFocus",
      type: "boolean | RefObject | function",
      default: "—",
      description: "Focus control on open/close.",
    },
    {
      name: "Footer",
      type: "HTMLAttributes<HTMLDivElement>",
      default: "—",
      description:
        "A right-aligned action bar with a muted background and top border. Put dialog actions (Close/Confirm buttons) inside it.",
    },
  ],
};
