import { Horse, Sparkle } from "@phosphor-icons/react";
import { Button, Cluster, Icon } from "@elemental";
import type { Doc } from "@/docs/types";

export const iconDoc: Doc = {
  id: "icon",
  group: "Components",
  name: "Icon",
  blurb: "A single-color icon rendered from a Phosphor icon component.",
  examples: [
    {
      title: "Sizes and weights",
      code: `import { Horse, Sparkle } from "@phosphor-icons/react";

<Icon name={Horse} size={20} />
<Icon name={Sparkle} size={32} weight="fill" />
<Icon name={Sparkle} size={24} weight="bold" />`,
      demo: (
        <Cluster>
          <Icon name={Horse} size={20} />
          <Icon name={Sparkle} size={32} weight="fill" />
          <Icon name={Sparkle} size={24} weight="bold" />
        </Cluster>
      ),
    },
    {
      title: "In a button",
      code: `<Button variant="outline"><Icon name={Sparkle} size={16} /> New</Button>`,
      demo: (
        <Button variant="outline">
          <Icon name={Sparkle} size={16} />
          New
        </Button>
      ),
    },
  ],
  props: [
    {
      name: "weight",
      type: "'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'",
      default: "'regular'",
      description: "The icon's stroke weight.",
    },
  ],
};
