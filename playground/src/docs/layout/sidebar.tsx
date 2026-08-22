import { Box, Sidebar } from "@elemental";
import { avatar } from "@/docs/helpers";
import type { Doc } from "@/docs/types";

export const sidebarDoc: Doc = {
  id: "sidebar",
  group: "Layout",
  name: "Sidebar",
  blurb: "A fixed-width element beside fluid content, stacking when narrow.",
  examples: [
    {
      title: "Media object",
      code: `<Sidebar sideWidth="3rem" space="1rem">
  <img className="avatar" src="..." alt="" />
  <div>
    <strong>Name</strong>
    <p>Description text.</p>
  </div>
</Sidebar>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1rem">
          <Sidebar sideWidth="3rem" space="1rem">
            {avatar("VH")}
            <div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: "0.875rem" }}>Vikram Hegde</p>
              <p
                style={{
                  margin: "0.25rem 0 0",
                  color: "var(--sk-muted-foreground)",
                  fontSize: "0.875rem",
                }}
              >
                Content takes the remaining space; the avatar keeps its width.
              </p>
            </div>
          </Sidebar>
        </Box>
      ),
    },
    {
      title: "Form row",
      code: `<Sidebar sideWidth="6rem" space="1rem">
  <label>Email</label>
  <input placeholder="you@example.com" />
</Sidebar>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1rem">
          <Sidebar sideWidth="6rem" space="1rem">
            <label style={{ alignSelf: "center", fontSize: "0.875rem" }} htmlFor="sidebar-email">
              Email
            </label>
            <input
              id="sidebar-email"
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "0.5rem 0.75rem",
                border: "1px solid var(--sk-input)",
                borderRadius: "var(--sk-radius)",
                background: "transparent",
                color: "var(--sk-foreground)",
                fontFamily: "inherit",
                fontSize: "0.875rem",
              }}
            />
          </Sidebar>
        </Box>
      ),
    },
    {
      title: "Side on the right",
      code: `<Sidebar sideWidth="12rem" side="right" space="1rem">
  <div>
    <strong>Main content</strong>
    <p>Wraps beneath when narrow.</p>
  </div>
  <aside>Sidebar</aside>
</Sidebar>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1rem">
          <Sidebar sideWidth="12rem" side="right" space="1rem">
            <div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: "0.875rem" }}>Main content</p>
              <p
                style={{
                  margin: "0.25rem 0 0",
                  color: "var(--sk-muted-foreground)",
                  fontSize: "0.875rem",
                }}
              >
                The sidebar sits on the right and wraps beneath when the row gets narrow.
              </p>
            </div>
            <div className="docs-cell" style={{ minHeight: "auto" }}>
              Sidebar (right)
            </div>
          </Sidebar>
        </Box>
      ),
    },
    {
      title: "Wrap threshold",
      code: `<Sidebar sideWidth="8rem" contentMin="70%">
  <img src="..." alt="" />
  <p>Content keeps at least 70% width before wrapping.</p>
</Sidebar>`,
      demo: (
        <Box border="1px solid var(--sk-border)" padding="1rem">
          <Sidebar sideWidth="8rem" contentMin="70%" space="1rem">
            <div className="docs-media">Media</div>
            <p
              style={{
                margin: 0,
                alignSelf: "center",
                color: "var(--sk-muted-foreground)",
                fontSize: "0.875rem",
              }}
            >
              <code>contentMin="70%"</code> holds the text at 70% width until the container is too
              narrow, then both wrap.
            </p>
          </Sidebar>
        </Box>
      ),
    },
  ],
};
