import { Box, Button, Cluster } from "@skeletal";
import type { Doc } from "@/docs/types";

const TAGS = [
  "React",
  "TypeScript",
  "CSS Modules",
  "Base UI",
  "Bun",
  "Hono",
  "Turbo",
  "Lightning CSS",
];

export const clusterDoc: Doc = {
  id: "cluster",
  group: "Layout",
  name: "Cluster",
  blurb: "A wrapping horizontal row — for button groups and toolbars.",
  examples: [
    {
      title: "Button group",
      code: `<Cluster space="0.5rem">
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="ghost">Discard</Button>
</Cluster>`,
      demo: (
        <Cluster space="0.5rem">
          <Button size="sm">Save</Button>
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button variant="ghost" size="sm">
            Discard
          </Button>
        </Cluster>
      ),
    },
    {
      title: "Justify between",
      code: `<Cluster justify="space-between">
  <span>Settings</span>
  <Button size="sm">Export</Button>
</Cluster>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="0.75rem">
          <Cluster justify="space-between">
            <strong style={{ fontSize: "0.875rem" }}>Settings</strong>
            <Cluster space="0.5rem">
              <Button variant="ghost" size="sm">
                Reset
              </Button>
              <Button size="sm">Export</Button>
            </Cluster>
          </Cluster>
        </Box>
      ),
    },
    {
      title: "Wrapping tags",
      code: `<Cluster space="0.375rem">
  <span className="tag">React</span>
  <span className="tag">TypeScript</span>
  …
</Cluster>`,
      demo: (
        <Cluster space="0.375rem">
          {TAGS.map((label) => (
            <span className="docs-tag" key={label}>
              {label}
            </span>
          ))}
        </Cluster>
      ),
    },
  ],
};
