import { Box, Button, Cluster, Stack } from "@skeletal";
import type { Doc } from "@/docs/types";

export const stackDoc: Doc = {
  id: "stack",
  group: "Layout",
  name: "Stack",
  blurb: "Vertical rhythm: stacks direct children with consistent spacing.",
  examples: [
    {
      title: "Vertical rhythm",
      code: `<Stack space="1rem">
  <h2>Card header</h2>
  <p>Body copy that sits on its own rhythm.</p>
  <footer>Footer row</footer>
</Stack>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1.25rem">
          <Stack space="1rem">
            <h3 style={{ margin: 0, fontSize: "1rem" }}>Card header</h3>
            <p style={{ margin: 0, color: "var(--sk-muted-foreground)", fontSize: "0.875rem" }}>
              Body copy that sits on its own rhythm.
            </p>
            <div style={{ color: "var(--sk-muted-foreground)", fontSize: "0.75rem" }}>Footer row</div>
          </Stack>
        </Box>
      ),
    },
    {
      title: "Pinned footer actions",
      code: `<Stack space="0.75rem" splitAfter={2}>
  <p>Danger zone settings</p>
  <p>These actions can't be undone.</p>
  <Cluster justify="flex-end">
    <Button variant="ghost">Cancel</Button>
    <Button variant="destructive">Delete</Button>
  </Cluster>
</Stack>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1.25rem" style={{ minHeight: "12rem" }}>
          <Stack space="0.75rem" splitAfter={2}>
            <h3 style={{ margin: 0, fontSize: "1rem" }}>Danger zone settings</h3>
            <p style={{ margin: 0, color: "var(--sk-muted-foreground)", fontSize: "0.875rem" }}>
              These actions can't be undone.
            </p>
            <Cluster justify="flex-end">
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </Cluster>
          </Stack>
        </Box>
      ),
    },
    {
      title: "Nested groups",
      code: `<Stack space="1rem" recursive>
  <section>
    <Stack space="0.5rem">
      <p>Nested group</p>
      <p>Grouped content</p>
    </Stack>
  </section>
  <p>Top-level item</p>
</Stack>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1.25rem">
          <Stack space="1rem" recursive>
            <div
              style={{
                padding: "0.75rem",
                background: "var(--sk-muted)",
                borderRadius: "var(--sk-radius)",
              }}
            >
              <Stack space="0.5rem">
                <p style={{ margin: 0, fontSize: "0.875rem" }}>Nested group</p>
                <p style={{ margin: 0, color: "var(--sk-muted-foreground)", fontSize: "0.875rem" }}>
                  Spacing applies at every level.
                </p>
              </Stack>
            </div>
            <p style={{ margin: 0, fontSize: "0.875rem" }}>Top-level item</p>
          </Stack>
        </Box>
      ),
    },
  ],
};
