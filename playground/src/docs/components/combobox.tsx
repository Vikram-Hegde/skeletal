import { CaretDown, CaretUpDown, Check, X } from "@phosphor-icons/react";
import { Combobox, Icon } from "@elemental";
import { useState } from "react";
import type { Doc } from "@/docs/types";

interface Fruit {
  value: string;
  label: string;
}

const fruits: Fruit[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
  { value: "mango", label: "Mango" },
  { value: "orange", label: "Orange" },
  { value: "peach", label: "Peach" },
  { value: "pear", label: "Pear" },
];

function BasicCombobox() {
  const [value, setValue] = useState<Fruit | null>(null);
  return (
    <Combobox.Root items={fruits} value={value} onValueChange={setValue}>
      <Combobox.Label>Fruit</Combobox.Label>
      <Combobox.InputGroup>
        <Combobox.Input placeholder="e.g. Apple" aria-label="Fruit" />
        <Combobox.Clear aria-label="Clear selection">
          <Icon name={X} size={12} />
        </Combobox.Clear>
        <Combobox.Trigger aria-label="Open popup">
          <Combobox.Icon>
            <Icon name={CaretDown} size={16} />
          </Combobox.Icon>
        </Combobox.Trigger>
      </Combobox.InputGroup>
      <Combobox.Portal>
        <Combobox.Positioner>
          <Combobox.Popup>
            <Combobox.Empty>No fruits found.</Combobox.Empty>
            <Combobox.List>
              {(fruit: Fruit) => (
                <Combobox.Item key={fruit.value} value={fruit}>
                  <Combobox.ItemIndicator>
                    <Icon name={Check} size={14} />
                  </Combobox.ItemIndicator>
                  {fruit.label}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

const languages = ["TypeScript", "Python", "Rust", "Go", "Swift"];

function MultiCombobox() {
  const [value, setValue] = useState<string[]>(["TypeScript"]);
  return (
    <Combobox.Root items={languages} multiple value={value} onValueChange={setValue}>
      <Combobox.Label>Languages</Combobox.Label>
      <Combobox.InputGroup>
        <Combobox.Chips>
          <Combobox.Value>
            {(selected: string[]) => (
              <>
                {selected.map((language) => (
                  <Combobox.Chip key={language} aria-label={language}>
                    {language}
                    <Combobox.ChipRemove aria-label={`Remove ${language}`}>
                      <Icon name={X} size={12} />
                    </Combobox.ChipRemove>
                  </Combobox.Chip>
                ))}
                <Combobox.Input
                  placeholder={selected.length > 0 ? "" : "e.g. TypeScript"}
                  aria-label="Languages"
                />
              </>
            )}
          </Combobox.Value>
        </Combobox.Chips>
      </Combobox.InputGroup>
      <Combobox.Portal>
        <Combobox.Positioner>
          <Combobox.Popup>
            <Combobox.Empty>No languages found.</Combobox.Empty>
            <Combobox.List>
              {(language: string) => (
                <Combobox.Item key={language} value={language}>
                  <Combobox.ItemIndicator>
                    <Icon name={Check} size={14} />
                  </Combobox.ItemIndicator>
                  {language}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

interface Country {
  value: string;
  label: string;
}

const countries: Country[] = [
  { value: "canada", label: "Canada" },
  { value: "france", label: "France" },
  { value: "japan", label: "Japan" },
  { value: "kenya", label: "Kenya" },
  { value: "norway", label: "Norway" },
];

function SearchableSelectCombobox() {
  return (
    <Combobox.Root items={countries} defaultValue={countries[1]}>
      <Combobox.Label>Country</Combobox.Label>
      <Combobox.Trigger variant="outline" size="md" fullWidth>
        <Combobox.Value placeholder="Select country" />
        <Combobox.Icon>
          <Icon name={CaretUpDown} size={16} />
        </Combobox.Icon>
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Positioner>
          <Combobox.Popup>
            <Combobox.Input placeholder="e.g. France" aria-label="Search countries" />
            <Combobox.Empty>No countries found.</Combobox.Empty>
            <Combobox.List>
              {(country: Country) => (
                <Combobox.Item key={country.value} value={country}>
                  <Combobox.ItemIndicator>
                    <Icon name={Check} size={14} />
                  </Combobox.ItemIndicator>
                  {country.label}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

export const comboboxDoc: Doc = {
  id: "combobox",
  group: "Components",
  name: "Combobox",
  blurb:
    "A filterable Select: an input combined with a list of predefined items. Type to filter, arrow keys to navigate, Enter to select. Assemble parts as Combobox.Root, .Label, .InputGroup, .Input, .Clear, .Trigger, .Portal, .Positioner, .Popup, .List, .Item — plus .Chips/.Chip/.ChipRemove for multi-select.",
  examples: [
    {
      title: "Basic",
      code: `const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

<Combobox.Root items={fruits} value={value} onValueChange={setValue}>
  <Combobox.Label>Fruit</Combobox.Label>
  <Combobox.InputGroup>
    <Combobox.Input placeholder="e.g. Apple" aria-label="Fruit" />
    <Combobox.Clear aria-label="Clear selection">
      <Icon name={X} size={12} />
    </Combobox.Clear>
    <Combobox.Trigger aria-label="Open popup">
      <Combobox.Icon>
        <Icon name={CaretDown} size={16} />
      </Combobox.Icon>
    </Combobox.Trigger>
  </Combobox.InputGroup>
  <Combobox.Portal>
    <Combobox.Positioner>
      <Combobox.Popup>
        <Combobox.Empty>No fruits found.</Combobox.Empty>
        <Combobox.List>
          {(fruit) => (
            <Combobox.Item key={fruit.value} value={fruit}>
              <Combobox.ItemIndicator>
                <Icon name={Check} size={14} />
              </Combobox.ItemIndicator>
              {fruit.label}
            </Combobox.Item>
          )}
        </Combobox.List>
      </Combobox.Popup>
    </Combobox.Positioner>
  </Combobox.Portal>
</Combobox.Root>`,
      demo: <BasicCombobox />,
    },
    {
      title: "Multiple",
      code: `<Combobox.Root items={languages} multiple value={value} onValueChange={setValue}>
  <Combobox.Label>Languages</Combobox.Label>
  <Combobox.InputGroup>
    <Combobox.Chips>
      <Combobox.Value>
        {(selected) => (
          <>
            {selected.map((language) => (
              <Combobox.Chip key={language} aria-label={language}>
                {language}
                <Combobox.ChipRemove aria-label={\`Remove \${language}\`}>
                  <Icon name={X} size={12} />
                </Combobox.ChipRemove>
              </Combobox.Chip>
            ))}
            <Combobox.Input
              placeholder={selected.length > 0 ? "" : "e.g. TypeScript"}
              aria-label="Languages"
            />
          </>
        )}
      </Combobox.Value>
    </Combobox.Chips>
  </Combobox.InputGroup>
  <Combobox.Portal>
    <Combobox.Positioner>
      <Combobox.Popup>
        <Combobox.Empty>No languages found.</Combobox.Empty>
        <Combobox.List>
          {(language) => (
            <Combobox.Item key={language} value={language}>
              <Combobox.ItemIndicator>
                <Icon name={Check} size={14} />
              </Combobox.ItemIndicator>
              {language}
            </Combobox.Item>
          )}
        </Combobox.List>
      </Combobox.Popup>
    </Combobox.Positioner>
  </Combobox.Portal>
</Combobox.Root>`,
      demo: <MultiCombobox />,
    },
    {
      title: "Searchable select",
      code: `// Input inside the popup: a Select-like trigger that opens a searchable list.
<Combobox.Root items={countries} defaultValue={countries[1]}>
  <Combobox.Label>Country</Combobox.Label>
  <Combobox.Trigger variant="outline" size="md" fullWidth>
    <Combobox.Value placeholder="Select country" />
    <Combobox.Icon>
      <Icon name={CaretUpDown} size={16} />
    </Combobox.Icon>
  </Combobox.Trigger>
  <Combobox.Portal>
    <Combobox.Positioner>
      <Combobox.Popup>
        <Combobox.Input placeholder="e.g. France" aria-label="Search countries" />
        <Combobox.Empty>No countries found.</Combobox.Empty>
        <Combobox.List>
          {(country) => (
            <Combobox.Item key={country.value} value={country}>
              <Combobox.ItemIndicator>
                <Icon name={Check} size={14} />
              </Combobox.ItemIndicator>
              {country.label}
            </Combobox.Item>
          )}
        </Combobox.List>
      </Combobox.Popup>
    </Combobox.Positioner>
  </Combobox.Portal>
</Combobox.Root>`,
      demo: <SearchableSelectCombobox />,
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
      name: "onInputValueChange",
      type: "(inputValue, details) => void",
      default: "—",
      description: "Called as the filter text changes.",
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
      description: "Item data for filtering and value formatting.",
    },
    {
      name: "filter",
      type: "(item, query, state) => boolean",
      default: "—",
      description: "Custom filter; defaults to case-insensitive label/value match.",
    },
    {
      name: "open / defaultOpen",
      type: "boolean",
      default: "false",
      description: "Controlled / uncontrolled open state.",
    },
    {
      name: "disabled / readOnly",
      type: "boolean",
      default: "false",
      description: "Disable interaction, or disallow editing while allowing selection.",
    },
    {
      name: "Input",
      type: "HTMLAttributes<HTMLInputElement>",
      default: "—",
      description: "The filterable text input; label it with a native label or aria-label.",
    },
    {
      name: "InputGroup",
      type: "HTMLAttributes<HTMLDivElement>",
      default: "—",
      description: "Bordered container for Input + Clear/Trigger (or Chips); owns the focus ring.",
    },
    {
      name: "Trigger",
      type: "ButtonProps",
      default: "variant='ghost', size='sm'",
      description:
        "Reuses Button. Inside an InputGroup it compacts to an icon button; standalone it lays out Value + Icon space-between.",
    },
    {
      name: "Clear",
      type: "ButtonProps",
      default: "variant='ghost', size='sm'",
      description: "Reuses Button. Visible only when there is a value/input to clear.",
    },
    {
      name: "Value.placeholder",
      type: "ReactNode",
      default: "—",
      description: "Hint text shown when no value is selected.",
    },
    {
      name: "Value children",
      type: "(value) => ReactNode",
      default: "—",
      description: "Render function; in multi-select this is where you render Chip(s) + Input.",
    },
    {
      name: "Item.value",
      type: "ItemValue",
      default: "null",
      description: "The item's value; a primitive or an object from items.",
    },
    {
      name: "ItemIndicator.keepMounted",
      type: "boolean",
      default: "false",
      description: "Keep the indicator element in the DOM when not selected.",
    },
    {
      name: "Positioner.sideOffset",
      type: "number",
      default: "4",
      description: "Distance between the anchor and the popup.",
    },
    {
      name: "Empty / Status",
      type: "HTMLAttributes<HTMLDivElement>",
      default: "—",
      description: "No-results message and polite status announcements (e.g. loading).",
    },
  ],
};
