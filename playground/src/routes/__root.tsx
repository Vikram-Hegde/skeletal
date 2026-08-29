import { House, List, MagnifyingGlass, Moon, Sun, X } from "@phosphor-icons/react";
import { Badge, Button, CommandPalette, Drawer, Icon, ScrollArea, Sidebar, Stack } from "@skeletal";
import { createRootRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { DOC_GROUPS, DOCS } from "@/docs";
import { ComponentNotFound } from "@/docs/not-found";
import { fuzzyMatch } from "@/lib/fuzzy";
import { ThemerDrawer } from "@/themer/ThemerDrawer";
import { useTheme } from "@/theme";
import pkg from "../../../package.json";

const THEME_ICONS = { light: Sun, dark: Moon } as const;

interface Command {
  id: string;
  label: string;
  group: string;
  action?: () => void;
}

interface CommandGroup {
  value: string;
  items: Command[];
}

const GITHUB_URL = "https://github.com/someGoodBits/project-backbone";
const NPM_URL = "https://www.npmjs.com/package/@project-backbone/skeletal";

export const Route = createRootRoute({
  notFoundComponent: ComponentNotFound,
  component: RootComponent,
});

function BrandMark() {
  return (
    <span className="docs-brand__mark" aria-hidden="true">
      <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M231.67,60.89a35.82,35.82,0,0,0-23.82-12.74,36,36,0,1,0-66.37,22.92.25.25,0,0,1,0,.08L71.17,141.51s0,0-.1,0a36,36,0,1,0-22.92,66.37,36,36,0,1,0,66.37-22.92.54.54,0,0,1,0-.08l70.35-70.36s0,0,.1,0a36,36,0,0,0,46.74-53.63ZM219.1,97.16a20,20,0,0,1-25.67,3.8,16,16,0,0,0-19.88,2.19l-70.4,70.4A16,16,0,0,0,101,193.43a20,20,0,1,1-36.75,7.5,8,8,0,0,0-7.91-9.24,8.5,8.5,0,0,0-1.23.1A20,20,0,1,1,62.57,155a16,16,0,0,0,19.88-2.19l70.4-70.4A16,16,0,0,0,155,62.57a20,20,0,1,1,36.75-7.5,8,8,0,0,0,9.14,9.14,20,20,0,0,1,18.17,33Z" />
      </svg>
    </span>
  );
}

function DocsNav({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  return (
    <Stack space="1.75rem" className={className}>
      <Stack space="0.125rem">
        <Link
          to="/"
          className="docs-nav-link docs-nav-link--home"
          activeOptions={{ exact: true }}
          activeProps={{ "data-active": "true" }}
          onClick={onNavigate}
        >
          <Icon name={House} size={14} />
          Home
        </Link>
      </Stack>
      {DOC_GROUPS.map((group) => (
        <Stack space="0.5rem" key={group.label}>
          <p className="docs-nav-title">{group.label}</p>
          <Stack space="0.125rem">
            {group.docs.map((item) => (
              <Link
                key={item.id}
                className="docs-nav-link"
                to="/docs/$docId"
                params={{ docId: item.id }}
                activeOptions={{ exact: true }}
                activeProps={{ "data-active": "true" }}
                onClick={onNavigate}
              >
                {item.name}
              </Link>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

function RootComponent() {
  const { effectiveTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteQuery("");
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const commands = useMemo<CommandGroup[]>(
    () => [
      {
        value: "Actions",
        items: [
          {
            id: "toggle-theme",
            label: `Switch to ${effectiveTheme === "dark" ? "light" : "dark"} theme`,
            group: "Actions",
            action: () => {
              setPaletteOpen(false);
              toggleTheme();
            },
          },
        ],
      },
      {
        value: "Navigate",
        items: [
          { id: "home", label: "Home", group: "Navigate" },
          ...DOCS.map((doc) => ({
            id: doc.id,
            label: doc.name,
            group: "Navigate",
          })),
        ],
      },
    ],
    [effectiveTheme, toggleTheme],
  );

  const filterCommand = useMemo(
    () => (command: Command | CommandGroup, query: string) => {
      if ("items" in command) return false;
      return fuzzyMatch(query, command.label, command.id, command.group);
    },
    [],
  );

  const runCommand = (command: Command) => {
    if (command.action) {
      command.action();
      return;
    }
    setPaletteOpen(false);
    if (command.id === "home") {
      navigate({ to: "/" });
    } else {
      navigate({ to: "/docs/$docId", params: { docId: command.id } });
    }
  };

  return (
    <div>
      <header className="docs-header">
        <div className="docs-header__start">
          <Button
            variant="ghost"
            size="sm"
            className="docs-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Icon name={List} size={16} />
          </Button>
          <Link to="/" className="docs-brand">
            <BrandMark />
            <span className="docs-brand__label">Skeletal</span>
          </Link>
          <a className="docs-skip" href="#docs-main">
            Skip to content
          </a>
        </div>
        <button
          type="button"
          className="docs-search"
          onClick={() => {
            setPaletteQuery("");
            setPaletteOpen(true);
          }}
        >
          <Icon name={MagnifyingGlass} size={15} />
          <span>Search components…</span>
          <kbd>⌘K</kbd>
        </button>
        <div className="docs-header__actions">
          <ThemerDrawer />
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label={`Switch to ${effectiveTheme === "dark" ? "light" : "dark"} theme (currently ${effectiveTheme})`}
          >
            <Icon name={THEME_ICONS[effectiveTheme]} size={15} />
          </Button>
        </div>
      </header>

      <Sidebar className="docs-body" sideWidth="15.5rem" contentMin="0" space="0">
        <Stack as="nav" className="docs-sidebar" space="0" aria-label="Components">
          <ScrollArea.Root className="docs-sidebar__scroll">
            <ScrollArea.Viewport fade fadeSize="1.5rem">
              <ScrollArea.Content>
                <DocsNav className="docs-sidebar__nav" />
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar>
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
          <footer className="docs-sidebar__footer">
            <p className="docs-sidebar__pkg">
              <strong>Skeletal</strong>
              <Badge variant="outline">v{pkg.version}</Badge>
            </p>
            <p className="docs-sidebar__pkg-name">@project-backbone/skeletal</p>
            <p className="docs-sidebar__links">
              <a className="docs-sidebar__link" href={GITHUB_URL} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a className="docs-sidebar__link" href={NPM_URL} target="_blank" rel="noreferrer">
                npm
              </a>
            </p>
          </footer>
        </Stack>

        <Outlet />
      </Sidebar>

      <Drawer.Root side="left" open={menuOpen} onOpenChange={setMenuOpen}>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Viewport>
            <Drawer.Popup size="sm">
              <Drawer.Header>
                <Drawer.Title className="docs-menu__title">
                  <BrandMark />
                  <span className="docs-brand__label">Skeletal</span>
                </Drawer.Title>
                <Drawer.Close size="sm" variant="ghost" aria-label="Close navigation menu">
                  <Icon name={X} size={16} />
                </Drawer.Close>
              </Drawer.Header>
              <Drawer.Content className="docs-menu__content">
                <DocsNav className="docs-menu__nav" onNavigate={() => setMenuOpen(false)} />
              </Drawer.Content>
              <Drawer.Footer className="docs-menu__footer">
                <a
                  className="docs-sidebar__link"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <span aria-hidden="true">·</span>
                <a className="docs-sidebar__link" href={NPM_URL} target="_blank" rel="noreferrer">
                  npm
                </a>
              </Drawer.Footer>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>

      <CommandPalette.Root
        open={paletteOpen}
        onOpenChange={(open) => {
          setPaletteOpen(open);
          if (open) setPaletteQuery("");
        }}
        items={commands}
        value={paletteQuery}
        onValueChange={setPaletteQuery}
        filter={filterCommand}
      >
        <CommandPalette.Portal>
          <CommandPalette.Backdrop />
          <CommandPalette.Viewport>
            <CommandPalette.Content>
              <CommandPalette.InputGroup>
                <Icon name={MagnifyingGlass} size={16} />
                <CommandPalette.Input placeholder="Search components…" />
              </CommandPalette.InputGroup>
              <CommandPalette.List>
                {(group: CommandGroup) => (
                  <CommandPalette.Group key={group.value} items={group.items}>
                    <CommandPalette.GroupLabel>{group.value}</CommandPalette.GroupLabel>
                    {group.items.map((command) => (
                      <CommandPalette.Item
                        key={command.id}
                        value={command.label}
                        onClick={() => runCommand(command)}
                      >
                        {command.label}
                      </CommandPalette.Item>
                    ))}
                  </CommandPalette.Group>
                )}
              </CommandPalette.List>
              <CommandPalette.Empty>No components found.</CommandPalette.Empty>
              <CommandPalette.Footer>
                <kbd>↑↓</kbd> navigate · <kbd>↵</kbd> open · <kbd>esc</kbd> close
              </CommandPalette.Footer>
            </CommandPalette.Content>
          </CommandPalette.Viewport>
        </CommandPalette.Portal>
      </CommandPalette.Root>
    </div>
  );
}
