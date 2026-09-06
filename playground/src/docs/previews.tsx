import {
  CaretUpDown,
  Horse,
  MagnifyingGlass,
  Sparkle,
  TextB,
  Warning,
} from "@phosphor-icons/react";
import { Button, Checkbox, Cluster, Icon, Radio, Switch } from "@skeletal";
import type { CSSProperties, ReactNode } from "react";

/**
 * Compact homepage previews, one per component doc. These are static visual
 * mocks (the card preview is `inert`), so they're hand-drawn tiles rather than
 * the full interactive examples — layout primitives get a small bar mock, and
 * popups get a miniature stand-in (a mini dialog, a mini palette, ...).
 *
 * Every preview lives inside `.home-card__preview`, which is a CSS size
 * container (`container-name: pv`). All inline dimensions are container query
 * units (`cqw`), so the tiles scale fluidly with the card's width.
 *
 * Falls back to `examples[0].demo` when a doc has no entry here.
 */

const ICON: Record<"sm" | "md" | "lg" | "xl", CSSProperties> = {
  sm: { width: "4.375cqw", height: "4.375cqw" },
  md: { width: "5cqw", height: "5cqw" },
  lg: { width: "6.875cqw", height: "6.875cqw" },
  xl: { width: "9.375cqw", height: "9.375cqw" },
};

export const PREVIEWS: Record<string, ReactNode> = {
  button: (
    <div className="pv-row" style={{ justifyContent: "center" }}>
      <Button size="sm">Primary</Button>
      <Button size="sm" variant="secondary">
        Secondary
      </Button>
      <Button size="sm" variant="outline">
        Outline
      </Button>
    </div>
  ),

  icon: (
    <div className="pv-row" style={{ justifyContent: "center", color: "var(--docs-text)" }}>
      <Icon name={Horse} size={22} style={ICON.lg} />
      <Icon name={Sparkle} size={30} weight="fill" style={ICON.xl} />
      <Icon name={Sparkle} size={22} weight="bold" style={ICON.lg} />
    </div>
  ),

  dialog: (
    <div className="pv-surface" style={{ width: "75cqw" }}>
      <div className="pv-card__body">
        <div className="pv-line pv-line--title" style={{ width: "45%" }} />
        <div className="pv-line" style={{ width: "85%" }} />
        <div className="pv-line" style={{ width: "70%" }} />
      </div>
      <div className="pv-card__footer">
        <Button size="sm" variant="secondary">
          Cancel
        </Button>
        <Button size="sm">Confirm</Button>
      </div>
    </div>
  ),

  "alert-dialog": (
    <div className="pv-surface" style={{ width: "75cqw" }}>
      <div className="pv-card__body">
        <div className="pv-row" style={{ gap: "2.5cqw" }}>
          <Icon name={Warning} size={16} weight="fill" color="var(--sk-destructive)" style={ICON.sm} />
          <div className="pv-line pv-line--title" style={{ width: "50%" }} />
        </div>
        <div className="pv-line" style={{ width: "80%" }} />
      </div>
      <div className="pv-card__footer">
        <Button size="sm" variant="secondary">
          Cancel
        </Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  ),

  drawer: (
    <div
      className="pv-surface"
      style={{ width: "72cqw", height: "42cqw", position: "relative", padding: 0 }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "light-dark(rgba(0,0,0,0.4), rgba(255,255,255,0.35))",
          opacity: 0.45,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "64%",
          display: "flex",
          flexDirection: "column",
          gap: "2.5cqw",
          padding: "3.75cqw",
          background: "var(--sk-background)",
          borderLeft: "1px solid var(--docs-border)",
          boxShadow: "var(--sk-shadow-md)",
        }}
      >
        <div className="pv-row" style={{ justifyContent: "space-between" }}>
          <div className="pv-line pv-line--title" style={{ width: "42%" }} />
          <div className="pv-dot" style={{ background: "var(--docs-border)" }} />
        </div>
        <div className="pv-line" style={{ width: "92%" }} />
        <div className="pv-line" style={{ width: "76%" }} />
        <div style={{ marginTop: "auto", display: "flex", gap: "2cqw" }}>
          <div className="pv-chip" style={{ width: "20cqw" }} />
          <div className="pv-chip" style={{ width: "20cqw", background: "var(--docs-accent-soft)" }} />
        </div>
      </div>
    </div>
  ),

  "command-palette": (
    <div className="pv-surface" style={{ width: "80cqw" }}>
      <div className="pv-search">
        <Icon name={MagnifyingGlass} size={15} color="var(--docs-muted)" style={ICON.md} />
        <div className="pv-line" style={{ width: "70%" }} />
      </div>
      <div className="pv-card__body" style={{ paddingTop: "2.5cqw" }}>
        {["New file", "Save all", "Toggle theme"].map((label, index) => (
          <div
            key={label}
            className="pv-row"
            style={{
              justifyContent: "space-between",
              padding: "1.875cqw 2.5cqw",
              borderRadius: "1.875cqw",
              background: index === 0 ? "var(--docs-accent-soft)" : "transparent",
            }}
          >
            <span
              style={{
                fontSize: "3.75cqw",
                color: index === 0 ? "var(--docs-accent)" : "var(--docs-text)",
              }}
            >
              {label}
            </span>
            <span style={{ fontSize: "3.125cqw", color: "var(--docs-muted)" }}>
              {["⌘N", "⌘S", "⌘K"][index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),

  menu: (
    <div className="pv-row" style={{ alignItems: "flex-start", justifyContent: "center" }}>
      <Button size="sm" variant="outline">
        Options
      </Button>
      <div className="pv-surface" style={{ width: "42.5cqw", padding: "1.875cqw" }}>
        <div
          className="pv-menu-item"
          style={{ background: "var(--docs-accent-soft)", color: "var(--docs-accent)" }}
        >
          Edit
        </div>
        <div className="pv-menu-item">Duplicate</div>
        <div className="pv-menu-item" style={{ color: "var(--sk-destructive)" }}>
          Delete
        </div>
      </div>
    </div>
  ),

  tooltip: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.875cqw",
      }}
    >
      <div className="pv-tooltip">Bold</div>
      <Button size="sm" variant="ghost">
        <Icon name={TextB} size={15} style={ICON.md} />
      </Button>
    </div>
  ),

  popover: (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5cqw",
      }}
    >
      <div className="pv-surface" style={{ width: "60cqw", position: "relative", overflow: "visible" }}>
        <div className="pv-card__body" style={{ padding: "3.75cqw 4cqw" }}>
          <div className="pv-line pv-line--title" style={{ width: "45%" }} />
          <div className="pv-line" style={{ width: "90%" }} />
          <div className="pv-line" style={{ width: "70%" }} />
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-1.4cqw",
            width: "2.8cqw",
            height: "2.8cqw",
            transform: "translateX(-50%) rotate(45deg)",
            background: "var(--docs-panel)",
            borderRight: "1px solid var(--docs-border)",
            borderBottom: "1px solid var(--docs-border)",
          }}
        />
      </div>
      <Button size="sm">View notifications</Button>
    </div>
  ),

  select: (
    <div className="pv-row" style={{ alignItems: "flex-start", justifyContent: "center" }}>
      <div className="pv-select">
        <span style={{ fontSize: "3.75cqw", color: "var(--docs-text)" }}>System default</span>
        <Icon name={CaretUpDown} size={14} color="var(--docs-muted)" style={ICON.sm} />
      </div>
      <div className="pv-surface" style={{ width: "47.5cqw", padding: "1.875cqw" }}>
        <div
          className="pv-menu-item"
          style={{ background: "var(--docs-accent-soft)", color: "var(--docs-accent)" }}
        >
          System default
        </div>
        <div className="pv-menu-item">Light</div>
        <div className="pv-menu-item">Dark</div>
      </div>
    </div>
  ),

  skeleton: (
    <div className="pv-surface" style={{ width: "75cqw", overflow: "hidden" }}>
      <div style={{ height: "20cqh", background: "var(--docs-border)", opacity: 0.6 }} />
      <div className="pv-card__body">
        <div className="pv-row" style={{ gap: "2.5cqw", justifyContent: "flex-start" }}>
          <div
            className="pv-dot"
            style={{ width: "9.375cqw", height: "9.375cqw", background: "var(--docs-border)" }}
          />
          <div className="pv-stack" style={{ flex: 1, gap: "1.875cqw" }}>
            <div className="pv-line pv-line--title" style={{ width: "45%" }} />
            <div className="pv-line" style={{ width: "70%" }} />
          </div>
        </div>
        <div className="pv-line" style={{ width: "100%" }} />
        <div className="pv-line" style={{ width: "88%" }} />
        <div className="pv-row" style={{ justifyContent: "flex-start", gap: "2.5cqw" }}>
          <div
            className="pv-chip"
            style={{ width: "15cqw", height: "10cqh", background: "var(--docs-border)" }}
          />
          <div
            className="pv-chip"
            style={{ width: "15cqw", height: "10cqh", background: "var(--docs-border)" }}
          />
        </div>
      </div>
    </div>
  ),

  stack: (
    <div className="pv-stack" style={{ width: "45cqw" }}>
      <div className="pv-bar" style={{ width: "100%" }} />
      <div className="pv-bar" style={{ width: "72%" }} />
      <div className="pv-bar" style={{ width: "88%" }} />
    </div>
  ),

  box: (
    <div className="pv-surface" style={{ width: "55cqw", padding: "4.375cqw" }}>
      <div className="pv-line pv-line--title" style={{ width: "50%" }} />
      <div className="pv-line" style={{ width: "100%" }} />
    </div>
  ),

  cluster: (
    <div className="pv-row" style={{ justifyContent: "center" }}>
      {["13.75cqw", "8.75cqw", "16.25cqw", "11.25cqw"].map((width) => (
        <div key={width} className="pv-chip" style={{ width }} />
      ))}
    </div>
  ),

  grid: (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2.5cqw",
        width: "55cqw",
      }}
    >
      {["a", "b", "c", "d", "e", "f", "g", "h"].map((key) => (
        <div key={key} className="pv-block" style={{ height: "7.5cqw" }} />
      ))}
    </div>
  ),

  center: (
    <div
      className="pv-surface"
      style={{ width: "55cqw", height: "30cqw", display: "grid", placeItems: "center" }}
    >
      <div className="pv-dot" style={{ background: "var(--docs-accent)" }} />
    </div>
  ),

  cover: (
    <div
      className="pv-surface"
      style={{
        width: "55cqw",
        height: "30cqw",
        display: "flex",
        flexDirection: "column",
        padding: "3.75cqw",
      }}
    >
      <div className="pv-line pv-line--title" style={{ width: "55%" }} />
      <div className="pv-line" style={{ width: "80%", marginTop: "1.25cqw" }} />
      <div className="pv-row" style={{ justifyContent: "flex-start", marginTop: "auto" }}>
        <div className="pv-chip" style={{ width: "15cqw", background: "var(--docs-accent)" }} />
      </div>
    </div>
  ),

  sidebar: (
    <div
      className="pv-surface"
      style={{ width: "60cqw", height: "32.5cqw", display: "flex", padding: 0, overflow: "hidden" }}
    >
      <div
        style={{
          width: "30%",
          borderRight: "1px solid var(--docs-border)",
          padding: "2.5cqw",
          display: "flex",
          flexDirection: "column",
          gap: "1.875cqw",
        }}
      >
        <div className="pv-line" style={{ width: "100%", background: "var(--docs-accent)" }} />
        <div className="pv-line" style={{ width: "70%" }} />
        <div className="pv-line" style={{ width: "85%" }} />
      </div>
      <div
        style={{
          flex: 1,
          padding: "3.125cqw",
          display: "flex",
          flexDirection: "column",
          gap: "1.875cqw",
        }}
      >
        <div className="pv-line pv-line--title" style={{ width: "55%" }} />
        <div className="pv-line" style={{ width: "90%" }} />
        <div className="pv-line" style={{ width: "70%" }} />
      </div>
    </div>
  ),

  switcher: (
    <div className="pv-row" style={{ justifyContent: "center" }}>
      <div className="pv-block" style={{ width: "20cqw", height: "15cqw" }} />
      <div className="pv-block" style={{ width: "20cqw", height: "15cqw" }} />
    </div>
  ),

  frame: (
    <div
      className="pv-surface"
      style={{ width: "55cqw", height: "30cqw", display: "grid", placeItems: "center" }}
    >
      <div className="pv-line" style={{ width: "50%" }} />
    </div>
  ),

  imposter: (
    <div
      style={{
        position: "relative",
        width: "55cqw",
        height: "30cqw",
        border: "1px dashed var(--docs-border)",
        borderRadius: "2.5cqw",
      }}
    >
      <div
        className="pv-surface"
        style={{
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: "fit-content",
          height: "fit-content",
          padding: "2.5cqw 3.75cqw",
        }}
      >
        <div className="pv-line" style={{ width: "15cqw" }} />
      </div>
    </div>
  ),

  reel: (
    <div
      className="pv-row"
      style={{ gap: "2.5cqw", overflow: "hidden", justifyContent: "flex-start" }}
    >
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="pv-surface"
          style={{
            width: "25cqw",
            height: "21.25cqw",
            flexShrink: 0,
            padding: "2.5cqw",
            display: "flex",
            flexDirection: "column",
            gap: "1.25cqw",
          }}
        >
          <div className="pv-line pv-line--title" style={{ width: "70%" }} />
          <div className="pv-line" style={{ width: "100%" }} />
          <div className="pv-line" style={{ width: "60%", marginTop: "auto" }} />
        </div>
      ))}
    </div>
  ),

  container: (
    <div style={{ width: "90cqw", display: "flex", justifyContent: "center" }}>
      <div
        className="pv-surface"
        style={{
          width: "75%",
          padding: "3.75cqw",
          display: "flex",
          flexDirection: "column",
          gap: "1.875cqw",
        }}
      >
        <div className="pv-line pv-line--title" style={{ width: "50%" }} />
        <div className="pv-line" style={{ width: "90%" }} />
      </div>
    </div>
  ),

  checkbox: (
    <div style={{ display: "flex", flexDirection: "column", gap: "3cqw", alignItems: "flex-start" }}>
      <Cluster
        as="label"
        space="2.5cqw"
        style={{ fontSize: "4.5cqw", lineHeight: 1.2, color: "var(--docs-text)" }}
      >
        <Checkbox.Root />
        Accept terms
      </Cluster>
      <Cluster
        as="label"
        space="2.5cqw"
        style={{ fontSize: "4.5cqw", lineHeight: 1.2, color: "var(--docs-text)" }}
      >
        <Checkbox.Root defaultChecked />
        Subscribe
      </Cluster>
    </div>
  ),

  radio: (
    <Radio.Group
      defaultValue="b"
      style={{ display: "flex", flexDirection: "column", gap: "3cqw", alignItems: "flex-start" }}
    >
      <Cluster
        as="label"
        space="2.5cqw"
        style={{ fontSize: "4.5cqw", lineHeight: 1.2, color: "var(--docs-text)" }}
      >
        <Radio.Root value="a" />
        Free
      </Cluster>
      <Cluster
        as="label"
        space="2.5cqw"
        style={{ fontSize: "4.5cqw", lineHeight: 1.2, color: "var(--docs-accent)" }}
      >
        <Radio.Root value="b" />
        Pro
      </Cluster>
    </Radio.Group>
  ),

  switch: (
    <div style={{ display: "flex", flexDirection: "column", gap: "3cqw", alignItems: "flex-start" }}>
      <Cluster
        as="label"
        space="2.5cqw"
        style={{ fontSize: "4.5cqw", lineHeight: 1.2, color: "var(--docs-text)" }}
      >
        <Switch.Root defaultChecked />
        Notifications
      </Cluster>
      <Cluster
        as="label"
        space="2.5cqw"
        style={{ fontSize: "4.5cqw", lineHeight: 1.2, color: "var(--docs-text)" }}
      >
        <Switch.Root />
        Dark mode
      </Cluster>
    </div>
  ),

  combobox: (
    <div style={{ width: "74cqw", display: "flex", flexDirection: "column", gap: "2.2cqw" }}>
      <span style={{ fontSize: "4cqw", fontWeight: 500, lineHeight: 1, color: "var(--docs-text)" }}>
        Fruit
      </span>
      <div
        className="pv-surface"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2cqw",
          padding: "2.75cqw 3cqw",
        }}
      >
        <span style={{ fontSize: "4.5cqw", color: "var(--docs-muted)" }}>e.g. Apple</span>
        <Icon name={CaretUpDown} size={12} style={ICON.sm} color="var(--docs-muted)" />
      </div>
    </div>
  ),

  "scroll-area": (
    <div
      style={{
        width: "42cqw",
        height: "32cqw",
        border: "1px solid var(--docs-border)",
        borderRadius: "2.5cqw",
        background: "var(--docs-panel)",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "7.5cqw",
          display: "flex",
          alignItems: "center",
          gap: "1.75cqw",
          padding: "0 3cqw",
          borderBottom: "1px solid var(--docs-border)",
          flexShrink: 0,
        }}
      >
        <div style={{ width: "1.8cqw", height: "1.8cqw", borderRadius: "999px", background: "var(--docs-accent)" }} />
        <div className="pv-line" style={{ width: "28%", height: "2.6cqw" }} />
        <div style={{ marginLeft: "auto", width: "9cqw", height: "4.2cqw", borderRadius: "999px", background: "var(--docs-accent-soft)" }} />
      </div>
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          gap: "1.9cqw",
          padding: "2.8cqw 3cqw",
          maskImage: "linear-gradient(to bottom, transparent 0, black 10%, black 90%, transparent 100%)",
        }}
      >
        {[
          { w: "92%", accent: true },
          { w: "78%" },
          { w: "88%" },
          { w: "64%" },
          { w: "82%" },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", gap: "1.75cqw", alignItems: "flex-start" }}>
            <div
              style={{
                width: "5.5cqw",
                height: "5.5cqw",
                borderRadius: "999px",
                flexShrink: 0,
                background: r.accent ? "var(--docs-accent-soft)" : "var(--docs-border)",
                border: r.accent ? "1px solid var(--docs-border)" : "none",
                marginTop: "0.2cqw",
              }}
            />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.1cqw" }}>
              <div className="pv-line" style={{ width: r.w, height: "2.4cqw" }} />
              <div className="pv-line" style={{ width: "100%", height: "1.7cqw", opacity: 0.9 }} />
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.5cqw",
          right: "1.5cqw",
          bottom: "1.5cqw",
          width: "1.1cqw",
          borderRadius: "999px",
          background: "transparent",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginTop: "1.2cqw",
            height: "9cqw",
            borderRadius: "999px",
            background: "var(--sk-scrollbar-thumb)",
            opacity: 1,
            boxShadow: "0 0 0 1px var(--docs-panel)",
          }}
        />
      </div>
    </div>
  ),
};
