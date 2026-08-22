import { Cluster, Drawer } from "@skeletal";
import type { Doc } from "@/docs/types";

const FILTER_ROWS = Array.from(
  { length: 20 },
  (_, i) => `Filter row ${i + 1} — scrollable middle while the header and footer stay pinned.`,
);

export const drawerDoc: Doc = {
  id: "drawer",
  group: "Components",
  name: "Drawer",
  blurb:
    "A panel that slides in from the edge of the screen with swipe-to-dismiss. Assemble parts as Drawer.Root, .Trigger, .Portal, .Backdrop, .Viewport, .Popup, .Content, .Title, .Description, .Close.",
  examples: [
    {
      title: "Right",
      code: `import { Drawer } from "@vikram-hegde/skeletal";

<Drawer.Root side="right">
  <Drawer.Trigger>View cart</Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Backdrop />
    <Drawer.Viewport>
      <Drawer.Popup>
        <Drawer.Content>
          <Drawer.Title>Your cart</Drawer.Title>
          <Drawer.Description>2 items · $48.00</Drawer.Description>
          <Drawer.Close>Close</Drawer.Close>
        </Drawer.Content>
      </Drawer.Popup>
    </Drawer.Viewport>
  </Drawer.Portal>
</Drawer.Root>`,
      demo: (
        <Drawer.Root side="right">
          <Drawer.Trigger>View cart</Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Backdrop />
            <Drawer.Viewport>
              <Drawer.Popup>
                <Drawer.Content>
                  <Drawer.Title>Your cart</Drawer.Title>
                  <Drawer.Description>2 items · $48.00</Drawer.Description>
                  <Drawer.Close>Close</Drawer.Close>
                </Drawer.Content>
              </Drawer.Popup>
            </Drawer.Viewport>
          </Drawer.Portal>
        </Drawer.Root>
      ),
    },
    {
      title: "Sides & sizes",
      code: `<Drawer.Root side="left"><Drawer.Popup size="sm">…</Drawer.Popup></Drawer.Root>
<Drawer.Root side="right"><Drawer.Popup size="md">…</Drawer.Popup></Drawer.Root>
<Drawer.Root side="bottom"><Drawer.Popup size="lg">…</Drawer.Popup></Drawer.Root>
<Drawer.Root side="top"><Drawer.Popup>…</Drawer.Popup></Drawer.Root>`,
      demo: (
        <Cluster>
          <Drawer.Root side="left">
            <Drawer.Trigger variant="outline" size="sm">
              left
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Backdrop />
              <Drawer.Viewport>
                <Drawer.Popup size="sm">
                  <Drawer.Content>
                    <Drawer.Title>Left</Drawer.Title>
                    <Drawer.Description>20rem wide.</Drawer.Description>
                    <Drawer.Close>Close</Drawer.Close>
                  </Drawer.Content>
                </Drawer.Popup>
              </Drawer.Viewport>
            </Drawer.Portal>
          </Drawer.Root>
          <Drawer.Root side="right">
            <Drawer.Trigger variant="outline" size="sm">
              right
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Backdrop />
              <Drawer.Viewport>
                <Drawer.Popup>
                  <Drawer.Content>
                    <Drawer.Title>Right</Drawer.Title>
                    <Drawer.Description>24rem wide.</Drawer.Description>
                    <Drawer.Close>Close</Drawer.Close>
                  </Drawer.Content>
                </Drawer.Popup>
              </Drawer.Viewport>
            </Drawer.Portal>
          </Drawer.Root>
          <Drawer.Root side="bottom">
            <Drawer.Trigger variant="outline" size="sm">
              bottom
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Backdrop />
              <Drawer.Viewport>
                <Drawer.Popup size="lg">
                  <Drawer.Content>
                    <Drawer.Title>Bottom sheet</Drawer.Title>
                    <Drawer.Description>Full width, capped at 32rem tall.</Drawer.Description>
                    <Drawer.Close>Close</Drawer.Close>
                  </Drawer.Content>
                </Drawer.Popup>
              </Drawer.Viewport>
            </Drawer.Portal>
          </Drawer.Root>
          <Drawer.Root side="top">
            <Drawer.Trigger variant="outline" size="sm">
              top
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Backdrop />
              <Drawer.Viewport>
                <Drawer.Popup>
                  <Drawer.Content>
                    <Drawer.Title>Top sheet</Drawer.Title>
                    <Drawer.Description>Full width, capped at 24rem tall.</Drawer.Description>
                    <Drawer.Close>Close</Drawer.Close>
                  </Drawer.Content>
                </Drawer.Popup>
              </Drawer.Viewport>
            </Drawer.Portal>
          </Drawer.Root>
        </Cluster>
      ),
    },
    {
      title: "Sticky header & footer",
      code: `import { Drawer } from "@vikram-hegde/skeletal";

<Drawer.Root side="right">
  <Drawer.Trigger>Filters</Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Backdrop />
    <Drawer.Viewport>
      <Drawer.Popup>
        <Drawer.Header>
          <Drawer.Title>Filters</Drawer.Title>
          <Drawer.Close size="sm" variant="ghost">✕</Drawer.Close>
        </Drawer.Header>
        <Drawer.Content>
          <p>…filter controls…</p>
        </Drawer.Content>
        <Drawer.Footer>
          <Drawer.Close>Reset</Drawer.Close>
          <Drawer.Close variant="primary">Apply</Drawer.Close>
        </Drawer.Footer>
      </Drawer.Popup>
    </Drawer.Viewport>
  </Drawer.Portal>
</Drawer.Root>`,
      demo: (
        <Drawer.Root side="right">
          <Drawer.Trigger>Filters</Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Backdrop />
            <Drawer.Viewport>
              <Drawer.Popup size="lg">
                <Drawer.Header>
                  <Drawer.Title>Filters</Drawer.Title>
                  <Drawer.Close size="sm" variant="ghost">
                    ✕
                  </Drawer.Close>
                </Drawer.Header>
                <Drawer.Content>
                  {FILTER_ROWS.map((row) => (
                    <p key={row}>{row}</p>
                  ))}
                </Drawer.Content>
                <Drawer.Footer>
                  <Drawer.Close>Reset</Drawer.Close>
                  <Drawer.Close variant="primary">Apply</Drawer.Close>
                </Drawer.Footer>
              </Drawer.Popup>
            </Drawer.Viewport>
          </Drawer.Portal>
        </Drawer.Root>
      ),
    },
  ],
  props: [
    {
      name: "side",
      type: `'left' | 'right' | 'top' | 'bottom'`,
      default: "'right'",
      description: "Edge of the screen the drawer slides out from. Maps to the swipe gesture.",
    },
    {
      name: "open / defaultOpen",
      type: "boolean",
      default: "false",
      description: "Controlled / uncontrolled open state.",
    },
    {
      name: "modal",
      type: "boolean | 'trap-focus'",
      default: "true",
      description: "Modal behavior and focus handling.",
    },
    {
      name: "onOpenChange",
      type: "(open, details) => void",
      default: "—",
      description: "Called when the drawer opens or closes.",
    },
    {
      name: "Popup.size",
      type: `'sm' | 'md' | 'lg'`,
      default: "'md'",
      description: "Extent along the slide axis: panel width for sides, max-height for sheets.",
    },
    {
      name: "Popup.initialFocus / finalFocus",
      type: "boolean | RefObject | function",
      default: "—",
      description: "Focus control on open/close.",
    },
    {
      name: "Header / Footer",
      type: "HTMLAttributes<HTMLDivElement>",
      default: "—",
      description:
        "Sticky bars pinned to the popup's top/bottom edges while Content scrolls. Header sits on the popup surface (with a bottom border); Footer is a muted bar with a top border, like Dialog.Footer.",
    },
    {
      name: "SwipeArea",
      type: "BaseUIComponentProps<'div'>",
      default: "—",
      description:
        "An invisible strip at the drawer's edge that opens it on swipe. Include it when a closed drawer should be discoverable by gesture.",
    },
  ],
};
