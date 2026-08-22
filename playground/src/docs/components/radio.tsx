import { useState } from "react";
import { Radio } from "@elemental";
import type { Doc } from "@/docs/types";

function ControlledRadioGroup() {
  const [value, setValue] = useState("pro");
  return (
    <Radio.Group aria-label="Plan" value={value} onValueChange={setValue}>
      <label>
        <Radio.Root value="free">
          <Radio.Indicator />
        </Radio.Root>
        Free
      </label>
      <label>
        <Radio.Root value="pro">
          <Radio.Indicator />
        </Radio.Root>
        Pro
      </label>
      <label>
        <Radio.Root value="enterprise">
          <Radio.Indicator />
        </Radio.Root>
        Enterprise
      </label>
    </Radio.Group>
  );
}

export const radioDoc: Doc = {
  id: "radio",
  group: "Components",
  name: "Radio",
  blurb:
    "A control for picking exactly one option from a set. Assemble parts as Radio.Group, .Root, and .Indicator — the Group owns the value and renders the hidden form input, so headless form libraries (react-hook-form, TanStack Form, Formisch) only wire up the group.",
  examples: [
    {
      title: "Basic (uncontrolled)",
      code: `<Radio.Group defaultValue="free" name="plan">
  <label>
    <Radio.Root value="free"><Radio.Indicator /></Radio.Root>
    Free
  </label>
  <label>
    <Radio.Root value="pro"><Radio.Indicator /></Radio.Root>
    Pro
  </label>
</Radio.Group>`,
      demo: (
        <Radio.Group defaultValue="free" name="plan">
          <label>
            <Radio.Root value="free">
              <Radio.Indicator />
            </Radio.Root>
            Free
          </label>
          <label>
            <Radio.Root value="pro">
              <Radio.Indicator />
            </Radio.Root>
            Pro
          </label>
        </Radio.Group>
      ),
    },
    {
      title: "Controlled + disabled option",
      code: `const [value, setValue] = useState('pro');

<Radio.Group value={value} onValueChange={setValue}>
  <label><Radio.Root value="free" /> Free</label>
  <label><Radio.Root value="pro" /> Pro</label>
  <label><Radio.Root value="legacy" disabled /> Legacy</label>
</Radio.Group>`,
      demo: (
        <>
          <ControlledRadioGroup />
          <br />
          <label>
            <Radio.Root value="legacy" disabled />
            Legacy (disabled)
          </label>
        </>
      ),
    },
    {
      title: "With form libraries",
      code: `// react-hook-form
<Controller
  control={control}
  name="plan"
  render={({ field }) => (
    <Radio.Group
      value={field.value}
      onValueChange={field.onChange}
      onBlur={field.onBlur}
    >
      {/* radios only declare their value */}
      <label><Radio.Root value="free" /> Free</label>
    </Radio.Group>
  )}
/>

// TanStack Form: form.Field → field.state.value / field.handleChange
// Formisch / uncontrolled: just set the Group's name`,
      demo: <ControlledRadioGroup />,
    },
  ],
  props: [
    {
      name: "Group.value / defaultValue",
      type: "Value",
      default: "—",
      description:
        "The selected radio's value. Control the group for form libraries; individual radios never hold state.",
    },
    {
      name: "Group.onValueChange",
      type: "(value, details) => void",
      default: "—",
      description:
        "Called when the selection changes. Map to field.onChange in react-hook-form / TanStack Form.",
    },
    {
      name: "Root.value",
      type: "Value",
      default: "—",
      description: "This radio's identifying value within the group; submitted when selected.",
    },
    {
      name: "Group.name / form",
      type: "string",
      default: "—",
      description:
        "Hidden input wiring for native submission and uncontrolled library integration.",
    },
    {
      name: "disabled / readOnly / required",
      type: "boolean",
      default: "false",
      description:
        "Settable on both Group and Root; required participates in native validation.",
    },
    {
      name: "Group.inputRef",
      type: "Ref<HTMLInputElement>",
      default: "—",
      description: "Ref to the group's hidden input — hand this to field.ref in react-hook-form.",
    },
    {
      name: "Indicator.keepMounted",
      type: "boolean",
      default: "false",
      description: "Keep the dot element in the DOM while unchecked.",
    },
  ],
};
