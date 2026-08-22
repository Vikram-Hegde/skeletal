import { Box, Container, Stack } from "@skeletal";
import type { Doc } from "@/docs/types";

export const containerDoc: Doc = {
  id: "container",
  group: "Layout",
  name: "Container",
  blurb: "Constrains content to a maximum width and centers it.",
  examples: [
    {
      title: "Bounded content",
      code: `<Container max="30rem">
  <Box border="1px solid var(--sk-border)">Bounded content</Box>
</Container>`,
      demo: (
        <Container max="30rem">
          <Box border="1px solid var(--sk-border)">
            <p style={{ margin: 0, fontSize: "0.875rem" }}>
              Content stops at the container's max width and stays centered.
            </p>
          </Box>
        </Container>
      ),
    },
    {
      title: "Narrow measure",
      code: `<Container max="42ch">
  <p>Prose that never exceeds a comfortable line length.</p>
</Container>`,
      demo: (
        <Container max="42ch">
          <Stack space="0.75rem">
            <strong style={{ fontSize: "0.875rem" }}>Readable column</strong>
            <p
              style={{
                margin: 0,
                color: "var(--sk-muted-foreground)",
                fontSize: "0.875rem",
                lineHeight: 1.6,
              }}
            >
              A container tuned with <code>max="42ch"</code> keeps short-form prose readable while
              staying centered within the page.
            </p>
          </Stack>
        </Container>
      ),
    },
  ],
};
