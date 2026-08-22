import { useState } from "react";
import { Switch } from "@elemental";
import type { Doc } from "@/docs/types";

function ControlledSwitch() {
  const [checked, setChecked] = useState(true);
  return (
    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Switch.Root checked={checked} onCheckedChange={setChecked} />
      {checked ? "Notifications on" : "Notifications off"}
    </label>
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
      code: `<label>
  <Switch.Root defaultChecked />
  Notifications
</label>

<label>
  <Switch.Root />
  Dark mode
</label>`,
      demo: (
        <>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Switch.Root defaultChecked />
            Notifications
          </label>
          <br />
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Switch.Root />
            Dark mode
          </label>
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
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Switch.Root disabled />
            Disabled off
          </label>
          <br />
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Switch.Root defaultChecked disabled />
            Disabled on
          </label>
          <br />
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Switch.Root readOnly defaultChecked />
            Read-only
          </label>
        </>
      ),
    },
    {
      title: "Controlled",
      code: `const [checked, setChecked] = useState(true);

<label>
  <Switch.Root checked={checked} onCheckedChange={setChecked} />
  {checked ? 'Notifications on' : 'Notifications off'}
</label>`,
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
