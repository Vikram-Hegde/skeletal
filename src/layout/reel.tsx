import { styleVars } from "@skeletal/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import type { LayoutPrimitiveProps } from "./layout-props";
import styles from "./reel.module.css";

/**
 * The horizontal-scroll primitive: lays children out in a row that scrolls
 * horizontally, with scroll-snap alignment.
 *
 * Use for horizontal strips that shouldn't wrap — carousels, table-like rows,
 * and tab bars. Items are snap-aligned and kept at their natural width.
 */
export interface ReelProps extends LayoutPrimitiveProps {
  /**
   * Space between items.
   *
   * @default '1rem'
   */
  space?: string;
  /**
   * Hide the horizontal scrollbar (visual-only; scrolling still works).
   *
   * @default false
   */
  noBar?: boolean;
}

export function Reel({
  as,
  space,
  noBar = false,
  className,
  style,
  children,
  ...props
}: ReelProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.reel, className),
      style: styleVars({ "--_reel-space": space }, style),
      ...(noBar ? { "data-no-bar": true } : {}),
      ...props,
    },
    children,
  );
}
