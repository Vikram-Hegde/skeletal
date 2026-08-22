import { styleVars } from "@skeletal/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import styles from "./cover.module.css";
import type { LayoutPrimitiveProps } from "./layout-props";

/**
 * The vertical-centering primitive: fills a minimum height and centers one
 * child vertically while pinning the first and last children to the top and
 * bottom edges.
 *
 * The classic full-viewport hero. Mark the child you want centered with
 * `data-cover-center`:
 *
 * ```tsx
 * <Cover minHeight="70svh">
 *   <header />
 *   <main data-cover-center>Centered</main>
 *   <footer />
 * </Cover>
 * ```
 */
export interface CoverProps extends LayoutPrimitiveProps {
  /**
   * The minimum height of the cover.
   *
   * @default '100svh'
   */
  minHeight?: string;
  /**
   * Space between the cover children (also used as the cover's padding).
   *
   * @default '1rem'
   */
  space?: string;
}

export function Cover({ as, minHeight, space, className, style, children, ...props }: CoverProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.cover, className),
      style: styleVars({ "--_cover-min": minHeight, "--_cover-space": space }, style),
      ...props,
    },
    children,
  );
}
