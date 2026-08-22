import { Info, TextB, TextItalic, TextUnderline } from "@phosphor-icons/react";
import { Cluster, Icon, Tooltip } from "@elemental";
import type { Doc } from "@/docs/types";

const tip = Tooltip.createHandle();

function BasicTooltip() {
  return (
    <Cluster>
      <Tooltip.Root>
        <Tooltip.Trigger aria-label="Bold">
          <Icon name={TextB} size={16} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={8}>
            <Tooltip.Popup>
              <Tooltip.Arrow />
              Bold
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger aria-label="Italic">
          <Icon name={TextItalic} size={16} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={8}>
            <Tooltip.Popup>
              <Tooltip.Arrow />
              Italic
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger aria-label="Underline">
          <Icon name={TextUnderline} size={16} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={8}>
            <Tooltip.Popup>
              <Tooltip.Arrow />
              Underline
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Cluster>
  );
}

function PlacementTooltip() {
  const sides = ["top", "right", "bottom", "left"] as const;
  return (
    <Cluster>
      {sides.map((side) => (
        <Tooltip.Root key={side}>
          <Tooltip.Trigger variant="outline" aria-label={`Tooltip on ${side}`}>
            {side}
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner side={side} sideOffset={8}>
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Placed {side}
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      ))}
    </Cluster>
  );
}

function DetachedTooltip() {
  return (
    <Tooltip.Provider>
      <Tooltip.Trigger handle={tip} aria-label="Help">
        <Icon name={Info} size={16} />
      </Tooltip.Trigger>
      <Tooltip.Root handle={tip}>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={8}>
            <Tooltip.Popup>
              <Tooltip.Arrow />
              Detached trigger tooltip
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export const tooltipDoc: Doc = {
  id: "tooltip",
  group: "Components",
  name: "Tooltip",
  blurb:
    "A small popup that appears on hover or focus, labeling icon-only controls. Assemble parts as Tooltip.Provider, .Root, .Trigger, .Portal, .Positioner, .Popup, .Arrow, plus .createHandle for detached triggers.",
  examples: [
    {
      title: "Basic",
      code: `import { Tooltip } from "@vikram-hegde/elemental";

<Tooltip.Root>
  <Tooltip.Trigger aria-label="Bold">
    <Icon name={TextB} size={16} />
  </Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Positioner sideOffset={8}>
      <Tooltip.Popup>
        <Tooltip.Arrow />
        Bold
      </Tooltip.Popup>
    </Tooltip.Positioner>
  </Tooltip.Portal>
</Tooltip.Root>`,
      demo: <BasicTooltip />,
    },
    {
      title: "Placement",
      code: `<Tooltip.Root>
  <Tooltip.Trigger>Save</Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Positioner side="right" sideOffset={8}>
      <Tooltip.Popup>
        <Tooltip.Arrow />
        Saves your changes
      </Tooltip.Popup>
    </Tooltip.Positioner>
  </Tooltip.Portal>
</Tooltip.Root>`,
      demo: <PlacementTooltip />,
    },
    {
      title: "Detached trigger",
      code: `const tip = Tooltip.createHandle();

<Tooltip.Trigger handle={tip} aria-label="Help">
  <Icon name={Info} size={16} />
</Tooltip.Trigger>

<Tooltip.Root handle={tip}>
  <Tooltip.Portal>
    <Tooltip.Positioner sideOffset={8}>
      <Tooltip.Popup>
        <Tooltip.Arrow />
        Trigger can live anywhere
      </Tooltip.Popup>
    </Tooltip.Positioner>
  </Tooltip.Portal>
</Tooltip.Root>`,
      demo: <DetachedTooltip />,
    },
  ],
  props: [
    {
      name: "Provider",
      type: "{ delay?, closeDelay?, timeout? }",
      default: "timeout=300",
      description: "Shares delay between tooltips so adjacent ones open instantly.",
    },
    {
      name: "open / defaultOpen",
      type: "boolean",
      default: "false",
      description: "Controlled / uncontrolled open state.",
    },
    {
      name: "Root.trackCursorAxis",
      type: "'none' | 'x' | 'y' | 'both'",
      default: "'none'",
      description: "Makes the popup follow the cursor along an axis.",
    },
    {
      name: "Root.disableHoverablePopup",
      type: "boolean",
      default: "false",
      description: "Closes the tooltip when the pointer moves onto the popup.",
    },
    {
      name: "Trigger",
      type: "ButtonProps",
      default: "variant='ghost', size='sm'",
      description: "Reuses Button; accepts variant, size, fullWidth, handle, payload, delay.",
    },
    {
      name: "Positioner.side",
      type: "'top' | 'right' | 'bottom' | 'left'",
      default: "'top'",
      description: "Placement; flips automatically to avoid collisions.",
    },
    {
      name: "Positioner.sideOffset",
      type: "number",
      default: "8",
      description: "Distance between the trigger and the popup.",
    },
    {
      name: "createHandle",
      type: "() => TooltipHandle",
      default: "—",
      description: "Links a Root with triggers rendered outside of it.",
    },
  ],
};
