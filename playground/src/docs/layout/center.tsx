import { Box, Button, Center, Cluster, Stack } from "@elemental";
import type { Doc } from "@/docs/types";

export const centerDoc: Doc = {
  id: "center",
  group: "Layout",
  name: "Center",
  blurb: "Constrains content to a readable measure and centers it.",
  examples: [
    {
      title: "Readable measure",
      code: `<Center max="48ch">
  <p>Prose that never exceeds a comfortable line length.</p>
</Center>`,
      demo: (
        <Box border="1px solid var(--sk-border)">
          <Center max="48ch">
            <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
              A bounded measure keeps reading comfortable. Long prose stays inside the column and
              short lines never stretch edge to edge — the reading rhythm is yours to tune with{" "}
              <code>max</code>.
            </p>
          </Center>
        </Box>
      ),
    },
    {
      title: "Intrinsic centering",
      code: `<Center max="40rem" intrinsic>
  <div className="card">Narrow card stays centered, not stretched</div>
</Center>`,
      demo: (
        <Box border="1px solid var(--sk-border)">
          <Center max="40rem" intrinsic>
            <Box border="1px solid var(--sk-border)" padding="1rem">
              <p style={{ margin: 0, fontSize: "0.875rem" }}>
                Intrinsic content keeps its natural width and stays centered.
              </p>
            </Box>
          </Center>
        </Box>
      ),
    },
    {
      title: "Centered action",
      code: `<Center max="30rem" centerText>
  <h2>You're all caught up</h2>
  <p>Nothing new to review.</p>
  <Button>Go to inbox</Button>
</Center>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="2rem">
          <Center max="30rem" centerText>
            <Stack>
              <strong style={{ fontSize: "1rem" }}>You're all caught up</strong>
              <p style={{ margin: 0, color: "var(--sk-muted-foreground)", fontSize: "0.875rem" }}>
                Nothing new to review.
              </p>
              <Cluster justify="center">
                <Button size="sm">Go to inbox</Button>
              </Cluster>
            </Stack>
          </Center>
        </Box>
      ),
    },
  ],
};
