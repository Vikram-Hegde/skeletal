import { Box, Button, Stack } from "@elemental";
import type { Doc } from "@/docs/types";

export const boxDoc: Doc = {
  id: "box",
  group: "Layout",
  name: "Box",
  blurb: "A padded container for surfaces like cards and panels.",
  examples: [
    {
      title: "Card surface",
      code: `<Box border="1px solid var(--sk-border)" padding="1.25rem">
  <Stack space="0.75rem">
    <strong>Usage</strong>
    <p>Card content with consistent padding.</p>
  </Stack>
</Box>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1.25rem">
          <Stack space="0.75rem">
            <strong style={{ fontSize: "0.875rem" }}>Usage</strong>
            <p style={{ margin: 0, color: "var(--sk-muted-foreground)", fontSize: "0.875rem" }}>
              Card content with consistent padding.
            </p>
          </Stack>
        </Box>
      ),
    },
    {
      title: "Inverted emphasis",
      code: `<Box invert>
  <p>Emphasis band — foreground background.</p>
</Box>`,
      demo: (
        <Stack space="1rem">
          <Box invert>
            <p style={{ margin: 0, fontSize: "0.875rem" }}>
              Emphasis band — foreground background.
            </p>
          </Box>
          <Box border="1px solid var(--sk-border)">
            <p style={{ margin: 0, color: "var(--sk-muted-foreground)", fontSize: "0.875rem" }}>
              Regular surface.
            </p>
          </Box>
        </Stack>
      ),
    },
    {
      title: "Tuned padding",
      code: `<Box border="1px solid var(--sk-border)" padding="2rem">
  <p>Roomy padding for a featured panel.</p>
</Box>`,
      demo: (
        <Stack space="1rem">
          <Box border="1px solid var(--sk-border)" padding="0.75rem">
            <p style={{ margin: 0, color: "var(--sk-muted-foreground)", fontSize: "0.875rem" }}>
              Compact — padding="0.75rem"
            </p>
          </Box>
          <Box border="1px solid var(--sk-border)" padding="2rem">
            <p style={{ margin: 0, fontSize: "0.875rem" }}>Roomy — padding="2rem"</p>
          </Box>
          <Box
            border="1px solid var(--sk-border)"
            background="var(--sk-accent)"
            color="var(--sk-accent-foreground)"
            padding="1.25rem"
          >
            <Button size="sm">Accent surface with a button</Button>
          </Box>
        </Stack>
      ),
    },
  ],
};
