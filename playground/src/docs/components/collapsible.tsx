import { Collapsible, Stack } from "@skeletal";
import { useState } from "react";
import type { Doc } from "@/docs/types";

function BasicCollapsible() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>Shipping details</Collapsible.Trigger>
      <Collapsible.Panel>
        <Stack space="0.5rem" style={{ padding: "0.75rem 0.25rem", fontSize: "0.875rem" }}>
          Standard shipping takes 3–5 business days. Express shipping arrives next day.
        </Stack>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}

function StackedCollapsible() {
  const sections = [
    ["Recovery keys", "alien-bean-pasta, wild-irish-burrito, horse-battery-staple"],
    ["Devices", "2 signed-in devices, last active 3 minutes ago"],
  ];
  return (
    <Stack space="0.5rem" style={{ inlineSize: "100%", maxInlineSize: "22rem" }}>
      {sections.map(([title, body]) => (
        <Collapsible.Root key={title}>
          <Collapsible.Trigger fullWidth variant="ghost">
            {title}
          </Collapsible.Trigger>
          <Collapsible.Panel>
            <div style={{ padding: "0.75rem 0.625rem", fontSize: "0.875rem" }}>{body}</div>
          </Collapsible.Panel>
        </Collapsible.Root>
      ))}
    </Stack>
  );
}

function ControlledCollapsible() {
  const [open, setOpen] = useState(false);
  return (
    <Stack space="0.5rem" style={{ alignItems: "flex-start" }}>
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger variant="secondary">Advanced options</Collapsible.Trigger>
        <Collapsible.Panel>
          <div style={{ padding: "0.75rem 0.25rem", fontSize: "0.875rem" }}>
            Retry failed uploads automatically, up to three times.
          </div>
        </Collapsible.Panel>
      </Collapsible.Root>
      <span style={{ fontSize: "0.75rem", color: "var(--sk-muted-foreground)" }}>
        {open ? "Expanded" : "Collapsed"}
      </span>
    </Stack>
  );
}

export const collapsibleDoc: Doc = {
  id: "collapsible",
  group: "Components",
  name: "Collapsible",
  blurb:
    "A region that expands and collapses behind a button. Assemble Collapsible.Root, .Trigger, and .Panel; the trigger is a Button with a chevron that rotates when open.",
  examples: [
    {
      title: "Basic",
      code: `import { Collapsible } from "@vikram-hegde/skeletal";

<Collapsible.Root>
  <Collapsible.Trigger>Shipping details</Collapsible.Trigger>
  <Collapsible.Panel>
    Standard shipping takes 3–5 business days.
  </Collapsible.Panel>
</Collapsible.Root>`,
      demo: <BasicCollapsible />,
    },
    {
      title: "Stacked",
      code: `import { Collapsible, Stack } from "@vikram-hegde/skeletal";

<Stack space="0.5rem">
  <Collapsible.Root>
    <Collapsible.Trigger fullWidth variant="ghost">
      Recovery keys
    </Collapsible.Trigger>
    <Collapsible.Panel>
      <div>alien-bean-pasta, wild-irish-burrito</div>
    </Collapsible.Panel>
  </Collapsible.Root>
  <Collapsible.Root>
    <Collapsible.Trigger fullWidth variant="ghost">
      Devices
    </Collapsible.Trigger>
    <Collapsible.Panel>
      <div>2 signed-in devices</div>
    </Collapsible.Panel>
  </Collapsible.Root>
</Stack>`,
      demo: <StackedCollapsible />,
    },
    {
      title: "Controlled",
      code: `const [open, setOpen] = useState(false);

<Collapsible.Root open={open} onOpenChange={setOpen}>
  <Collapsible.Trigger variant="secondary">Advanced options</Collapsible.Trigger>
  <Collapsible.Panel>
    Retry failed uploads automatically, up to three times.
  </Collapsible.Panel>
</Collapsible.Root>`,
      demo: <ControlledCollapsible />,
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
      description: "Called when the panel opens or closes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Ignores user interaction on the trigger.",
    },
    {
      name: "Trigger",
      type: "ButtonProps",
      default: "variant='outline'",
      description: "Reuses Button; accepts variant, size, fullWidth. The chevron is appended automatically.",
    },
    {
      name: "Panel.keepMounted",
      type: "boolean",
      default: "false",
      description: "Keeps the closed panel in the DOM, e.g. for search indexing or preserved state.",
    },
    {
      name: "Panel.hiddenUntilFound",
      type: "boolean",
      default: "false",
      description: "Hides the closed panel with hidden='until-found' so find-in-page can reveal it.",
    },
  ],
};
