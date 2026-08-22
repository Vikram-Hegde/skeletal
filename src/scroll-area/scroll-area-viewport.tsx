import type { ScrollAreaViewportProps as BaseScrollAreaViewportProps } from "@base-ui/react/scroll-area";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import { styleVars } from "@skeletal/lib/style-vars";
import { clsx } from "clsx";
import styles from "./scroll-area.module.css";

/**
 * The scrollable container. Renders a `<div>` with `overflow: scroll`.
 *
 * Content fades at the edges where more can be scrolled when `fade` is
 * enabled. The fade uses a CSS `mask-image` driven by Base UI's
 * `--scroll-area-overflow-*` variables, so no JavaScript or shadow overlays
 * are needed. The fade animates naturally with the scroll position.
 *
 * For SSR the bottom/right edge falls back to the fade size so the hint is
 * visible before hydration.
 */
export interface ScrollAreaViewportProps extends BaseScrollAreaViewportProps {
  /**
   * Whether to fade content at scroll edges.
   *
   * When `true` the viewport masks its content with a gradient that fades out
   * at the top/bottom where more can be scrolled. The fade tracks
   * `--scroll-area-overflow-y-start/end` automatically.
   *
   * Use `"horizontal"` or `"both"` for horizontal or combined axes. For most
   * vertical lists (side navs, dropdowns) `true` (vertical) is correct.
   *
   * @default false
   */
  fade?: boolean | "horizontal" | "vertical" | "both";
  /**
   * The size of the fade gradient at each edge. Only applies when `fade` is set.
   * Any CSS length. Use a larger value for a softer, longer fade.
   *
   * @default '2rem'
   */
  fadeSize?: string;
}

const FADE_CLASS: Record<string, string> = {
  vertical: styles["scroll-area__viewport--fade"],
  horizontal: styles["scroll-area__viewport--fade-x"],
  both: styles["scroll-area__viewport--fade-both"],
};

export function ScrollAreaViewport({
  className,
  style,
  fade = false,
  fadeSize,
  ...props
}: ScrollAreaViewportProps) {
  const fadeKey = fade === true ? "vertical" : fade === false ? undefined : fade;
  const fadeClass = fadeKey ? FADE_CLASS[fadeKey] : undefined;

  const mergedStyle =
    typeof style === "function"
      ? ((state: unknown) =>
          styleVars(
            { "--_scroll-area-fade-size": fadeSize },
            (style as (s: unknown) => React.CSSProperties)(state),
          ) as React.CSSProperties)
      : styleVars({ "--_scroll-area-fade-size": fadeSize }, style as React.CSSProperties | undefined);

  return (
    <BaseScrollArea.Viewport
      className={mergeClassName(
        clsx(styles["scroll-area__viewport"], fadeClass),
        className,
      )}
      style={mergedStyle as BaseScrollAreaViewportProps["style"]}
      {...props}
    />
  );
}
