import { ArrowRight, PaperPlaneTilt, Plus, Sparkle } from "@phosphor-icons/react";
import { Button, Cluster, Icon } from "@skeletal";
import type { Doc } from "@/docs/types";

export const buttonDoc: Doc = {
  id: "button",
  group: "Components",
  name: "Button",
  blurb: "A styled button that triggers an action. Renders a button element.",
  examples: [
    {
      title: "Variants",
      code: `import { Button } from "@vikram-hegde/skeletal";

<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`,
      demo: (
        <Cluster>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </Cluster>
      ),
    },
    {
      title: "Sizes",
      code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      demo: (
        <Cluster>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Cluster>
      ),
    },
    {
      title: "With icon",
      code: `import { Plus } from "@phosphor-icons/react";

<Button><Icon name={Plus} size={16} /> Create</Button>`,
      demo: (
        <Cluster>
          <Button>
            <Icon name={Plus} size={16} />
            Create
          </Button>
          <Button variant="outline">
            <Icon name={Sparkle} size={16} />
            New
          </Button>
        </Cluster>
      ),
    },
    {
      title: "Loading",
      code: `<Button loading>Save</Button>
<Button loading variant="outline"><Icon name={PaperPlaneTilt} size={16} /> Publish</Button>
<Button loading variant="secondary"><Icon name={Plus} size={16} /> Save<Icon name={ArrowRight} size={16} /></Button>`,
      demo: (
        <Cluster>
          <Button loading>Save</Button>
          <Button loading variant="outline">
            <Icon name={PaperPlaneTilt} size={16} />
            Publish
          </Button>
          <Button loading variant="secondary">
            <Icon name={Plus} size={16} />
            Save
            <Icon name={ArrowRight} size={16} />
          </Button>
        </Cluster>
      ),
    },
    {
      title: "Disabled",
      code: `<Button disabled>Disabled</Button>`,
      demo: (
        <Cluster>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </Cluster>
      ),
    },
  ],
  props: [
    { name: "disabled", type: "boolean", default: "false", description: "Disable interaction." },
    {
      name: "loading",
      type: "boolean",
      default: "false",
      description:
        "Disable the button (keeping focus), set aria-busy, dim it slightly, and sweep a progress bar along the bottom edge while pending. Label and icons stay visible.",
    },
    {
      name: "render",
      type: "ReactElement | function",
      default: "—",
      description: "Replace the rendered element (Base UI).",
    },
  ],
};
