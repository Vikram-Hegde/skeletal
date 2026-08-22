import { styleVars } from "@elemental/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import styles from "./grid.module.css";
import type { LayoutPrimitiveProps } from "./layout-props";

/**
 * The intrinsic grid primitive: auto-fills as many columns as fit, each at
 * least `min` wide, and wraps onto new rows. No breakpoints required — the
 * column count derives from the available space.
 *
 * Use for card galleries, product lists, and any collection of equal items.
 */
export interface GridProps extends LayoutPrimitiveProps {
  /**
   * The smallest a column is allowed to be before wrapping.
   *
   * @default '16rem'
   */
  min?: string;
  /**
   * Gap between cells.
   *
   * @default '1rem'
   */
  gap?: string;
}

export function Grid({ as, min, gap, className, style, children, ...props }: GridProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.grid, className),
      style: styleVars({ "--_grid-min": min, "--_grid-gap": gap }, style),
      ...props,
    },
    children,
  );
}
