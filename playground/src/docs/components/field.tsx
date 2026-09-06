import { Checkbox, Cluster, Combobox, Field, Input, Radio, Select } from "@skeletal";
import type { Doc } from "@/docs/types";

export const fieldDoc: Doc = {
  id: "field",
  group: "Components",
  name: "Field",
  blurb: "An accessible wrapper that groups a label, control, description, and error.",
  examples: [
    {
      title: "Basic field",
      code: `<Field.Root>
  <Field.Label>Name</Field.Label>
  <Field.Description>Shown on your public profile.</Field.Description>
  <Input id="name" placeholder="Ada Lovelace" />
  <Field.Error />
</Field.Root>`,
      demo: (
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Field.Description>Shown on your public profile.</Field.Description>
          <Input id="name" placeholder="Ada Lovelace" />
          <Field.Error />
        </Field.Root>
      ),
    },
    {
      title: "Custom validation",
      code: `<Field.Root
  validationMode="onChange"
  validate={(value) =>
    String(value).length < 3 ? "Too short" : null
  }
>
  <Field.Label>Username</Field.Label>
  <Input id="username" placeholder="3+ characters" />
  <Field.Error />
</Field.Root>`,
      demo: (
        <Field.Root
          validationMode="onChange"
          validate={(value) => (String(value).length < 3 ? "Too short" : null)}
        >
          <Field.Label>Username</Field.Label>
          <Input id="username" placeholder="3+ characters" />
          <Field.Error />
        </Field.Root>
      ),
    },
    {
      title: "Select in a field",
      code: `<Field.Root invalid>
  <Field.Label>Country</Field.Label>
  <Select.Root defaultValue="US">
    <Select.Trigger>
      <Select.Value />
    </Select.Trigger>
    <Select.Portal>
      <Select.Positioner>
        <Select.Popup>
          <Select.List>
            <Select.Item value="US"><Select.ItemText>United States</Select.ItemText></Select.Item>
            {/* … */}
          </Select.List>
        </Select.Popup>
      </Select.Positioner>
    </Select.Portal>
  </Select.Root>
  <Field.Error>Required.</Field.Error>
</Field.Root>`,
      demo: (
        <Field.Root invalid>
          <Field.Label>Country</Field.Label>
          <Select.Root defaultValue="US">
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Portal>
              <Select.Positioner>
                <Select.Popup>
                  <Select.List>
                    <Select.Item value="US">
                      <Select.ItemText>United States</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="UK">
                      <Select.ItemText>United Kingdom</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="DE">
                      <Select.ItemText>Germany</Select.ItemText>
                    </Select.Item>
                  </Select.List>
                </Select.Popup>
              </Select.Positioner>
            </Select.Portal>
          </Select.Root>
          <Field.Error>Required.</Field.Error>
        </Field.Root>
      ),
    },
    {
      title: "Combobox in a field",
      code: `<Field.Root invalid>
  <Field.Label>Framework</Field.Label>
  <Combobox.Root defaultValue="React">
    <Combobox.InputGroup>
      <Combobox.Input placeholder="Pick one" />
      <Combobox.Trigger />
    </Combobox.InputGroup>
    <Combobox.Portal>
      <Combobox.Positioner>
        <Combobox.Popup>
          <Combobox.List>
            <Combobox.Item value="React"><Combobox.Value /></Combobox.Item>
            {/* … */}
          </Combobox.List>
        </Combobox.Popup>
      </Combobox.Positioner>
    </Combobox.Portal>
  </Combobox.Root>
  <Field.Error>Required.</Field.Error>
</Field.Root>`,
      demo: (
        <Field.Root invalid>
          <Field.Label>Framework</Field.Label>
          <Combobox.Root defaultValue="React">
            <Combobox.InputGroup>
              <Combobox.Input placeholder="Pick one" />
              <Combobox.Trigger />
            </Combobox.InputGroup>
            <Combobox.Portal>
              <Combobox.Positioner>
                <Combobox.Popup>
                  <Combobox.List>
                    <Combobox.Item value="React">
                      <Combobox.Value />
                    </Combobox.Item>
                    <Combobox.Item value="Solid">
                      <Combobox.Value />
                    </Combobox.Item>
                    <Combobox.Item value="Vue">
                      <Combobox.Value />
                    </Combobox.Item>
                  </Combobox.List>
                </Combobox.Popup>
              </Combobox.Positioner>
            </Combobox.Portal>
          </Combobox.Root>
          <Field.Error>Required.</Field.Error>
        </Field.Root>
      ),
    },
    {
      title: "Checkbox in a field",
      code: `<Field.Root name="terms" invalid>
  <Cluster as="label" space="0.5rem">
    <Checkbox.Root required />
    Accept terms and conditions
  </Cluster>
  <Field.Error>You must accept the terms to continue.</Field.Error>
</Field.Root>`,
      demo: (
        <Field.Root name="terms" invalid>
          <Cluster as="label" space="0.5rem">
            <Checkbox.Root required />
            Accept terms and conditions
          </Cluster>
          <Field.Error>You must accept the terms to continue.</Field.Error>
        </Field.Root>
      ),
    },
    {
      title: "Radio group in a field",
      code: `<Field.Root name="plan" invalid>
  <Field.Label>Plan</Field.Label>
  <Radio.Group defaultValue="free">
    <Cluster as="label" space="0.5rem">
      <Radio.Root value="free"><Radio.Indicator /></Radio.Root>
      Free
    </Cluster>
    <Cluster as="label" space="0.5rem">
      <Radio.Root value="pro"><Radio.Indicator /></Radio.Root>
      Pro
    </Cluster>
  </Radio.Group>
  <Field.Error>Please select a plan.</Field.Error>
</Field.Root>`,
      demo: (
        <Field.Root name="plan" invalid>
          <Field.Label>Plan</Field.Label>
          <Radio.Group defaultValue="free">
            <Cluster as="label" space="0.5rem">
              <Radio.Root value="free">
                <Radio.Indicator />
              </Radio.Root>
              Free
            </Cluster>
            <Cluster as="label" space="0.5rem">
              <Radio.Root value="pro">
                <Radio.Indicator />
              </Radio.Root>
              Pro
            </Cluster>
          </Radio.Group>
          <Field.Error>Please select a plan.</Field.Error>
        </Field.Root>
      ),
    },
  ],
  props: [
    {
      name: "Field.Root",
      type: "compound part",
      default: "—",
      description: [
        "Groups every part of the field and owns its validation state.",
        "Wraps Base UI's Field.Root; all of its props pass through",
        "(disabled, name, validate, validationMode, invalid, dirty, touched, actionsRef).",
      ].join("\n"),
    },
    {
      name: "Field.Label",
      type: "compound part",
      default: "—",
      description:
        "An accessible <label> automatically associated with the control. Pass nativeLabel={false} when wrapping a non-label control (e.g. a Select.Trigger).",
    },
    {
      name: "Field.Description",
      type: "compound part",
      default: "—",
      description:
        "Helper text shown beneath the label. Use it to clarify the expected format or purpose of the field.",
    },
    {
      name: "Field.Error",
      type: "compound part",
      default: "—",
      description:
        "An error message revealed when validation fails. Use the match prop to control visibility (e.g. match={true} to force it).",
    },
    {
      name: "Input",
      type: "compound part",
      default: "—",
      description:
        "The styled text input to drop inside a Field. Wraps Base UI's Input, so every Base UI prop passes through (value, defaultValue, onValueChange, render, disabled, …). It reflects the field's validation state automatically via data-valid / data-invalid / data-filled attributes.",
    },
    {
      name: "Input.size",
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: "Height and text size of the input: sm 2rem, md 2.5rem (default), lg 3rem.",
    },
    {
      name: "Input.fullWidth",
      type: "boolean",
      default: "false",
      description: "Whether the input stretches to fill its parent width.",
    },
  ],
};
