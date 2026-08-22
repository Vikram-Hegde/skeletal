import { Switcher } from "@skeletal";
import { DemoCard } from "@/docs/helpers";
import type { Doc } from "@/docs/types";

export const switcherDoc: Doc = {
  id: "switcher",
  group: "Layout",
  name: "Switcher",
  blurb:
    "Switches directly between a horizontal row and a vertical column at a container-based threshold.",
  examples: [
    {
      title: "Equal cards",
      code: `<Switcher threshold="30rem" space="1rem">
  <article>Card</article>
  <article>Card</article>
  <article>Card</article>
</Switcher>`,
      demo: (
        <Switcher threshold="30rem" space="1rem">
          <DemoCard title="Inspect" text="Debug runs and traces." footer="⌘I" />
          <DemoCard title="Commands" text="Search and run actions." footer="⌘K" />
          <DemoCard title="Settings" text="Tune your workspace." footer="⌘," />
        </Switcher>
      ),
    },
    {
      title: "Limit",
      code: `<Switcher threshold="30rem" limit={3}>
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
</Switcher>`,
      demo: (
        <Switcher threshold="30rem" limit={3} space="1rem">
          <DemoCard title="One" text="First step." />
          <DemoCard title="Two" text="Second step." />
          <DemoCard title="Three" text="Third step." />
          <DemoCard title="Four" text="Fourth step." />
          <DemoCard title="Five" text="Fifth step." />
        </Switcher>
      ),
    },
  ],
};
