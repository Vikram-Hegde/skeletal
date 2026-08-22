import type { ScrollAreaThumbProps as BaseScrollAreaThumbProps } from "@base-ui/react/scroll-area";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./scroll-area.module.css";

/**
 * The draggable thumb inside the scrollbar track. Renders a `<div>`.
 *
 * Inherits the scrollbar's `data-orientation` (`vertical` | `horizontal`) and
 * is sized via `--scroll-area-thumb-height/width` set by Base UI.
 */
export interface ScrollAreaThumbProps extends BaseScrollAreaThumbProps {}

export function ScrollAreaThumb({ className, ...props }: ScrollAreaThumbProps) {
  return (
    <BaseScrollArea.Thumb
      className={mergeClassName(styles["scroll-area__thumb"], className)}
      {...props}
    />
  );
}
