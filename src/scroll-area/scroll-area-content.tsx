import type { ScrollAreaContentProps as BaseScrollAreaContentProps } from "@base-ui/react/scroll-area";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./scroll-area.module.css";

/**
 * Container for the scrollable content. Renders a `<div>`.
 *
 * Place it directly inside `ScrollArea.Viewport`. It ensures the content sizes
 * correctly inside the clipped viewport and inherits overflow-edge variables
 * when a child needs its own mask — set
 * `--scroll-area-overflow-y-start: inherit` on that child.
 */
export interface ScrollAreaContentProps extends BaseScrollAreaContentProps {}

export function ScrollAreaContent({ className, ...props }: ScrollAreaContentProps) {
  return (
    <BaseScrollArea.Content
      className={mergeClassName(styles["scroll-area__content"], className)}
      {...props}
    />
  );
}
