import type { ScrollAreaScrollbarProps as BaseScrollAreaScrollbarProps } from "@base-ui/react/scroll-area";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./scroll-area.module.css";

/**
 * A custom scrollbar track. Renders a `<div>` positioned over the viewport edge.
 *
 * Use `orientation="horizontal"` for the horizontal axis; defaults to
 * `"vertical"`. The scrollbar fades in on hover or while scrolling and hides
 * otherwise, keeping the chrome minimal. Pair it with `ScrollArea.Thumb`.
 *
 * ```tsx
 * <ScrollArea.Scrollbar>
 *   <ScrollArea.Thumb />
 * </ScrollArea.Scrollbar>
 * ```
 */
export interface ScrollAreaScrollbarProps extends BaseScrollAreaScrollbarProps {}

export function ScrollAreaScrollbar({ className, ...props }: ScrollAreaScrollbarProps) {
  return (
    <BaseScrollArea.Scrollbar
      className={mergeClassName(styles["scroll-area__scrollbar"], className)}
      {...props}
    />
  );
}
