import type { CSSProperties } from "react";

/**
 * Merges a consumer-provided `style` with CSS custom properties, skipping any
 * `undefined` values so that CSS fallbacks inside `var(--x, default)` still
 * apply.
 */
export function styleVars(
  vars: Record<`--${string}`, string | number | undefined>,
  style?: CSSProperties,
): CSSProperties {
  const out: Record<string, unknown> = { ...style };
  for (const [key, value] of Object.entries(vars)) {
    if (value !== undefined) out[key] = value;
  }
  return out as CSSProperties;
}
