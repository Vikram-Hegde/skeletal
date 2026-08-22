import { Frame, Grid } from "@skeletal";
import type { Doc } from "@/docs/types";

export const frameDoc: Doc = {
  id: "frame",
  group: "Layout",
  name: "Frame",
  blurb: "Constrains content to a fixed aspect ratio; media fills and crops.",
  examples: [
    {
      title: "Ratio grid",
      code: `<Grid min="10rem" gap="1rem">
  <Frame ratio="16 / 9">…</Frame>
  <Frame ratio="4 / 3">…</Frame>
  <Frame ratio="1 / 1">…</Frame>
</Grid>`,
      demo: (
        <Grid min="10rem" gap="1rem">
          <Frame ratio="16 / 9">
            <div className="docs-media" style={{ width: "100%", height: "100%" }}>
              16:9
            </div>
          </Frame>
          <Frame ratio="4 / 3">
            <div className="docs-media" style={{ width: "100%", height: "100%" }}>
              4:3
            </div>
          </Frame>
          <Frame ratio="1 / 1">
            <div className="docs-media" style={{ width: "100%", height: "100%" }}>
              1:1
            </div>
          </Frame>
        </Grid>
      ),
    },
    {
      title: "Media cropping",
      code: `<Frame ratio="16 / 9">
  <img src="wide.jpg" alt="" />
</Frame>`,
      demo: (
        <Frame ratio="16 / 9" style={{ maxWidth: "24rem" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              background: "var(--sk-accent)",
              color: "var(--sk-accent-foreground)",
              fontSize: "0.875rem",
            }}
          >
            Content fills the frame and crops to keep the ratio.
          </div>
        </Frame>
      ),
    },
    {
      title: "Avatar",
      code: `<Frame ratio="1 / 1">
  <img className="avatar" src="..." alt="" />
</Frame>`,
      demo: (
        <Frame ratio="1 / 1" style={{ maxWidth: "6rem", borderRadius: "999px" }}>
          <div className="docs-media" style={{ width: "100%", height: "100%" }}>
            VH
          </div>
        </Frame>
      ),
    },
  ],
};
