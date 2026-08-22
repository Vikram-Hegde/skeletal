import { Badge, Cluster } from "@skeletal";
import type { Doc } from "@/docs/types";

export const badgeDoc: Doc = {
  id: "badge",
  group: "Components",
  name: "Badge",
  blurb: "A small pill that labels, categorizes, or marks status.",
  examples: [
    {
      title: "Variants",
      code: `<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,
      demo: (
        <Cluster>
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </Cluster>
      ),
    },
    {
      title: "With status dot",
      code: `<Badge dot>Online</Badge>
<Badge dot variant="destructive">Failed</Badge>
<Badge dot variant="outline">Queued</Badge>`,
      demo: (
        <Cluster>
          <Badge dot>Online</Badge>
          <Badge dot variant="destructive">
            Failed
          </Badge>
          <Badge dot variant="outline">
            Queued
          </Badge>
        </Cluster>
      ),
    },
    {
      title: "Filter chips",
      code: `<Badge variant="outline">All</Badge>
<Badge variant="primary">Active</Badge>
<Badge variant="outline">Archived</Badge>`,
      demo: (
        <Cluster>
          <Badge variant="outline">All</Badge>
          <Badge variant="primary">Active</Badge>
          <Badge variant="outline">Archived</Badge>
        </Cluster>
      ),
    },
  ],
  props: [
    {
      name: "variant",
      type: "'primary' | 'secondary' | 'outline' | 'destructive'",
      default: "'secondary'",
      description: [
        "Which variant to reach for:",
        "• secondary — tags, labels, and metadata chips that shouldn't compete with content (default).",
        "• primary — a single highlight, e.g. the active filter in a set; use sparingly.",
        "• outline — when many badges sit together (filter rows), where filled chips would be loud.",
        "• destructive — irreversible or error states (blocked, failed, removed).",
      ].join("\n"),
    },
  ],
};
