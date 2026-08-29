import { Cluster, Popover, Stack } from "@skeletal";
import type { Doc } from "@/docs/types";

function BasicPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>View notifications</Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={8}>
          <Popover.Popup>
            <Popover.Arrow />
            <Popover.Title>Notifications</Popover.Title>
            <Popover.Description>You are all caught up. Good job!</Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

function PlacementPopover() {
  const sides = ["top", "right", "bottom", "left"] as const;
  return (
    <Cluster>
      {sides.map((side) => (
        <Popover.Root key={side}>
          <Popover.Trigger variant="outline">{side}</Popover.Trigger>
          <Popover.Portal>
            <Popover.Positioner side={side} sideOffset={8}>
              <Popover.Popup>
                <Popover.Arrow />
                <Popover.Title>Placed {side}</Popover.Title>
                <Popover.Description>Side is "{side}" — flips on collision.</Popover.Description>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      ))}
    </Cluster>
  );
}

function WithActionsPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger variant="outline">Open popover</Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={8} align="start">
          <Popover.Popup>
            <Popover.Arrow />
            <Popover.Title>Invite team members</Popover.Title>
            <Popover.Description>
              Share this link with your team to collaborate on the project.
            </Popover.Description>
            <Stack space="0.75rem" style={{ marginTop: "0.5rem" }}>
              <Cluster space="0.5rem" justify="flex-end">
                <Popover.Close variant="ghost">Cancel</Popover.Close>
                <Popover.Close variant="primary">Copy link</Popover.Close>
              </Cluster>
            </Stack>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

function ModalPopover() {
  return (
    <Popover.Root modal>
      <Popover.Trigger variant="outline">Open modal popover</Popover.Trigger>
      <Popover.Portal>
        <Popover.Backdrop />
        <Popover.Positioner sideOffset={8}>
          <Popover.Popup>
            <Popover.Title>Modal popover</Popover.Title>
            <Popover.Description>
              A backdrop dims the page and outside interaction is blocked until you close the popover.
            </Popover.Description>
            <div style={{ marginTop: "0.75rem", display: "flex", justifyContent: "flex-end" }}>
              <Popover.Close variant="secondary">Close</Popover.Close>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

const detachedHandle = Popover.createHandle<string>();

function DetachedPopover() {
  return (
    <Cluster align="center">
      <Popover.Trigger handle={detachedHandle} payload="from-trigger" variant="outline">
        Detached trigger
      </Popover.Trigger>
      <Popover.Root handle={detachedHandle}>
        {({ payload }) => (
          <Popover.Portal>
            <Popover.Positioner sideOffset={8}>
              <Popover.Popup>
                <Popover.Arrow />
                <Popover.Title>Detached trigger</Popover.Title>
                <Popover.Description>
                  Trigger and popup live in different branches — linked by a handle
                  {payload ? ` (payload: "${payload}")` : ""}.
                </Popover.Description>
                <div style={{ marginTop: "0.75rem", display: "flex", justifyContent: "flex-end" }}>
                  <Popover.Close>Close</Popover.Close>
                </div>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        )}
      </Popover.Root>
    </Cluster>
  );
}

export const popoverDoc: Doc = {
  id: "popover",
  group: "Components",
  name: "Popover",
  blurb:
    "A floating panel anchored to a trigger, for rich interactive content. Assemble parts as Popover.Root, .Trigger, .Portal, .Backdrop, .Positioner, .Popup, .Arrow, .Title, .Description, .Close, .Viewport — plus .createHandle for detached triggers.",
  examples: [
    {
      title: "Basic",
      code: `import { Popover } from "@vikram-hegde/skeletal";

<Popover.Root>
  <Popover.Trigger>View notifications</Popover.Trigger>
  <Popover.Portal>
    <Popover.Positioner sideOffset={8}>
      <Popover.Popup>
        <Popover.Arrow />
        <Popover.Title>Notifications</Popover.Title>
        <Popover.Description>You are all caught up. Good job!</Popover.Description>
      </Popover.Popup>
    </Popover.Positioner>
  </Popover.Portal>
</Popover.Root>`,
      demo: <BasicPopover />,
    },
    {
      title: "Placement",
      code: `<Popover.Root>
  <Popover.Trigger>Save</Popover.Trigger>
  <Popover.Portal>
    <Popover.Positioner side="right" sideOffset={8}>
      <Popover.Popup>
        <Popover.Arrow />
        <Popover.Title>Placed right</Popover.Title>
        <Popover.Description>Side flips automatically on collision.</Popover.Description>
      </Popover.Popup>
    </Popover.Positioner>
  </Popover.Portal>
</Popover.Root>`,
      demo: <PlacementPopover />,
    },
    {
      title: "With actions",
      code: `<Popover.Popup>
  <Popover.Title>Invite team members</Popover.Title>
  <Popover.Description>Share this link with your team.</Popover.Description>
  <Cluster justify="flex-end">
    <Popover.Close variant="ghost">Cancel</Popover.Close>
    <Popover.Close variant="primary">Copy link</Popover.Close>
  </Cluster>
</Popover.Popup>`,
      demo: <WithActionsPopover />,
    },
    {
      title: "Modal with backdrop",
      code: `<Popover.Root modal>
  <Popover.Trigger>Open modal popover</Popover.Trigger>
  <Popover.Portal>
    <Popover.Backdrop />
    <Popover.Positioner sideOffset={8}>
      <Popover.Popup>
        <Popover.Title>Modal popover</Popover.Title>
        <Popover.Description>A backdrop dims the page.</Popover.Description>
        <Popover.Close>Close</Popover.Close>
      </Popover.Popup>
    </Popover.Positioner>
  </Popover.Portal>
</Popover.Root>`,
      demo: <ModalPopover />,
    },
    {
      title: "Detached trigger",
      code: `const handle = Popover.createHandle<string>();

<Popover.Trigger handle={handle} payload="from-trigger">
  Detached trigger
</Popover.Trigger>

<Popover.Root handle={handle}>
  {({ payload }) => (
    <Popover.Portal>
      <Popover.Positioner sideOffset={8}>
        <Popover.Popup>
          <Popover.Title>Detached</Popover.Title>
          <Popover.Description>Payload: {payload}</Popover.Description>
        </Popover.Popup>
      </Popover.Positioner>
    </Popover.Portal>
  )}
</Popover.Root>`,
      demo: <DetachedPopover />,
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
      default: "false",
      description:
        "Modal behavior: true locks scroll and outside interaction, 'trap-focus' only traps focus, false leaves the page interactive.",
    },
    {
      name: "onOpenChange",
      type: "(open, details) => void",
      default: "—",
      description: "Called when the popover opens or closes.",
    },
    {
      name: "Trigger",
      type: "ButtonProps",
      default: "variant='outline'",
      description:
        "Reuses Button; accepts variant, size, fullWidth, handle, payload, openOnHover, delay, closeDelay.",
    },
    {
      name: "Close",
      type: "ButtonProps",
      default: "variant='ghost'",
      description:
        "Reuses Button for dismissing the popover. Render inside Popup when modal is true or 'trap-focus' so focus can escape.",
    },
    {
      name: "Positioner.side / align",
      type: "'top' | 'bottom' | 'left' | 'right' / 'start' | 'center' | 'end'",
      default: "'bottom' / 'center'",
      description: "Popup placement; side flips automatically on collision.",
    },
    {
      name: "Positioner.sideOffset",
      type: "number | OffsetFunction",
      default: "8",
      description: "Distance between the trigger and the popup.",
    },
    {
      name: "createHandle",
      type: "() => PopoverHandle",
      default: "—",
      description: "Links a Root with triggers rendered outside of it (detached triggers).",
    },
  ],
};
