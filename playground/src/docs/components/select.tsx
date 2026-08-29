import { Check } from "@phosphor-icons/react";
import { Icon, Select } from "@skeletal";
import { useState } from "react";
import type { Doc } from "@/docs/types";

const themes = [
  { value: "system", label: "System default" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

function BasicSelect() {
  const [value, setValue] = useState<string | null>("system");
  return (
    <Select.Root items={themes} value={value} onValueChange={setValue}>
      <Select.Label>Theme</Select.Label>
      <Select.Trigger>
        <Select.Value placeholder="Select theme" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              {themes.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  <Select.ItemIndicator>
                    <Icon name={Check} size={14} />
                  </Select.ItemIndicator>
                  <Select.ItemText>{item.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

const groupedFruits = [
  {
    value: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    value: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "lettuce", label: "Lettuce" },
      { value: "spinach", label: "Spinach" },
    ],
  },
];

function GroupedSelect() {
  return (
    <Select.Root items={groupedFruits} defaultValue="carrot">
      <Select.Label>Produce</Select.Label>
      <Select.Trigger>
        <Select.Value placeholder="Select produce" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              {groupedFruits.map((group) => (
                <Select.Group key={group.value}>
                  <Select.GroupLabel>{group.value}</Select.GroupLabel>
                  {group.items.map((item) => (
                    <Select.Item key={item.value} value={item.value}>
                      <Select.ItemIndicator>
                        <Icon name={Check} size={14} />
                      </Select.ItemIndicator>
                      <Select.ItemText>{item.label}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Group>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

const languages = ["TypeScript", "Python", "Rust", "Go", "Swift"];

function MultiSelect() {
  const [value, setValue] = useState<string[]>(["TypeScript"]);
  const renderValue = (selected: string[]) => {
    if (selected.length === 0) return "Select languages";
    const first = selected[0];
    const more = selected.length > 1 ? ` (+${selected.length - 1} more)` : "";
    return first + more;
  };
  return (
    <Select.Root multiple value={value} onValueChange={setValue}>
      <Select.Label>Languages</Select.Label>
      <Select.Trigger>
        <Select.Value>{renderValue}</Select.Value>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner alignItemWithTrigger={false}>
          <Select.Popup>
            <Select.List>
              {languages.map((language) => (
                <Select.Item key={language} value={language}>
                  <Select.ItemIndicator>
                    <Icon name={Check} size={14} />
                  </Select.ItemIndicator>
                  <Select.ItemText>{language}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

function FloatingSelect() {
  return (
    <Select.Root defaultValue="dark" modal={false}>
      <Select.Label>Alignment</Select.Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner alignItemWithTrigger={false} sideOffset={8}>
          <Select.Popup>
            <Select.List>
              <Select.Item value="system">
                <Select.ItemIndicator>
                  <Icon name={Check} size={14} />
                </Select.ItemIndicator>
                <Select.ItemText>System default</Select.ItemText>
              </Select.Item>
              <Select.Item value="light">
                <Select.ItemIndicator>
                  <Icon name={Check} size={14} />
                </Select.ItemIndicator>
                <Select.ItemText>Light</Select.ItemText>
              </Select.Item>
              <Select.Item value="dark">
                <Select.ItemIndicator>
                  <Icon name={Check} size={14} />
                </Select.ItemIndicator>
                <Select.ItemText>Dark</Select.ItemText>
              </Select.Item>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

export const selectDoc: Doc = {
  id: "select",
  group: "Components",
  name: "Select",
  blurb:
    "A form control for choosing a predefined value from a dropdown. Assemble parts as Select.Root, .Label, .Trigger, .Value, .Portal, .Positioner, .Popup, .List, .Item, plus groups and scroll arrows. The trigger owns its chevron.",
  examples: [
    {
      title: "Basic",
      code: `const themes = [
  { value: "system", label: "System default" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

<Select.Root items={themes} value={value} onValueChange={setValue}>
  <Select.Label>Theme</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Select theme" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Positioner>
      <Select.Popup>
        <Select.List>
          {themes.map((item) => (
            <Select.Item key={item.value} value={item.value}>
              <Select.ItemIndicator>
                <Icon name={Check} size={14} />
              </Select.ItemIndicator>
              <Select.ItemText>{item.label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>`,
      demo: <BasicSelect />,
    },
    {
      title: "Grouped",
      code: `<Select.Root items={groupedFruits} defaultValue="carrot">
  <Select.Label>Produce</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Select produce" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Positioner>
      <Select.Popup>
        <Select.List>
          {groupedFruits.map((group) => (
            <Select.Group key={group.value}>
              <Select.GroupLabel>{group.value}</Select.GroupLabel>
              {group.items.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  <Select.ItemIndicator>
                    <Icon name={Check} size={14} />
                  </Select.ItemIndicator>
                  <Select.ItemText>{item.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          ))}
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>`,
      demo: <GroupedSelect />,
    },
    {
      title: "Multiple",
      code: `<Select.Root multiple value={value} onValueChange={setValue}>
  <Select.Label>Languages</Select.Label>
  <Select.Trigger>
    <Select.Value>{renderValue}</Select.Value>
  </Select.Trigger>
  <Select.Portal>
    <Select.Positioner alignItemWithTrigger={false}>
      <Select.Popup>
        <Select.List>
          {languages.map((language) => (
            <Select.Item key={language} value={language}>
              <Select.ItemIndicator>
                <Icon name={Check} size={14} />
              </Select.ItemIndicator>
              <Select.ItemText>{language}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>`,
      demo: <MultiSelect />,
    },
    {
      title: "Floating popup",
      code: `<Select.Root defaultValue="dark" modal={false}>
  <Select.Label>Alignment</Select.Label>
  <Select.Trigger>
    <Select.Value />
  </Select.Trigger>
  <Select.Portal>
    <Select.Positioner alignItemWithTrigger={false} sideOffset={8}>
      <Select.Popup>
        <Select.List>
          <Select.Item value="system">
            <Select.ItemIndicator>
              <Icon name={Check} size={14} />
            </Select.ItemIndicator>
            <Select.ItemText>System default</Select.ItemText>
          </Select.Item>
          {/* ... */}
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>`,
      demo: <FloatingSelect />,
    },
  ],
  props: [
    {
      name: "value / defaultValue",
      type: "Value | Value[] | null",
      default: "null",
      description: "Controlled / uncontrolled selected value. Add multiple for arrays.",
    },
    {
      name: "onValueChange",
      type: "(value, details) => void",
      default: "—",
      description: "Called when the selected value changes.",
    },
    {
      name: "multiple",
      type: "boolean",
      default: "false",
      description: "Allow selecting multiple items; value becomes an array.",
    },
    {
      name: "items",
      type: "{ value, label }[] | Record | Group[]",
      default: "—",
      description: "Item data so Select.Value renders labels instead of raw values.",
    },
    {
      name: "modal",
      type: "boolean",
      default: "true",
      description: "Modal state when open. Set false for a non-blocking dropdown.",
    },
    {
      name: "Trigger",
      type: "ButtonProps",
      default: "variant='outline'",
      description: "Reuses Button; accepts variant, size, fullWidth. Renders Value plus a built-in chevron.",
    },
    {
      name: "Value.placeholder",
      type: "ReactNode",
      default: "—",
      description: "Hint text shown when no value is selected.",
    },
    {
      name: "Positioner.alignItemWithTrigger",
      type: "boolean",
      default: "true",
      description: "Overlap the trigger so the selected item aligns with the value text.",
    },
    {
      name: "Positioner.sideOffset",
      type: "number",
      default: "4",
      description: "Distance between the trigger and the popup.",
    },
    {
      name: "ItemIndicator.keepMounted",
      type: "boolean",
      default: "false",
      description: "Keep the indicator element in the DOM when not selected.",
    },
  ],
};
