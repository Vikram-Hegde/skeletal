import type { ScrollAreaRootProps as BaseScrollAreaRootProps } from "@base-ui/react/scroll-area";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./scroll-area.module.css";

/**
 * Groups all parts of the scroll area. Renders a `<div>`.
 *
 * The root clips the viewport and positions custom scrollbars. Give it an
 * explicit size (`height`, `max-height`, `width`) — the viewport fills it.
 *
 * ```tsx
 * <ScrollArea.Root style={{ height: 200 }}>
 *   <ScrollArea.Viewport>
 *     <ScrollArea.Content>Long content…</ScrollArea.Content>
 *   </ScrollArea.Viewport>
 *   <ScrollArea.Scrollbar><ScrollArea.Thumb /></ScrollArea.Scrollbar>
 * </ScrollArea.Root>
 * ```
 *
 * All Base UI root props are supported: `overflowEdgeThreshold`, `style`,
 * `className`, `render`.
 */
export interface ScrollAreaRootProps extends BaseScrollAreaRootProps {}

export function ScrollAreaRoot({ className, ...props }: ScrollAreaRootProps) {
  return (
    <BaseScrollArea.Root
      className={mergeClassName(styles["scroll-area"], className)}
      {...props}
    />
  );
}
