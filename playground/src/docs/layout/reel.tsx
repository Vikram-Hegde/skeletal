import { Reel } from "@elemental";
import { DemoCard } from "@/docs/helpers";
import type { Doc } from "@/docs/types";

export const reelDoc: Doc = {
  id: "reel",
  group: "Layout",
  name: "Reel",
  blurb: "A horizontal scrolling strip with scroll-snap alignment.",
  examples: [
    {
      title: "Card strip",
      code: `<Reel space="1rem">
  <article className="card">…</article>
  <article className="card">…</article>
  …
</Reel>`,
      demo: (
        <Reel space="1rem">
          <div style={{ width: "14rem" }}>
            <DemoCard title="Inspect" text="Debug runs and traces." footer="⌘I" />
          </div>
          <div style={{ width: "14rem" }}>
            <DemoCard title="Commands" text="Search and run actions." footer="⌘K" />
          </div>
          <div style={{ width: "14rem" }}>
            <DemoCard title="Settings" text="Tune your workspace." footer="⌘," />
          </div>
          <div style={{ width: "14rem" }}>
            <DemoCard title="Deploy" text="Ship the current branch." footer="⌘⇧D" />
          </div>
          <div style={{ width: "14rem" }}>
            <DemoCard title="Logs" text="Stream runtime events." footer="Live" />
          </div>
          <div style={{ width: "14rem" }}>
            <DemoCard title="Usage" text="Requests and compute." footer="42%" />
          </div>
        </Reel>
      ),
    },
    {
      title: "Hidden scrollbar",
      code: `<Reel noBar space="1rem">
  <div>Item</div>
  <div>Item</div>
</Reel>`,
      demo: (
        <Reel noBar space="1rem">
          <div style={{ width: "14rem" }}>
            <DemoCard title="One" text="Scrolls without a visible bar." />
          </div>
          <div style={{ width: "14rem" }}>
            <DemoCard title="Two" text="Drag or shift-scroll to move." />
          </div>
          <div style={{ width: "14rem" }}>
            <DemoCard title="Three" text="Snap alignment still applies." />
          </div>
          <div style={{ width: "14rem" }}>
            <DemoCard title="Four" text="The strip never wraps." />
          </div>
        </Reel>
      ),
    },
  ],
};
