import { useState } from "react";
import { Cluster, Switch } from "@skeletal";
import type { Doc } from "@/docs/types";

function ControlledSwitch() {
  const [checked, setChecked] = useState(true);
  return (
    <Cluster as="label" space="0.5rem">
      <Switch.Root checked={checked} onCheckedChange={setChecked} />
      {checked ? "Notifications on" : "Notifications off"}
    </Cluster>
  );
}

export const switchDoc: Doc = {
  id: "switch",
  group: "Components",
  name: "Switch",
  blurb:
    "An on/off toggle for instant-effect settings. Assemble parts as Switch.Root and .Thumb. Prefer Checkbox when the value is part of submitted form data; a hidden native input still lets switches work with native forms and headless libraries (react-hook-form, TanStack Form, Formisch).",
  examples: [
    {
      title: "Basic",
      code: `<Cluster as="label" space="0.5rem">
  <Switch.Root defaultChecked />
  Notifications
</Cluster>

<Cluster as="label" space="0.5rem">
  <Switch.Root />
  Dark mode
</Cluster>`,
      demo: (
        <>
          <Cluster as="label" space="0.5rem">
            <Switch.Root defaultChecked />
            Notifications
          </Cluster>
          <br />
          <Cluster as="label" space="0.5rem">
            <Switch.Root />
            Dark mode
          </Cluster>
        </>
      ),
    },
    {
      title: "States",
      code: `<Cluster>
  <Switch.Root disabled />
  <Switch.Root defaultChecked disabled />
  <Switch.Root readOnly defaultChecked />
</Cluster>`,
      demo: (
        <>
          <Cluster as="label" space="0.5rem">
            <Switch.Root disabled />
            Disabled off
          </Cluster>
          <br />
          <Cluster as="label" space="0.5rem">
            <Switch.Root defaultChecked disabled />
            Disabled on
          </Cluster>
          <br />
          <Cluster as="label" space="0.5rem">
            <Switch.Root readOnly defaultChecked />
            Read-only
          </Cluster>
        </>
      ),
    },
    {
      title: "Controlled",
      code: `const [checked, setChecked] = useState(true);

<Cluster as="label" space="0.5rem">
  <Switch.Root checked={checked} onCheckedChange={setChecked} />
  {checked ? 'Notifications on' : 'Notifications off'}
</Cluster>`,
      demo: <ControlledSwitch />,
    },
  ],
  props: [
    {
      name: "checked / defaultChecked",
      type: "boolean",
      default: "false (defaultChecked)",
      description:
        "Controlled / uncontrolled on state. Wrap in Field.Root or a library controller for controlled forms.",
    },
    {
      name: "onCheckedChange",
      type: "(checked, details) => void",
      default: "—",
      description:
        "Called when the switch is toggled. Map to field.onChange in react-hook-form / TanStack Form.",
    },
    {
      name: "name / value / uncheckedValue / form",
      type: "string",
      default: "'on' (value)",
      description:
        "Hidden input wiring for native submission; by default an on switch submits 'on' and an off switch submits nothing, matching native checkboxes.",
    },
    {
      name: "disabled / readOnly / required",
      type: "boolean",
      default: "false",
      description: "Standard interactive states; required participates in native validation.",
    },
    {
      name: "inputRef",
      type: "Ref<HTMLInputElement>",
      default: "—",
      description: "Ref to the hidden input — hand this to field.ref in react-hook-form.",
    },
  ],
};
