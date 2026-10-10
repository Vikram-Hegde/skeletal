import { Check, Trash, X } from "@phosphor-icons/react";
import { Icon, Menu } from "@skeletal";
import { useState } from "react";
import type { Doc } from "@/docs/types";

function BasicMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Menu.Root open={open} onOpenChange={setOpen}>
      <Menu.Trigger>Options</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={8} align="start">
          <Menu.Popup>
            <Menu.Item onClick={() => setOpen(false)}>Edit</Menu.Item>
            <Menu.Item onClick={() => setOpen(false)}>Duplicate</Menu.Item>
            <Menu.Separator />
            <Menu.Item danger onClick={() => setOpen(false)}>
              <Icon name={Trash} size={16} />
              Delete
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

function NestedMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Menu.Root open={open} onOpenChange={setOpen}>
      <Menu.Trigger variant="ghost">Open nested menu</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={8} align="start">
          <Menu.Popup>
            <Menu.Item onClick={() => setOpen(false)}>Home</Menu.Item>
            <Menu.SubmenuRoot>
              <Menu.SubmenuTrigger>More actions</Menu.SubmenuTrigger>
              <Menu.Portal>
                <Menu.Positioner sideOffset={4}>
                  <Menu.Popup>
                    <Menu.Item onClick={() => setOpen(false)}>Settings</Menu.Item>
                    <Menu.Item danger onClick={() => setOpen(false)}>
                      Log out
                    </Menu.Item>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.SubmenuRoot>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

function RadioMenu() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("date");
  return (
    <Menu.Root open={open} onOpenChange={setOpen}>
      <Menu.Trigger variant="outline">Sort by</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={8} align="start">
          <Menu.Popup>
            <Menu.RadioGroup value={sort} onValueChange={setSort}>
              <Menu.RadioItem value="date">
                <Menu.RadioItemIndicator>
                  <Icon name={Check} size={14} />
                </Menu.RadioItemIndicator>
                Date
              </Menu.RadioItem>
              <Menu.RadioItem value="name">
                <Menu.RadioItemIndicator>
                  <Icon name={Check} size={14} />
                </Menu.RadioItemIndicator>
                Name
              </Menu.RadioItem>
              <Menu.RadioItem value="type">
                <Menu.RadioItemIndicator>
                  <Icon name={Check} size={14} />
                </Menu.RadioItemIndicator>
                Type
              </Menu.RadioItem>
            </Menu.RadioGroup>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

function CheckboxMenu() {
  const [open, setOpen] = useState(false);
  const [minimap, setMinimap] = useState(true);
  const [search, setSearch] = useState(true);
  return (
    <Menu.Root open={open} onOpenChange={setOpen}>
      <Menu.Trigger variant="outline">Workspace</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={8} align="start">
          <Menu.Popup>
            <Menu.Group>
              <Menu.GroupLabel>View</Menu.GroupLabel>
              <Menu.CheckboxItem checked={minimap} onCheckedChange={setMinimap}>
                <Menu.CheckboxItemIndicator>
                  <Icon name={Check} size={14} />
                </Menu.CheckboxItemIndicator>
                Minimap
              </Menu.CheckboxItem>
              <Menu.CheckboxItem checked={search} onCheckedChange={setSearch}>
                <Menu.CheckboxItemIndicator>
                  <Icon name={Check} size={14} />
                </Menu.CheckboxItemIndicator>
                Search
              </Menu.CheckboxItem>
            </Menu.Group>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

const FILTER_ACTIONS = ["New file", "Open file", "Save", "Save as", "Duplicate", "Rename"];

function FilterMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Menu.FilterProvider>
      <Menu.Root open={open} onOpenChange={setOpen}>
        <Menu.Trigger variant="outline">Actions</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={8} align="start">
            <Menu.Popup>
              <Menu.Input aria-label="Filter actions" placeholder="Filter actions" />
              <Menu.Clear aria-label="Clear filter">
                <Icon name={X} size={14} />
              </Menu.Clear>
              <Menu.Empty>No actions found.</Menu.Empty>
              <Menu.List>
                {FILTER_ACTIONS.map((action) => (
                  <Menu.Item key={action} onClick={() => setOpen(false)}>
                    {action}
                  </Menu.Item>
                ))}
              </Menu.List>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </Menu.FilterProvider>
  );
}

export const menuDoc: Doc = {
  id: "menu",
  group: "Components",
  name: "Menu",
  blurb:
    "A dropdown menu of actions with full keyboard navigation. Assemble parts as Menu.Root, .Trigger, .Portal, .Positioner, .Popup, .Item, .Separator, plus submenus, radio/checkbox items, groups, and an arrow.",
  examples: [
    {
      title: "Basic",
      code: `import { Menu } from "@vikram-hegde/skeletal";

<Menu.Root>
  <Menu.Trigger>Options</Menu.Trigger>
  <Menu.Portal>
    <Menu.Positioner sideOffset={8} align="start">
      <Menu.Popup>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Separator />
        <Menu.Item danger>
          <Icon name={Trash} size={16} />
          Delete
        </Menu.Item>
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
</Menu.Root>`,
      demo: <BasicMenu />,
    },
    {
      title: "Submenu",
      code: `<Menu.SubmenuRoot>
  <Menu.SubmenuTrigger>More actions</Menu.SubmenuTrigger>
  <Menu.Portal>
    <Menu.Positioner sideOffset={4}>
      <Menu.Popup>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item danger>Log out</Menu.Item>
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
</Menu.SubmenuRoot>`,
      demo: <NestedMenu />,
    },
    {
      title: "Radio group",
      code: `<Menu.RadioGroup value={sort} onValueChange={setSort}>
  <Menu.RadioItem value="date">
    <Menu.RadioItemIndicator>
      <Icon name={Check} size={14} />
    </Menu.RadioItemIndicator>
    Date
  </Menu.RadioItem>
  <Menu.RadioItem value="name">
    <Menu.RadioItemIndicator>
      <Icon name={Check} size={14} />
    </Menu.RadioItemIndicator>
    Name
  </Menu.RadioItem>
</Menu.RadioGroup>`,
      demo: <RadioMenu />,
    },
    {
      title: "Checkbox group",
      code: `<Menu.Group>
  <Menu.GroupLabel>View</Menu.GroupLabel>
  <Menu.CheckboxItem checked={minimap} onCheckedChange={setMinimap}>
    <Menu.CheckboxItemIndicator>
      <Icon name={Check} size={14} />
    </Menu.CheckboxItemIndicator>
    Minimap
  </Menu.CheckboxItem>
  <Menu.CheckboxItem checked={search} onCheckedChange={setSearch}>
    <Menu.CheckboxItemIndicator>
      <Icon name={Check} size={14} />
    </Menu.CheckboxItemIndicator>
    Search
  </Menu.CheckboxItem>
</Menu.Group>`,
      demo: <CheckboxMenu />,
    },
    {
      title: "Filterable",
      code: `<Menu.FilterProvider>
  <Menu.Root>
    <Menu.Trigger>Actions</Menu.Trigger>
    <Menu.Portal>
      <Menu.Positioner sideOffset={8} align="start">
        <Menu.Popup>
          <Menu.Input aria-label="Filter actions" placeholder="Filter actions" />
          <Menu.Clear aria-label="Clear filter">
            <Icon name={X} size={14} />
          </Menu.Clear>
          <Menu.Empty>No actions found.</Menu.Empty>
          <Menu.List>
            <Menu.Item>New file</Menu.Item>
            <Menu.Item>Open file</Menu.Item>
            <Menu.Item>Save</Menu.Item>
          </Menu.List>
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  </Menu.Root>
</Menu.FilterProvider>`,
      demo: <FilterMenu />,
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
      type: "boolean",
      default: "true",
      description: "Modal state when open. Set false for a non-blocking dropdown.",
    },
    {
      name: "onOpenChange",
      type: "(open, details) => void",
      default: "—",
      description: "Called when the menu opens or closes.",
    },
    {
      name: "Trigger",
      type: "ButtonProps",
      default: "variant='outline'",
      description: "Reuses Button; accepts variant, size, fullWidth, openOnHover.",
    },
    {
      name: "Positioner.side / align",
      type: "'top' | 'bottom' | 'left' | 'right' / 'start' | 'center' | 'end'",
      default: "'bottom' / 'center'",
      description: "Popup placement; side flips automatically on collision.",
    },
    {
      name: "Positioner.sideOffset",
      type: "number",
      default: "8",
      description: "Distance between the trigger and the popup.",
    },
    {
      name: "Item.danger",
      type: "boolean",
      default: "false",
      description: "Destructive styling for irreversible actions.",
    },
    {
      name: "FilterProvider.filter",
      type: "(text, query) => boolean | null",
      default: "case- and accent-insensitive contains",
      description: "Matches items against the filter query. Pass null to filter items yourself.",
    },
    {
      name: "FilterProvider.autoHighlight",
      type: "boolean | 'always'",
      default: "false",
      description: "Highlight the first matching item while the query is non-empty ('always' also when empty).",
    },
    {
      name: "Item.closeOnClick",
      type: "boolean",
      default: "true",
      description: "Whether clicking the item closes the menu.",
    },
  ],
};
