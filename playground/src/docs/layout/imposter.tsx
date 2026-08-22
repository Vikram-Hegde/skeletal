import { Box, Imposter } from "@skeletal";
import type { Doc } from "@/docs/types";

export const imposterDoc: Doc = {
  id: "imposter",
  group: "Layout",
  name: "Imposter",
  blurb: "Centers content over its nearest positioned ancestor.",
  examples: [
    {
      title: "Centered overlay",
      code: `<div style={{ position: "relative", height: "12rem" }}>
  <Imposter>
    <Box border="1px solid var(--sk-border)" padding="1rem">
      Overlay content
    </Box>
  </Imposter>
</div>`,
      demo: (
        <div
          style={{
            position: "relative",
            height: "12rem",
            border: "1px dashed var(--sk-border)",
            borderRadius: "var(--sk-radius)",
          }}
        >
          <Imposter>
            <Box border="1px solid var(--sk-border)" padding="1rem">
              <p style={{ margin: 0, fontSize: "0.875rem" }}>Centered over the container.</p>
            </Box>
          </Imposter>
        </div>
      ),
    },
    {
      title: "Breakout",
      code: `<div style={{ position: "relative", height: "10rem" }}>
  <Imposter breakout="2rem">
    <div>Wider than its container</div>
  </Imposter>
</div>`,
      demo: (
        <div
          style={{
            position: "relative",
            height: "10rem",
            border: "1px dashed var(--sk-border)",
            borderRadius: "var(--sk-radius)",
          }}
        >
          <Imposter breakout="2rem">
            <Box border="1px solid var(--sk-border)" padding="1rem">
              <p style={{ margin: 0, fontSize: "0.875rem" }}>
                Breakout extends the overlay beyond the container's edges.
              </p>
            </Box>
          </Imposter>
        </div>
      ),
    },
  ],
};
