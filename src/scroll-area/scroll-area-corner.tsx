import type { ScrollAreaCornerProps as BaseScrollAreaCornerProps } from "@base-ui/react/scroll-area";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./scroll-area.module.css";

/**
 * The corner where vertical and horizontal scrollbars meet. Renders a `<div>`.
 *
 * Only needed when both scrollbars are present. It prevents the tracks from
 * overlapping and exposes `--scroll-area-corner-width/height` for layout.
 */
export interface ScrollAreaCornerProps extends BaseScrollAreaCornerProps {}

export function ScrollAreaCorner({ className, ...props }: ScrollAreaCornerProps) {
  return (
    <BaseScrollArea.Corner
      className={mergeClassName(styles["scroll-area__corner"], className)}
      {...props}
    />
  );
}
