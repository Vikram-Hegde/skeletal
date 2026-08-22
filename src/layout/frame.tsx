import { styleVars } from "@skeletal/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import styles from "./frame.module.css";
import type { LayoutPrimitiveProps } from "./layout-props";

/**
 * The aspect-ratio primitive: constrains its content to a fixed ratio. Media
 * (`img`, `video`, `iframe`) fills and crops to cover the frame; any other
 * content is centered and scrolls if it doesn't fit.
 *
 * Use for media thumbnails, video embeds, and images that must keep a ratio.
 */
export interface FrameProps extends LayoutPrimitiveProps {
  /**
   * The aspect ratio, e.g. `'16 / 9'`, `'1 / 1'`, or a decimal.
   *
   * @default '16 / 9'
   */
  ratio?: string;
}

export function Frame({ as, ratio, className, style, children, ...props }: FrameProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.frame, className),
      style: styleVars({ "--_frame-ratio": ratio }, style),
      ...props,
    },
    children,
  );
}
