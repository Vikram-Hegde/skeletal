import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./badge.module.css";

/**
 * The visual emphasis of the badge. Choose based on how much attention the
 * label should draw:
 * - `secondary`: muted neutral fill — the default for tags, labels, and
 *   metadata chips that shouldn't compete with content.
 * - `primary`: accent fill — draws the eye; use sparingly for a single
 *   highlight (e.g. the active filter in a set).
 * - `outline`: transparent with a border — the lightest emphasis; good when
 *   many badges sit together (filter rows) and a filled chip would be loud.
 * - `destructive`: red fill — irreversible or error states (blocked, failed,
 *   removed). Pair with surrounding copy that explains the state.
 *
 * @default variant = 'secondary'
 */
export type BadgeVariant = "primary" | "secondary" | "outline" | "destructive";

/**
 * A small pill that labels, categorizes, or marks status. Renders a `<span>`.
 *
 * Pure presentational — no state, no Base UI, so it's safe to use anywhere a
 * tag is needed. Pick a `variant` for emphasis, and pass `dot` to lead with a
 * status dot (tinted with the badge's foreground color) for live indicators
 * such as "Online" or "Failed".
 *
 * The badge keeps itself to one line and truncates nothing — keep labels
 * short. Long text would stretch the pill awkwardly.
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual emphasis of the badge. @default 'secondary' */
  variant?: BadgeVariant;
  /** Whether the badge leads with a status dot tinted with the foreground color. @default false */
  dot?: boolean;
}

const VARIANT_CLASS: Record<BadgeVariant, string> = {
  primary: styles["badge--primary"],
  secondary: styles["badge--secondary"],
  outline: styles["badge--outline"],
  destructive: styles["badge--destructive"],
};

export function Badge({
  variant = "secondary",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={clsx(styles.badge, VARIANT_CLASS[variant], className)} {...props}>
      {dot ? <span className={styles.badge__dot} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
