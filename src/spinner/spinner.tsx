import { styleVars } from "@elemental/lib/style-vars";
import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./spinner.module.css";

/**
 * A rotating arc indicator for pending states. Renders a `<span>`.
 *
 * Pure CSS (conic-gradient arc + mask ring) — no state, no library. Inherits
 * the surrounding text color via `currentColor`, so it works on any
 * foreground, including inside a `Button` or on a `--primary` fill.
 *
 * By default it is decorative (`aria-hidden`). Pass `label` to announce the
 * pending state to screen readers (`role="status"`); for a `Button` with
 * `loading` the label is redundant, so omit it there.
 *
 * The rotation is essential feedback and is kept under
 * `prefers-reduced-motion`.
 */
export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The spinner diameter, in any CSS length.
   *
   * @default '1em'
   */
  size?: string;
  /**
   * Accessible status text read by screen readers while pending.
   *
   * Omit for decorative use (e.g. inside a `Button` with `loading`).
   *
   * @default undefined
   */
  label?: string;
}

export function Spinner({ size, label, className, style, ...props }: SpinnerProps) {
  return (
    <span
      role={label !== undefined ? "status" : undefined}
      aria-hidden={label !== undefined ? undefined : true}
      className={clsx(styles.spinner, className)}
      style={styleVars({ "--_spinner-size": size }, style)}
      {...props}
    >
      {label !== undefined ? <span className={styles.spinner__label}>{label}</span> : null}
    </span>
  );
}
