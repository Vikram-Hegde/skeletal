import { Cluster, Spinner, Stack } from "@skeletal";
import type { Doc } from "@/docs/types";

export const spinnerDoc: Doc = {
  id: "spinner",
  group: "Components",
  name: "Spinner",
  blurb: "A rotating arc indicator for pending states.",
  examples: [
    {
      title: "Sizes",
      code: `<Spinner />
<Spinner size="1.5rem" />
<Spinner size="2rem" />`,
      demo: (
        <Cluster>
          <Spinner />
          <Spinner size="1.5rem" />
          <Spinner size="2rem" />
        </Cluster>
      ),
    },
    {
      title: "With label",
      code: `<Spinner label="Loading…" />`,
      demo: (
        <Stack space="0.75rem">
          <Spinner label="Loading…" size="1.5rem" />
        </Stack>
      ),
    },
    {
      title: "Standalone pending state",
      code: `<Cluster align="center">
  <Spinner size="1.125em" />
  <span>Connecting…</span>
</Cluster>`,
      demo: (
        <Cluster>
          <Spinner size="1.125em" />
          <span style={{ fontSize: "0.875rem" }}>Connecting…</span>
        </Cluster>
      ),
    },
  ],
};
