import { ArrowRight, Clock, FileText, Folder, Hash, Palette, UserCircle } from "@phosphor-icons/react";
import { Badge, Box, Cluster, Icon, ScrollArea, Stack } from "@skeletal";
import type { Doc } from "@/docs/types";

function BasicScrollArea() {
  const threads = [
    { name: "Ava Park", initials: "AP", time: "2m", subject: "Re: tokens — card vs panel", snippet: "Kept card as elevation, panel as chrome. Hover now tints via --docs-hover." },
    { name: "Jon Silva", initials: "JS", time: "18m", subject: "Sidebar fade", snippet: "Switched to ScrollArea fade — no scroll listeners, just mask on overflow vars." },
    { name: "Mira Chen", initials: "MC", time: "1h", subject: "Popover detent", snippet: "Added Drawer detent at 56dvh with drag handle. Feels more sheet-like." },
    { name: "Samir Patel", initials: "SP", time: "3h", subject: "Icon weight tokens", snippet: "Aligned Phosphor weight 16/14 to button size sm/md. Crisp at 12px." },
    { name: "Lena Wu", initials: "LW", time: "5h", subject: "Release 0.2.0", snippet: "Shipped skeletal improv + ScrollArea docs. Next: empty states." },
    { name: "Alex Kim", initials: "AK", time: "Yesterday", subject: "Homepage preview cqw", snippet: "Cards now size via container query units. Tiles scale with grid." },
  ];
  return (
    <Box border="1px solid var(--docs-border)" padding="0" style={{ height: "16rem", width: "28rem", maxWidth: "100%", overflow: "hidden", background: "var(--docs-panel)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.625rem 0.875rem", borderBottom: "1px solid var(--docs-border)", background: "var(--docs-panel)" }}>
        <Cluster space="0.5rem">
          <span style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "-0.01em" }}>Inbox</span>
          <Badge>6</Badge>
        </Cluster>
        <span style={{ fontSize: "0.6875rem", color: "var(--docs-muted)" }}>Custom scrollbar</span>
      </div>
      <ScrollArea.Root style={{ height: "calc(100% - 2.4rem)" }}>
        <ScrollArea.Viewport>
          <ScrollArea.Content>
            <Stack space="0">
              {threads.map((t) => (
                <div
                  key={t.name}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    padding: "0.75rem 0.875rem",
                    borderBottom: "1px solid color-mix(in oklab, var(--docs-border) 60%, transparent)",
                  }}
                >
                  <div
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "999px",
                      background: "var(--docs-accent-soft)",
                      border: "1px solid var(--docs-border)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      color: "var(--docs-accent)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                      <span style={{ fontSize: "0.8125rem", fontWeight: 600, whiteSpace: "nowrap" }}>{t.name}</span>
                      <span style={{ marginLeft: "auto", fontSize: "0.6875rem", color: "var(--docs-muted)", whiteSpace: "nowrap" }}>{t.time}</span>
                    </div>
                    <div style={{ fontSize: "0.8125rem", fontWeight: 500, lineHeight: 1.4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.subject}</div>
                    <div style={{ fontSize: "0.75rem", lineHeight: 1.5, color: "var(--docs-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.snippet}</div>
                  </div>
                </div>
              ))}
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
    <Box border="1px solid var(--docs-border)" padding="0" style={{ height: "16rem", width: "28rem", maxWidth: "100%", overflow: "hidden", background: "var(--docs-panel)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 0.875rem", borderBottom: "1px solid var(--docs-border)" }}>
        <Icon name={FileText} size={14} color="var(--docs-muted)" />
        <span style={{ fontSize: "0.8125rem", fontWeight: 600 }}>Release notes</span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.6875rem", color: "var(--docs-muted)" }}>
          <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: 999, background: "var(--docs-accent)" }} />
          auto fade
        </span>
      </div>
      <ScrollArea.Root style={{ height: "calc(100% - 2.4rem)" }}>
        <ScrollArea.Viewport fade fadeSize="2rem">
          <ScrollArea.Content style={{ padding: "0.875rem" }}>
            <Stack space="1rem">
              {[
                {
                  version: "0.2.0 — 23 Aug 2026",
                  notes: [
                    "ScrollArea fade now uses a single mask-image driven by --scroll-area-overflow-y-start/end.",
                    "Before hydration the bottom edge falls back to 2rem so the hint is visible on first paint.",
                    "Dark theme scales the fade 25% longer where luminance perception is lower.",
                  ],
                },
                {
                  version: "0.1.4 — 14 Aug 2026",
                  notes: [
                    "Added Drawer detent + drag handle, aligned Thumb hover to --sk-scrollbar-thumb-hover.",
                    "Docs side nav now composes ScrollArea.Root → Viewport(fade) → Content.",
                  ],
                },
                {
                  version: "0.1.2 — 07 Aug 2026",
                  notes: ["Introduced skeletal tokens with light-dark() and cascade layers.", "Homepage tiles use container query units (cqw) for fluid scaling."],
                },
              ].map((release) => (
                <div key={release.version} style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 650, letterSpacing: "-0.01em" }}>{release.version}</span>
                    <span style={{ flex: 1, height: 1, background: "var(--docs-border)" }} />
                  </div>
                  <ul style={{ margin: 0, paddingLeft: "1.125rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {release.notes.map((n) => (
                      <li key={n} style={{ fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--docs-text)" }}>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div
                style={{
                  marginTop: "0.25rem",
                  padding: "0.625rem 0.75rem",
                  borderRadius: "var(--sk-radius)",
                  background: "var(--docs-code-bg)",
                  border: "1px solid var(--docs-border)",
                  fontFamily: "JetBrains Mono Variable, monospace",
                  fontSize: "0.6875rem",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  color: "var(--docs-code-text)",
                }}
              >
                {`/* fade tracks overflow automatically */\n.mask {\n  mask-image: linear-gradient(\n    to bottom,\n    transparent 0,\n    black min(2rem, var(--scroll-area-overflow-y-start)),\n    black calc(100% - min(2rem, var(--scroll-area-overflow-y-end, 2rem))),\n    transparent 100%\n  );\n}`}
              </div>
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
  const sections = [
    { label: "Docs", icon: FileText, items: ["Introduction", "Theming", "Tokens", "Changelog", "Migration"] },
    { label: "Components", icon: Palette, items: ["Button", "Dialog", "Drawer", "Scroll Area", "Command Palette", "Select", "Tooltip", "Checkbox"] },
    { label: "Layout", icon: Folder, items: ["Stack", "Cluster", "Grid", "Sidebar", "Switcher", "Cover", "Frame"] },
  ];
  return (
    <Box
      border="1px solid var(--docs-border)"
      background="var(--docs-bg)"
      padding="0"
      style={{ height: "20rem", width: "15rem", maxWidth: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 0.75rem 0.625rem", borderBottom: "1px solid var(--docs-border)", background: "var(--docs-panel)" }}>
        <div style={{ width: "1.625rem", height: "1.625rem", borderRadius: "var(--sk-radius)", background: "var(--docs-accent-soft)", border: "1px solid color-mix(in oklab, var(--docs-accent) 18%, transparent)", display: "grid", placeItems: "center", color: "var(--docs-accent)" }}>
          <Icon name={Hash} size={12} />
        </div>
        <span style={{ fontSize: "0.8125rem", fontWeight: 650, letterSpacing: "-0.015em" }}>skeletal</span>
        <span style={{ marginLeft: "auto", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--docs-muted)", border: "1px solid var(--docs-border)", padding: "0.125rem 0.375rem", borderRadius: 999 }}>Docs</span>
      </div>
      <ScrollArea.Root style={{ flex: 1, minHeight: 0 }}>
        <ScrollArea.Viewport fade fadeSize="1.5rem">
          <ScrollArea.Content style={{ padding: "0.625rem 0.625rem 1rem" }}>
            <Stack space="1.125rem">
              {sections.map((section) => (
                <Stack space="0.35rem" key={section.label}>
                  <Cluster space="0.375rem" style={{ padding: "0 0.375rem", color: "var(--docs-muted)" }}>
                    <Icon name={section.icon} size={12} />
                    <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>{section.label}</span>
                  </Cluster>
                  <Stack space="0.125rem">
                    {section.items.map((item) => {
                      const active = item === "Scroll Area";
                      return (
                        <a
                          key={item}
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.375rem 0.5rem",
                            borderRadius: "var(--sk-radius)",
                            background: active ? "var(--docs-accent-soft)" : "transparent",
                            color: active ? "var(--docs-accent)" : "var(--docs-text)",
                            fontSize: "0.8125rem",
                            textDecoration: "none",
                            fontWeight: active ? 550 : 400,
                          }}
                        >
                          <span style={{ width: "0.25rem", height: "0.25rem", borderRadius: 999, background: active ? "var(--docs-accent)" : "transparent", flexShrink: 0 }} />
                          {item}
                        </a>
                      );
                    })}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar>
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 0.75rem", borderTop: "1px solid var(--docs-border)", fontSize: "0.6875rem", color: "var(--docs-muted)", background: "var(--docs-panel)" }}>
        <Icon name={Clock} size={12} />
        <span>
          <strong style={{ color: "var(--docs-text)", fontWeight: 600 }}>Fade</strong> hints overflow without shadows
        </span>
      </div>
    </Box>
  );
}

function BothAxesScrollArea() {
  const cols = [
    { key: "token", label: "Token", width: "9rem" },
    { key: "light", label: "Light", width: "8rem" },
    { key: "dark", label: "Dark", width: "8rem" },
    { key: "use", label: "Use", width: "12rem" },
    { key: "preview", label: "Preview", width: "7rem" },
  ] as const;
  const rows = [
    { token: "--sk-background", light: "oklch(1 0 0)", dark: "oklch(0.145 0 0)", use: "Page chrome", preview: "bg" },
    { token: "--sk-card", light: "oklch(1 0 0)", dark: "oklch(0.205 0 0)", use: "Cards / panels", preview: "card" },
    { token: "--sk-primary", light: "oklch(0.145 0 0)", dark: "oklch(0.985 0 0)", use: "Brand / ink", preview: "ink" },
    { token: "--sk-muted", light: "oklch(0.97 0 0)", dark: "oklch(0.269 0 0)", use: "Muted surfaces", preview: "muted" },
    { token: "--sk-border", light: "oklch(0.922 0 0)", dark: "oklch(1 0 0 /10%)", use: "Hairlines", preview: "line" },
    { token: "--sk-ring", light: "oklch(0.708 0 0)", dark: "oklch(0.556 0 0)", use: "Focus ring", preview: "ring" },
    { token: "--sk-destructive", light: "oklch(0.577…)", dark: "oklch(0.704…)", use: "Alerts", preview: "bad" },
    { token: "--sk-radius", light: "0", dark: "0", use: "Corner radius", preview: "0" },
  ];
  return (
    <Box border="1px solid var(--docs-border)" padding="0" style={{ height: "16rem", width: "32rem", maxWidth: "100%", overflow: "hidden", background: "var(--docs-panel)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 0.75rem", borderBottom: "1px solid var(--docs-border)", background: "color-mix(in oklab, var(--docs-panel) 96%, var(--docs-bg))" }}>
        <Cluster space="0.5rem">
          <Icon name={Palette} size={14} color="var(--docs-muted)" />
          <span style={{ fontSize: "0.8125rem", fontWeight: 600 }}>Tokens</span>
          <span style={{ fontSize: "0.6875rem", color: "var(--docs-muted)" }}>— horizontal + vertical</span>
        </Cluster>
        <Cluster space="0.375rem" style={{ fontSize: "0.6875rem", color: "var(--docs-muted)" }}>
          <Icon name={UserCircle} size={12} />
          <span>Drag or shift+wheel</span>
        </Cluster>
      </div>
      <ScrollArea.Root style={{ height: "calc(100% - 2.2rem)", width: "100%" }}>
        <ScrollArea.Viewport>
          <ScrollArea.Content style={{ minWidth: "max-content" }}>
            <div style={{ display: "flex", flexDirection: "column", minWidth: "max-content" }}>
              <div style={{ display: "flex", position: "sticky", top: 0, zIndex: 1, background: "var(--docs-panel)", borderBottom: "1px solid var(--docs-border)" }}>
                {cols.map((c) => (
                  <div key={c.key} style={{ width: c.width, padding: "0.5rem 0.75rem", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--docs-muted)", flexShrink: 0 }}>
                    {c.label}
                  </div>
                ))}
              </div>
              {rows.map((r) => (
                <div key={r.token} style={{ display: "flex", borderBottom: "1px solid color-mix(in oklab, var(--docs-border) 70%, transparent)" }}>
                  <div style={{ width: cols[0].width, padding: "0.625rem 0.75rem", fontFamily: "JetBrains Mono Variable, monospace", fontSize: "0.75rem", flexShrink: 0 }}>{r.token}</div>
                  <div style={{ width: cols[1].width, padding: "0.625rem 0.75rem", fontFamily: "JetBrains Mono Variable, monospace", fontSize: "0.7rem", color: "var(--docs-muted)", flexShrink: 0 }}>{r.light}</div>
                  <div style={{ width: cols[2].width, padding: "0.625rem 0.75rem", fontFamily: "JetBrains Mono Variable, monospace", fontSize: "0.7rem", color: "var(--docs-muted)", flexShrink: 0 }}>{r.dark}</div>
                  <div style={{ width: cols[3].width, padding: "0.625rem 0.75rem", fontSize: "0.8125rem", flexShrink: 0 }}>{r.use}</div>
                  <div style={{ width: cols[4].width, padding: "0.5rem 0.75rem", flexShrink: 0, display: "grid", placeItems: "center" }}>
                    <span
                      style={{
                        width: "2.25rem",
                        height: "1.25rem",
                        borderRadius: r.preview === "0" ? 0 : "var(--sk-radius)",
                        background:
                          r.preview === "bg"
                            ? "var(--sk-background)"
                            : r.preview === "card"
                              ? "var(--sk-card)"
                              : r.preview === "ink"
                                ? "var(--sk-primary)"
                                : r.preview === "muted"
                                  ? "var(--sk-muted)"
                                  : r.preview === "line"
                                    ? "transparent"
                                    : r.preview === "ring"
                                      ? "transparent"
                                      : "var(--sk-destructive)",
                        border: "1px solid var(--docs-border)",
                        boxShadow: r.preview === "ring" ? "0 0 0 2px var(--sk-ring)" : "none",
                      }}
                    />
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 0.75rem", fontSize: "0.75rem", color: "var(--docs-muted)" }}>
                <Icon name={ArrowRight} size={12} />
                Scroll horizontally to see token previews
                <Icon name={ArrowRight} size={12} />
              </div>
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
      title: "Basic — inbox list",
      code: `import { ScrollArea } from "@vikram-hegde/skeletal";

<ScrollArea.Root style={{ height: 256 }}>
  <ScrollArea.Viewport>
    <ScrollArea.Content>
      {threads.map(t => <Row key={t.id} {...t} />)}
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar><ScrollArea.Thumb /></ScrollArea.Scrollbar>
</ScrollArea.Root>`,
      demo: <BasicScrollArea />,
    },
    {
      title: "With edge fade — release notes",
      code: `// Soft mask at the top/bottom where more can be scrolled.
// Tracks --scroll-area-overflow-y-start/end automatically.
<ScrollArea.Root style={{ height: 256 }}>
  <ScrollArea.Viewport fade fadeSize="2rem">
    <ScrollArea.Content>Long document…</ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar><ScrollArea.Thumb /></ScrollArea.Scrollbar>
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

<Box style={{ height: "20rem", display: "flex", flexDirection: "column" }}>
  <ScrollArea.Root style={{ flex: 1, minHeight: 0 }}>
    <ScrollArea.Viewport fade fadeSize="1.5rem">
      <ScrollArea.Content>
        <DocsNav />
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar><ScrollArea.Thumb /></ScrollArea.Scrollbar>
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
      title: "Both axes — token table",
      code: `<ScrollArea.Root style={{ height: 256 }}>
  <ScrollArea.Viewport>
    <ScrollArea.Content>
      <div style={{ minWidth: "max-content" }}>
        {/* wide + tall table */}
      </div>
    </ScrollArea.Content>
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar><ScrollArea.Thumb /></ScrollArea.Scrollbar>
  <ScrollArea.Scrollbar orientation="horizontal"><ScrollArea.Thumb /></ScrollArea.Scrollbar>
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
