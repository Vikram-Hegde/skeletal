import { ScrollAreaContent } from "./scroll-area-content";
import { ScrollAreaCorner } from "./scroll-area-corner";
import { ScrollAreaRoot } from "./scroll-area-root";
import { ScrollAreaScrollbar } from "./scroll-area-scrollbar";
import { ScrollAreaThumb } from "./scroll-area-thumb";
import { ScrollAreaViewport } from "./scroll-area-viewport";

/**
 * Compound component for a scrollable area with custom scrollbars and optional
 * edge fades. Wraps Base UI's Scroll Area so every Base UI prop, `render`
 * override, and ref works as documented.
 *
 * ```tsx
 * import { ScrollArea } from '@project-backbone/skeletal'
 *
 * <ScrollArea.Root style={{ height: 200 }}>
 *   <ScrollArea.Viewport fade>
 *     <ScrollArea.Content>Long content…</ScrollArea.Content>
 *   </ScrollArea.Viewport>
 *   <ScrollArea.Scrollbar>
 *     <ScrollArea.Thumb />
 *   </ScrollArea.Scrollbar>
 *   <ScrollArea.Corner />
 * </ScrollArea.Root>
 * ```
 *
 * Enable `fade` on the `Viewport` for a soft mask at scroll edges — ideal for
 * side navs and lists where the content should hint at overflow. Tune the
 * distance with `fadeSize` (e.g. `1.5rem`). The mask tracks
 * `--scroll-area-overflow-y-start/end` automatically; no shadow overlays or
 * scroll listeners are needed.
 */
export const ScrollArea = {
  Root: ScrollAreaRoot,
  Viewport: ScrollAreaViewport,
  Content: ScrollAreaContent,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
};

export type { ScrollAreaContentProps } from "./scroll-area-content";
export type { ScrollAreaCornerProps } from "./scroll-area-corner";
export type { ScrollAreaRootProps } from "./scroll-area-root";
export type { ScrollAreaScrollbarProps } from "./scroll-area-scrollbar";
export type { ScrollAreaThumbProps } from "./scroll-area-thumb";
export type { ScrollAreaViewportProps } from "./scroll-area-viewport";
