import {
  ArrowClockwise,
  Copy,
  PaintRoller,
  Check,
  X,
} from "@phosphor-icons/react";
import { Button, Drawer, Icon, Input, ScrollArea, Stack } from "@skeletal";
import { useEffect, useMemo, useState } from "react";
import { TOKENS, TOKEN_GROUPS } from "./tokens";

// Dev-only guard: do not bundle/expose in production.
const isDev = import.meta.env.DEV;

function applyToken(name: string, value: string) {
  if (value.trim() === "") {
    document.documentElement.style.removeProperty(name);
  } else {
    document.documentElement.style.setProperty(name, value);
  }
}

function rgbStringToHex(value: string): string | null {
  // Handles rgb(255 255 255), rgb(255,255,255), rgba(255 255 255 / 1) etc.
  const m = value
    .trim()
    .match(/rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)(?:[\s,\/]+[\d.]+)?\s*\)/i);
  if (!m) return null;
  const r = Math.max(0, Math.min(255, Number(m[1])));
  const g = Math.max(0, Math.min(255, Number(m[2])));
  const b = Math.max(0, Math.min(255, Number(m[3])));
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function cssColorToHex(value: string): string | null {
  const trimmed = value.trim();
  if (/^#([0-9a-fA-F]{3,8})$/.test(trimmed)) return trimmed.slice(0, 7);
  const rgbHex = rgbStringToHex(trimmed);
  if (rgbHex) return rgbHex;
  return null;
}

function getPickerHex(tokenName: string, overrideValue: string): string {
  // Prefer the live override if it's a parsable color.
  const overrideHex = cssColorToHex(overrideValue);
  if (overrideHex) return overrideHex;
  // Fall back to the computed token value (resolves light-dark() → rgb).
  try {
    const computed = getComputedStyle(document.documentElement)
      .getPropertyValue(tokenName)
      .trim();
    const computedHex = cssColorToHex(computed);
    if (computedHex) return computedHex;
    // Final fallback: let the browser resolve via a temporary element using the CSS variable.
    const probe = document.createElement("div");
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.left = "-9999px";
    probe.style.color = `var(${tokenName})`;
    document.body.appendChild(probe);
    const resolved = getComputedStyle(probe).color;
    document.body.removeChild(probe);
    return cssColorToHex(resolved) ?? "#000000";
  } catch {
    return "#000000";
  }
}

export function ThemerDrawer() {
  if (!isDev) return null;
  return <ThemerDrawerInner />;
}

function ThemerDrawerInner() {
  const [open, setOpen] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [radiusValue, setRadiusValue] = useState<string>("");

  // Apply live to :root whenever overrides change.
  useEffect(() => {
    for (const token of TOKENS) {
      const v = overrides[token.name];
      if (v !== undefined) applyToken(token.name, v);
    }
  }, [overrides]);

  // Initialize radiusValue from current computed style when drawer opens.
  useEffect(() => {
    if (!open) return;
    const current =
      overrides["--sk-radius"] ??
      getComputedStyle(document.documentElement).getPropertyValue("--sk-radius").trim();
    setRadiusValue(current);
  }, [open, overrides]);

  const activeCount = useMemo(
    () => Object.values(overrides).filter((v) => v.trim() !== "").length,
    [overrides],
  );

  const cssSnippet = useMemo(() => {
    const lines = Object.entries(overrides)
      .filter(([, v]) => v.trim() !== "")
      .map(([k, v]) => `  ${k}: ${v};`);
    if (lines.length === 0) return "/* No overrides */";
    return `:root {\n${lines.join("\n")}\n}`;
  }, [overrides]);

  const handleChange = (name: string, value: string) => {
    setOverrides((prev) => ({ ...prev, [name]: value }));
    applyToken(name, value);
  };

  const handleReset = (name: string) => {
    setOverrides((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
    document.documentElement.style.removeProperty(name);
    if (name === "--sk-radius") setRadiusValue("");
  };

  const handleResetAll = () => {
    for (const key of Object.keys(overrides)) {
      document.documentElement.style.removeProperty(key);
    }
    setOverrides({});
    setRadiusValue("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssSnippet);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = cssSnippet;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        aria-label={`Open themer${activeCount ? ` (${activeCount} overrides)` : ""}`}
        onClick={() => setOpen(true)}
        style={{ position: "relative" }}
      >
        <Icon name={PaintRoller} size={15} />
        <span className="docs-themer__label">Themer</span>
        {activeCount > 0 ? (
          <span className="docs-themer__badge" aria-hidden="true">
            {activeCount}
          </span>
        ) : null}
      </Button>

      <Drawer.Root side="right" open={open} onOpenChange={setOpen}>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Viewport>
            <Drawer.Popup size="lg">
              <Drawer.Header style={{ alignItems: "flex-start", gap: "1rem" }}>
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <Drawer.Title
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    <Icon name={PaintRoller} size={16} />
                    Themer
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--sk-muted-foreground)",
                        border: "1px solid var(--sk-border)",
                        padding: "0.125rem 0.375rem",
                        borderRadius: "var(--sk-radius)",
                      }}
                    >
                      DEV ONLY
                    </span>
                  </Drawer.Title>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.8125rem",
                      color: "var(--sk-muted-foreground)",
                      lineHeight: 1.4,
                    }}
                  >
                    Live-edit <code> --sk-*</code> tokens. Overrides are applied to{" "}
                    <code>:root</code> and reset on reload.
                  </p>
                </div>
                <Drawer.Close
                  size="sm"
                  variant="ghost"
                  aria-label="Close themer"
                  style={{ flexShrink: 0, marginTop: "0.125rem" }}
                >
                  <Icon name={X} size={16} />
                </Drawer.Close>
              </Drawer.Header>

              <ScrollArea.Root
                style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}
              >
                <ScrollArea.Viewport
                  fade
                  fadeSize="1.5rem"
                  style={{ flex: 1, minHeight: 0 }}
                >
                  <ScrollArea.Content
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    {/* Actions */}
                    <Stack
                      space="0.5rem"
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--sk-muted-foreground)",
                        }}
                      >
                        {activeCount === 0 ? "No overrides" : `${activeCount} override(s)`}
                      </span>
                      <span style={{ display: "flex", gap: "0.5rem" }}>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleResetAll}
                          disabled={activeCount === 0}
                        >
                          <Icon name={ArrowClockwise} size={14} /> Reset all
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleCopy}>
                          <Icon name={copied ? Check : Copy} size={14} />{" "}
                          {copied ? "Copied" : "Copy CSS"}
                        </Button>
                      </span>
                    </Stack>

                    {/* Token groups */}
                    {TOKEN_GROUPS.map((group) => (
                      <div key={group}>
                        <h3
                          style={{
                            margin: "0 0 0.625rem",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "var(--sk-muted-foreground)",
                          }}
                        >
                          {group}
                        </h3>
                        <div
                          style={{
                            borderTop: "1px solid var(--sk-border)",
                            marginTop: "0.25rem",
                          }}
                        >
                          {TOKENS.filter((t) => t.group === group).map((token) => {
                            const value = overrides[token.name] ?? "";
                            const isRadius = token.type === "radius";
                            const isShadow = token.type === "shadow";

                            return (
                              <div
                                key={token.name}
                                style={{
                                  padding: "0.75rem 0",
                                  borderBottom: "1px solid var(--sk-border)",
                                }}
                              >
                                <div style={{ minWidth: 0 }}>
                                  <div
                                    style={{
                                      marginBottom: "0.25rem",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "0.8125rem",
                                        fontWeight: 600,
                                      }}
                                    >
                                      {token.label}
                                    </span>
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "0.6875rem",
                                      color: "var(--sk-muted-foreground)",
                                      lineHeight: 1.3,
                                      marginBottom: "0.375rem",
                                    }}
                                  >
                                    {token.description}
                                  </div>

                                  {isRadius ? (
                                    <div>
                                      <div
                                        style={{
                                          display: "flex",
                                          gap: "0.5rem",
                                          alignItems: "center",
                                        }}
                                      >
                                        <Input
                                          value={radiusValue}
                                          onValueChange={(v) => {
                                            const str = String(v);
                                            setRadiusValue(str);
                                            handleChange(token.name, str);
                                          }}
                                          placeholder={token.defaultValue}
                                          aria-label={`${token.label} value`}
                                          style={{
                                            flex: 1,
                                            fontFamily:
                                              "JetBrains Mono Variable, monospace",
                                            fontSize: "0.8125rem",
                                          }}
                                        />
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => handleReset(token.name)}
                                          disabled={value === ""}
                                          aria-label={`Reset ${token.label}`}
                                          style={{ flexShrink: 0 }}
                                        >
                                          <Icon name={ArrowClockwise} size={12} />
                                        </Button>
                                      </div>
                                      <input
                                        type="range"
                                        min={0}
                                        max={24}
                                        step={1}
                                        value={(() => {
                                          const n = parseFloat(radiusValue);
                                          if (Number.isNaN(n)) return 0;
                                          // radiusValue may be like "0.5rem" — parse float handles it
                                          // map 0-1.5rem ≈ 0-24px at 16px base
                                          // If value is rem, convert: 0.5rem = 8
                                          if (radiusValue.includes("rem")) return n * 16;
                                          return n;
                                        })()}
                                        onChange={(e) => {
                                          const px = Number(e.target.value);
                                          const rem = px / 16;
                                          const out = px === 0 ? "0" : `${rem}rem`;
                                          setRadiusValue(out);
                                          handleChange(token.name, out);
                                        }}
                                        style={{
                                          width: "100%",
                                          marginTop: "0.5rem",
                                          accentColor: "var(--sk-primary)",
                                        }}
                                      />
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          fontSize: "0.6875rem",
                                          color: "var(--sk-muted-foreground)",
                                        }}
                                      >
                                        <span>0</span>
                                        <span>0.5rem</span>
                                        <span>1.5rem</span>
                                      </div>
                                    </div>
                                  ) : isShadow ? (
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                      <Input
                                        value={value}
                                        onValueChange={(v) =>
                                          handleChange(token.name, String(v))
                                        }
                                        placeholder={token.defaultValue}
                                        aria-label={`${token.label} value`}
                                        style={{
                                          flex: 1,
                                          fontFamily:
                                            "JetBrains Mono Variable, monospace",
                                          fontSize: "0.75rem",
                                        }}
                                      />
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleReset(token.name)}
                                        disabled={value === ""}
                                        aria-label={`Reset ${token.label}`}
                                      >
                                        <Icon name={ArrowClockwise} size={12} />
                                      </Button>
                                    </div>
                                  ) : (
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                      <Input
                                        value={value}
                                        onValueChange={(v) =>
                                          handleChange(token.name, String(v))
                                        }
                                        placeholder={token.defaultValue}
                                        aria-label={`${token.label} value`}
                                        style={{
                                          flex: 1,
                                          fontFamily:
                                            "JetBrains Mono Variable, monospace",
                                          fontSize: "0.75rem",
                                        }}
                                      />
                                  <div
                                    style={{
                                      position: "relative",
                                      width: "2.5rem",
                                      height: "2.5rem",
                                      flexShrink: 0,
                                      border: "1px solid var(--sk-border)",
                                      borderRadius: "var(--sk-radius)",
                                      overflow: "hidden",
                                      background: "var(--sk-background)",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <div
                                      aria-hidden="true"
                                      style={{
                                        position: "absolute",
                                        inset: "2px",
                                        borderRadius: "calc(var(--sk-radius) - 1px)",
                                        background: value.trim()
                                          ? value
                                          : `var(${token.name})`,
                                      }}
                                    />
                                    <input
                                      type="color"
                                      value={getPickerHex(token.name, value)}
                                      onChange={(e) =>
                                        handleChange(token.name, e.target.value)
                                      }
                                      style={{
                                        position: "absolute",
                                        inset: 0,
                                        opacity: 0,
                                        cursor: "pointer",
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                        padding: 0,
                                      }}
                                      aria-label={`${token.label} color picker`}
                                    />
                                  </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleReset(token.name)}
                                        disabled={value === ""}
                                        aria-label={`Reset ${token.label}`}
                                      >
                                        <Icon name={ArrowClockwise} size={12} />
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>

              <Drawer.Footer>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--sk-muted-foreground)",
                    marginRight: "auto",
                  }}
                >
                  Changes are live but not persisted.
                </span>
                <Drawer.Close>Done</Drawer.Close>
              </Drawer.Footer>
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
