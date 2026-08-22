import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button, CommandPalette, Icon } from "@elemental";
import { useState } from "react";
import type { Doc } from "@/docs/types";

const COMMANDS = [
  { id: "new-file", label: "New file", group: "File" },
  { id: "save", label: "Save all", group: "File" },
  { id: "copy", label: "Copy", group: "Edit" },
  { id: "paste", label: "Paste", group: "Edit" },
  { id: "toggle-theme", label: "Toggle theme", group: "View" },
];

function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open palette</Button>
      <CommandPalette.Root open={open} onOpenChange={setOpen} items={COMMANDS}>
        <CommandPalette.Portal>
          <CommandPalette.Backdrop />
          <CommandPalette.Viewport>
            <CommandPalette.Content>
              <CommandPalette.InputGroup>
                <Icon name={MagnifyingGlass} size={16} />
                <CommandPalette.Input placeholder="Type a command…" />
              </CommandPalette.InputGroup>
              <CommandPalette.List>
                {(command: { id: string; label: string; group: string }) => (
                  <CommandPalette.Item
                    key={command.id}
                    value={command.label}
                    hint={command.group}
                    onClick={() => setOpen(false)}
                  >
                    {command.label}
                  </CommandPalette.Item>
                )}
              </CommandPalette.List>
              <CommandPalette.Empty>No commands found.</CommandPalette.Empty>
              <CommandPalette.Footer>
                <kbd>↑↓</kbd> navigate · <kbd>↵</kbd> select · <kbd>esc</kbd> close
              </CommandPalette.Footer>
            </CommandPalette.Content>
          </CommandPalette.Viewport>
        </CommandPalette.Portal>
      </CommandPalette.Root>
    </>
  );
}

export const commandPaletteDoc: Doc = {
  id: "command-palette",
  group: "Components",
  name: "CommandPalette",
  blurb:
    "A keyboard-first search palette (Cmd/Ctrl+K). Composes a modal Dialog with a query-filtered Autocomplete: type to filter, arrow keys to navigate, Enter to run.",
  examples: [
    {
      title: "Basic",
      code: `import { CommandPalette } from "@vikram-hegde/elemental";
import { MagnifyingGlass } from "@phosphor-icons/react";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open palette</Button>

<CommandPalette.Root open={open} onOpenChange={setOpen} items={commands}>
  <CommandPalette.Portal>
    <CommandPalette.Backdrop />
    <CommandPalette.Viewport>
      <CommandPalette.Content>
        <CommandPalette.InputGroup>
          <Icon name={MagnifyingGlass} size={16} />
          <CommandPalette.Input placeholder="Type a command…" />
        </CommandPalette.InputGroup>
        <CommandPalette.List>
          {(command) => (
            <CommandPalette.Item
              key={command.id}
              value={command.id}
              hint={command.group}
              onClick={() => run(command)}
            >
              {command.label}
            </CommandPalette.Item>
          )}
        </CommandPalette.List>
        <CommandPalette.Empty>No commands found.</CommandPalette.Empty>
        <CommandPalette.Footer>
          <kbd>↑↓</kbd> navigate · <kbd>↵</kbd> select · <kbd>esc</kbd> close
        </CommandPalette.Footer>
      </CommandPalette.Content>
    </CommandPalette.Viewport>
  </CommandPalette.Portal>
</CommandPalette.Root>`,
      demo: <CommandPaletteDemo />,
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
      name: "mode",
      type: `'list' | 'both' | 'inline' | 'none'`,
      default: "'list'",
      description: "How the input filters items and auto-completes inline.",
    },
    {
      name: "autoHighlight",
      type: "boolean | 'always'",
      default: "'always'",
      description: "Always highlight the first matching command.",
    },
    {
      name: "Item.value",
      type: "ItemValue",
      default: "—",
      description: "The item's filter/selection value.",
    },
    {
      name: "Item.hint",
      type: "ReactNode",
      default: "—",
      description: "Muted right-aligned shortcut or group label.",
    },
    {
      name: "Footer",
      type: "HTMLAttributes<HTMLDivElement>",
      default: "—",
      description:
        "A hint bar with a muted background and top border for keyboard shortcuts and other instructions. Place it as the last child of Content.",
    },
  ],
};
