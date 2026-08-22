import { clsx } from "clsx";
import type { HTMLAttributes, ReactElement, ReactNode, Ref } from "react";
import { Children, cloneElement, isValidElement } from "react";
import styles from "./skeleton.module.css";

const MEDIA_TAGS = new Set(["img", "video", "svg", "button"]);
const FIELD_TAGS = new Set(["input", "textarea"]);

type SkeletonElement = ReactElement<{
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  ref?: Ref<HTMLElement>;
}>;

/**
 * Starts the shimmer sweep on a shimmer element via the Web Animations API
 * instead of a CSS animation, so every bar on the page shares the same
 * `startTime` and moves in perfect lockstep. Per-element CSS animations drift
 * out of phase as they mount and read as jittery.
 *
 * Runs from a ref callback (no effects), guarded so it starts once per element.
 * Honors `prefers-reduced-motion` and the `--_skeleton-duration` custom
 * property (seconds) when present.
 */
function startShimmer(element: HTMLElement | null): void {
  if (element == null || element.dataset["skeletonShimmer"] === "started") return;
  if (typeof element.animate !== "function") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  element.dataset["skeletonShimmer"] = "started";
  const rawDuration = getComputedStyle(element).getPropertyValue("--_skeleton-duration").trim();
  const duration = Number.parseFloat(rawDuration) * 1000 || 2000;
  element.animate([{ backgroundPosition: "100% 0" }, { backgroundPosition: "0% 0" }], {
    duration,
    iterations: Infinity,
    easing: "ease-in-out",
  }).startTime = 0;
}

/**
 * A layout-aware skeleton for loading states. Wrap a real component — rendered
 * with mock content while data loads, or the actual UI once it arrives — and
 * its text, media, and form controls are replaced by shimmer bars. No manual
 * rectangle sizing.
 *
 * Each text node is wrapped in an inline span whose text is transparent; with
 * `box-decoration-break: clone` every wrapped line fragment becomes its own
 * solid shimmer bar, so the bars inherit the exact line box (width per wrapped
 * line, height from font size × line-height) of the content. Images / video /
 * svg / buttons become a shimmer block sized to the element, and inputs keep
 * their box with shimmering value text.
 *
 * Pass `loading` to render the real content when it's not loading, or default
 * (mock) mode by simply wrapping mock content. The two states cross-fade
 * smoothly (the real content and shimmer overlap in the same box and swap
 * opacity), so toggling `loading` never jumps — and the real images are
 * already loaded by the time loading ends.
 *
 * The wrapper adds no box (`display: contents`) and is `aria-hidden` while
 * loading — announce the loading state from a live region around it, e.g.
 * `<div role="status">Loading…</div>`.
 *
 * Customize per instance via CSS custom properties on the wrapper:
 * `--_skeleton-base`, `--_skeleton-highlight`, `--_skeleton-duration`,
 * `--_skeleton-radius` (media), and `--_skeleton-text-radius` (text bars).
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to show the shimmer instead of the real content.
   *
   * Defaults to `true` — content wrapped in a Skeleton is treated as mock and
   * shimmered. Pass `loading={false}`, or a boolean you toggle once data
   * arrives, to render the children as-is. The layout never jumps: both states
   * keep the same structure, only the paint changes.
   *
   * @default true
   */
  loading?: boolean;
  /**
   * The content to shimmer. While `loading` is `true`, any text, images, and
   * form controls inside are replaced with the shimmer effect while keeping
   * their exact layout; when `false` they render normally.
   *
   * @required
   */
  children: ReactNode;
}

export function Skeleton({ children, loading = true, className, style, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden={loading || undefined}
      data-loading={loading || undefined}
      className={clsx(styles.skeleton, className)}
      style={style}
      {...props}
    >
      <div className={styles.skeleton__stage}>
        <div className={styles.skeleton__real}>{children}</div>
        <div className={styles.skeleton__shimmer} aria-hidden="true">
          {skeletonizeChildren(children)}
        </div>
      </div>
    </div>
  );
}

/** Recursively replaces text and media nodes with shimmer-wrapped versions. */
function skeletonizeChildren(children: ReactNode): ReactNode {
  return Children.map(children, (child) => skeletonize(child));
}

function skeletonize(node: ReactNode): ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    if (typeof node === "string" && node.trim() === "") return node;
    return (
      <span ref={startShimmer} className={styles.skeleton__text}>
        {node}
      </span>
    );
  }
  if (!isValidElement(node)) return node;

  const element = node as SkeletonElement;
  if (typeof element.type === "string") {
    if (MEDIA_TAGS.has(element.type)) {
      return (
        <span ref={startShimmer} className={styles.skeleton__media}>
          {cloneElement(element, {
            className: clsx(element.props.className, styles["skeleton__media-raw"]),
          })}
        </span>
      );
    }
    if (FIELD_TAGS.has(element.type)) {
      return cloneElement(element, {
        ref: startShimmer,
        className: clsx(element.props.className, styles.skeleton__text),
        disabled: true,
      });
    }
  }
  return cloneElement(element, { children: skeletonizeChildren(element.props.children) });
}
