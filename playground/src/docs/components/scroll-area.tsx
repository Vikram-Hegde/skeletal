import { Box, Cluster, ScrollArea, Stack } from "@skeletal";
import type { Doc } from "@/docs/types";

function BasicScrollArea() {
  return (
    <Box border="1px solid var(--docs-border)" padding="0" style={{ height: "12rem", width: "22rem", maxWidth: "100%" }}>
      <ScrollArea.Root style={{ height: "100%" }}>
        <ScrollArea.Viewport>
          <ScrollArea.Content style={{ padding: "0.75rem 0.875rem" }}>
            <Stack space="0.875rem">
              <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                Vernacular architecture is building done outside any academic tradition, and without
                professional guidance. It is not a particular architectural movement or style, but rather a
                broad category, encompassing many building types from around the world, both historical and
                extant.
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                This type of architecture usually serves immediate, local needs, is constrained by the
                materials available in its particular region and reflects local traditions and cultural
                practices. The study of vernacular architecture does not examine formally schooled
                architects, but instead the design skills and tradition of local builders.
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                More recently, vernacular architecture has been examined by designers in an effort to be
                more energy conscious — part of a broader interest in sustainable design.
              </p>
            </Stack>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Box>
  );
}

function FadeScrollArea() {
  return (
    <Box border="1px solid var(--docs-border)" padding="0" style={{ height: "12rem", width: "22rem", maxWidth: "100%" }}>
      <ScrollArea.Root style={{ height: "100%" }}>
        <ScrollArea.Viewport fade fadeSize="2rem">
          <ScrollArea.Content style={{ padding: "0.75rem 0.875rem" }}>
            <Stack space="0.875rem">
              <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                Scroll — the content softly fades at the top and bottom where more can be scrolled. The
                fade tracks{" "}
                <code style={{ fontSize: "0.75rem", background: "var(--docs-code-bg)", padding: "0.125rem 0.25rem" }}>
                  --scroll-area-overflow-y-start/end
                </code>{" "}
                automatically, so no shadow overlays or scroll listeners are needed.
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                The mask is a single CSS gradient on the viewport:
                <code
                  style={{
                    display: "block",
                    marginTop: "0.5rem",
                    fontSize: "0.6875rem",
                    background: "var(--docs-code-bg)",
                    padding: "0.5rem",
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.6,
                  }}
                >
                  {`mask-image: linear-gradient(\n  to bottom,\n  transparent 0,\n  black min(2rem, var(--scroll-area-overflow-y-start)),\n  black calc(100% - min(2rem, var(--scroll-area-overflow-y-end, 2rem))),\n  transparent 100%\n)`}
                </code>
              </p>
              <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>
                Before hydration the bottom edge falls back to the fade size so the hint is visible on
                first paint.
              </p>
            </Stack>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Box>
  );
}

function SideNavExample() {
  const items = Array.from({ length: 22 }, (_, i) => `Section ${i + 1}`);
  return (
    <Box
      border="1px solid var(--docs-border)"
      background="var(--docs-bg)"
      padding="0"
      style={{ height: "18rem", width: "14rem", maxWidth: "100%", display: "flex", flexDirection: "column" }}
    >
      <ScrollArea.Root style={{ flex: 1, minHeight: 0 }}>
        <ScrollArea.Viewport fade fadeSize="1.5rem">
          <ScrollArea.Content style={{ padding: "0.75rem" }}>
            <Stack space="1.25rem">
              <Stack space="0.25rem">
                <p
                  style={{
                    margin: 0,
                    padding: "0 0.5rem",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--docs-muted)",
                  }}
                >
                  Docs
                </p>
                <Stack space="0.125rem">
                  {items.slice(0, 8).map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      style={{
                        display: "block",
                        padding: "0.375rem 0.5rem",
                        borderRadius: "var(--sk-radius)",
                        background: item === "Section 1" ? "var(--docs-accent-soft)" : "transparent",
                        color: item === "Section 1" ? "var(--docs-accent)" : "var(--docs-text)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        fontWeight: item === "Section 1" ? 500 : 400,
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </Stack>
              </Stack>
              <Stack space="0.25rem">
                <p
                  style={{
                    margin: 0,
                    padding: "0 0.5rem",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--docs-muted)",
                  }}
                >
                  Layout
                </p>
                <Stack space="0.125rem">
                  {items.slice(8).map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      style={{
                        display: "block",
                        padding: "0.375rem 0.5rem",
                        borderRadius: "var(--sk-radius)",
                        color: "var(--docs-text)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div
        style={{
          padding: "0.75rem 0.75rem",
          borderTop: "1px solid var(--docs-border)",
          fontSize: "0.75rem",
          color: "var(--docs-muted)",
        }}
      >
        <strong style={{ color: "var(--docs-text)" }}>Skeletal</strong> · side nav with fade
      </div>
    </Box>
  );
}

function BothAxesScrollArea() {
  return (
    <Box border="1px solid var(--docs-border)" padding="0" style={{ height: "14rem", width: "22rem", maxWidth: "100%" }}>
      <ScrollArea.Root style={{ height: "100%", width: "100%" }}>
        <ScrollArea.Viewport>
          <ScrollArea.Content style={{ padding: "0.75rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 6rem)", gridTemplateRows: "repeat(8, 4rem)", gap: "0.5rem" }}>
              {Array.from({ length: 80 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    placeItems: "center",
                    background: "var(--docs-hover)",
                    border: "1px solid var(--docs-border)",
                    borderRadius: "var(--sk-radius)",
                    fontSize: "0.75rem",
                    color: "var(--docs-muted)",
                    fontWeight: 600,
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Box>
  );
}

export const scrollAreaDoc: Doc = {
  id: "scroll-area",
  group: "Components",
  name: "Scroll Area",
  blurb:
    "A native scroll container with custom scrollbars and an optional edge fade. Assemble parts as ScrollArea.Root, .Viewport, .Content, .Scrollbar, .Thumb, .Corner — enable fade on .Viewport to softly mask content at scroll edges (ideal for side navs).",
  examples: [
    {
      title: "Basic",
      code: `import { ScrollArea } from "@project-backbone/skeletal";

<ScrollArea.Root style={{ height: 200 }}>
  <ScrollArea.Viewport>
    <ScrollArea.Content>Long content…</ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar>
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
</ScrollArea.Root>`,
      demo: <BasicScrollArea />,
    },
    {
      title: "With edge fade",
      code: `// Soft mask at the top/bottom where more can be scrolled.
// Tracks --scroll-area-overflow-y-start/end automatically.
<ScrollArea.Root style={{ height: 200 }}>
  <ScrollArea.Viewport fade fadeSize="2rem">
    <ScrollArea.Content>Long content…</ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar>
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
</ScrollArea.Root>

// CSS applied on the viewport when fade is enabled:
\`.scroll-area__viewport--fade {
  mask-image: linear-gradient(
    to bottom,
    transparent 0,
    black min(2rem, var(--scroll-area-overflow-y-start)),
    black calc(100% - min(2rem, var(--scroll-area-overflow-y-end, 2rem))),
    transparent 100%
  );
}\``,
      demo: <FadeScrollArea />,
    },
    {
      title: "Side nav fade — as used in docs",
      code: `// This is the exact pattern the docs left nav uses.
// A fixed-height viewport with a 1.5rem fade hints at overflow
// without shadow overlays or scroll listeners.

<Box style={{ height: "18rem", display: "flex", flexDirection: "column" }}>
  <ScrollArea.Root style={{ flex: 1, minHeight: 0 }}>
    <ScrollArea.Viewport fade fadeSize="1.5rem">
      <ScrollArea.Content>
        <DocsNav />
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar>
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
  <footer>Footer pinned below the scroll area</footer>
</Box>`,
      demo: (
        <Cluster align="flex-start">
          <SideNavExample />
        </Cluster>
      ),
    },
    {
      title: "Both axes",
      code: `<ScrollArea.Root style={{ height: 224 }}>
  <ScrollArea.Viewport>
    <ScrollArea.Content>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 6rem)", gap: "0.5rem" }}>
        {/* wide + tall content */}
      </div>
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar>
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Scrollbar orientation="horizontal">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Corner />
</ScrollArea.Root>`,
      demo: <BothAxesScrollArea />,
    },
  ],
  props: [
    {
      name: "Root.overflowEdgeThreshold",
      type: "number | { xStart?, xEnd?, yStart?, yEnd? }",
      default: "0",
      description: "Pixels past the edge before overflow attributes flip. Pass a single number for all edges.",
    },
    {
      name: "Viewport.fade",
      type: "boolean | 'horizontal' | 'vertical' | 'both'",
      default: "false",
      description:
        "Whether to mask content at scroll edges. true (vertical) fades top/bottom; \"horizontal\" fades left/right; \"both\" fades all sides. Tracks --scroll-area-overflow-* automatically.",
    },
    {
      name: "Viewport.fadeSize",
      type: "string",
      default: "'2rem'",
      description: "Size of the fade gradient at each edge. Only applies when fade is set. Any CSS length (e.g. '1.5rem', '24px').",
    },
    {
      name: "Scrollbar.orientation",
      type: "'vertical' | 'horizontal'",
      default: "'vertical'",
      description: "Which axis the scrollbar controls.",
    },
    {
      name: "Scrollbar.keepMounted",
      type: "boolean",
      default: "false",
      description: "Keep the scrollbar in the DOM when the viewport isn't scrollable.",
    },
    {
      name: "Corner",
      type: "HTMLAttributes<HTMLDivElement>",
      default: "—",
      description: "Visible only when both scrollbars are present; prevents track overlap.",
    },
  ],
};
