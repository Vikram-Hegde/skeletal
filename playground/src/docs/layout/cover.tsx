import { Box, Button, Cluster, Cover } from "@skeletal";
import type { Doc } from "@/docs/types";

export const coverDoc: Doc = {
  id: "cover",
  group: "Layout",
  name: "Cover",
  blurb: "Fills a minimum height and centers one child vertically.",
  examples: [
    {
      title: "Hero",
      code: `<Cover minHeight="16rem">
  <header>Nav</header>
  <main data-cover-center>
    <h1>Headline</h1>
    <p>Supporting copy.</p>
  </main>
  <footer>Footer</footer>
</Cover>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1rem">
          <Cover minHeight="16rem" space="0.75rem">
            <div className="docs-cell" style={{ minHeight: "auto" }}>
              Header
            </div>
            <div data-cover-center>
              <h2 style={{ margin: 0, textAlign: "center", fontSize: "1.25rem" }}>
                Centered headline
              </h2>
              <p
                style={{
                  margin: "0.5rem auto 0",
                  maxWidth: "28ch",
                  textAlign: "center",
                  color: "var(--sk-muted-foreground)",
                  fontSize: "0.875rem",
                }}
              >
                The centered child floats between the pinned header and footer.
              </p>
            </div>
            <div className="docs-cell" style={{ minHeight: "auto" }}>
              Footer
            </div>
          </Cover>
        </Box>
      ),
    },
    {
      title: "Pinned layout",
      code: `<Cover minHeight="16rem">
  <header>Top bar</header>
  <main data-cover-center>Centered content</main>
  <footer>Status bar</footer>
</Cover>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1rem">
          <Cover minHeight="16rem" space="0.75rem">
            <div className="docs-cell" style={{ minHeight: "auto" }}>
              Top bar — pinned to the top
            </div>
            <div data-cover-center>
              <Cluster justify="center">
                <Button size="sm">Primary action</Button>
                <Button variant="ghost" size="sm">
                  Secondary
                </Button>
              </Cluster>
            </div>
            <div className="docs-cell" style={{ minHeight: "auto" }}>
              Status bar — pinned to the bottom
            </div>
          </Cover>
        </Box>
      ),
    },
  ],
  props: [
    {
      name: "data-cover-center",
      type: "attribute",
      default: "—",
      description: "Mark the child to center vertically.",
    },
  ],
};
