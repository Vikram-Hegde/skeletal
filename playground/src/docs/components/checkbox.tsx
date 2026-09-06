import { useState } from "react";
import { Checkbox, Cluster } from "@skeletal";
import type { Doc } from "@/docs/types";

function ControlledGroup() {
  const [value, setValue] = useState<string[]>(["https"]);
  return (
    <Checkbox.Group
      aria-label="Allowed protocols"
      value={value}
      onValueChange={setValue}
    >
      <Cluster as="label" space="0.5rem">
        <Checkbox.Root value="http" />
        HTTP
      </Cluster>
      <Cluster as="label" space="0.5rem">
        <Checkbox.Root value="https" />
        HTTPS
      </Cluster>
      <Cluster as="label" space="0.5rem">
        <Checkbox.Root value="ssh" />
        SSH
      </Cluster>
    </Checkbox.Group>
  );
}

function ParentGroup() {
  const allValues = ["fuji", "gala", "granny-smith"];
  const [value, setValue] = useState<string[]>(["gala"]);
  return (
    <Checkbox.Group value={value} onValueChange={setValue} allValues={allValues}>
      <Cluster as="label" space="0.5rem">
        <Checkbox.Root parent />
        All apples
      </Cluster>
      <Cluster as="label" space="0.5rem" style={{ marginInlineStart: "1rem" }}>
        <Checkbox.Root value="fuji" />
        Fuji
      </Cluster>
      <Cluster as="label" space="0.5rem" style={{ marginInlineStart: "1rem" }}>
        <Checkbox.Root value="gala" />
        Gala
      </Cluster>
      <Cluster as="label" space="0.5rem" style={{ marginInlineStart: "1rem" }}>
        <Checkbox.Root value="granny-smith" />
        Granny Smith
      </Cluster>
    </Checkbox.Group>
  );
}

export const checkboxDoc: Doc = {
  id: "checkbox",
  group: "Components",
  name: "Checkbox",
  blurb:
    "A control for ticking one or many independent options. Assemble parts as Checkbox.Group, .Root, and .Indicator. The hidden native input keeps native form submission, required validation, and headless form libraries (react-hook-form, TanStack Form, Formisch) working.",
  examples: [
    {
      title: "Basic",
      code: `<Cluster as="label" space="0.5rem">
  <Checkbox.Root name="terms" required />
  Accept terms and conditions
</Cluster>

<Cluster as="label" space="0.5rem">
  <Checkbox.Root defaultChecked />
  Subscribe to updates
</Cluster>`,
      demo: (
        <>
          <Cluster as="label" space="0.5rem">
            <Checkbox.Root name="terms" required />
            Accept terms and conditions
          </Cluster>
          <br />
          <Cluster as="label" space="0.5rem">
            <Checkbox.Root defaultChecked />
            Subscribe to updates
          </Cluster>
        </>
      ),
    },
    {
      title: "States",
      code: `<Cluster>
  <Checkbox.Root disabled />
  <Checkbox.Root checked disabled />
  <Checkbox.Root readOnly defaultChecked />
  <Checkbox.Root indeterminate />
</Cluster>`,
      demo: (
        <>
          <Cluster as="label" space="0.5rem">
            <Checkbox.Root disabled />
            Disabled unchecked
          </Cluster>
          <br />
          <Cluster as="label" space="0.5rem">
            <Checkbox.Root checked disabled />
            Disabled checked
          </Cluster>
          <br />
          <Cluster as="label" space="0.5rem">
            <Checkbox.Root readOnly defaultChecked />
            Read-only
          </Cluster>
          <br />
          <Cluster as="label" space="0.5rem">
            <Checkbox.Root indeterminate />
            Indeterminate
          </Cluster>
        </>
      ),
    },
    {
      title: "Group (one array-valued field)",
      code: `const [value, setValue] = useState(['https']);

<Checkbox.Group value={value} onValueChange={setValue}>
  <Cluster as="label" space="0.5rem"><Checkbox.Root value="http" /> HTTP</Cluster>
  <Cluster as="label" space="0.5rem"><Checkbox.Root value="https" /> HTTPS</Cluster>
  <Cluster as="label" space="0.5rem"><Checkbox.Root value="ssh" /> SSH</Cluster>
</Checkbox.Group>

// react-hook-form: wrap in Controller, map onValueChange → field.onChange
// TanStack Form: use form.Field, field.state.value + field.handleChange`,
      demo: <ControlledGroup />,
    },
    {
      title: 'Parent ("select all")',
      code: `const allValues = ['fuji', 'gala', 'granny-smith'];
const [value, setValue] = useState(['gala']);

<Checkbox.Group value={value} onValueChange={setValue} allValues={allValues}>
  <Cluster as="label" space="0.5rem">
    <Checkbox.Root parent />
    All apples
  </Cluster>
  {/* child checkboxes with their own values */}
</Checkbox.Group>`,
      demo: <ParentGroup />,
    },
  ],
  props: [
    {
      name: "checked / defaultChecked",
      type: "boolean",
      default: "false (defaultChecked)",
      description:
        "Controlled / uncontrolled ticked state. Wrap in Field.Root or a library controller for controlled forms.",
    },
    {
      name: "onCheckedChange",
      type: "(checked, details) => void",
      default: "—",
      description:
        "Called when the checkbox is ticked or unticked. Map to field.onChange in react-hook-form / TanStack Form.",
    },
    {
      name: "indeterminate",
      type: "boolean",
      default: "false",
      description:
        "Mixed state (neither ticked nor unticked). The indicator swaps its check for a dash; set automatically for parent checkboxes.",
    },
    {
      name: "name / value / form",
      type: "string",
      default: "—",
      description:
        "Hidden input wiring for native submission: the field name, the value submitted when ticked ('on' by default), and the owning form id.",
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
    {
      name: "Group.value / defaultValue",
      type: "string[]",
      default: "—",
      description:
        "The group's checked values as an array. Treat the whole group as one array-valued field.",
    },
    {
      name: "Group.onValueChange",
      type: "(value: string[], details) => void",
      default: "—",
      description: "Called when any checkbox in the group toggles.",
    },
    {
      name: "Group.allValues",
      type: "string[]",
      default: "—",
      description:
        "Every child value — enables a parent checkbox that drives the group's select-all state.",
    },
    {
      name: "Indicator.keepMounted",
      type: "boolean",
      default: "false",
      description: "Keep the indicator in the DOM while unchecked.",
    },
  ],
};
