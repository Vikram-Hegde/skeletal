import { styleVars } from "@skeletal/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import styles from "./cluster.module.css";
import type { LayoutPrimitiveProps } from "./layout-props";

/**
 * The group-by-row primitive: lays its children out horizontally and wraps
 * them onto new rows when they run out of space, with a consistent gap.
 *
 * The natural choice for button/toolbar rows, tag groups, and any "chips"
 * layout. `justify` controls the horizontal placement of the whole group and
 * `align` the vertical alignment of items within a row.
 */
export interface ClusterProps extends LayoutPrimitiveProps {
  /**
   * Gap between items (both axes).
   *
   * @default '1rem'
   */
  space?: string;
  /**
   * Horizontal placement of the group within the container.
   *
   * @default 'flex-start'
   */
  justify?: string;
  /**
   * Vertical alignment of items within a row.
   *
   * @default 'center'
   */
  align?: string;
}

export function Cluster({
  as,
  space,
  justify,
  align,
  className,
  style,
  children,
  ...props
}: ClusterProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.cluster, className),
      style: styleVars(
        {
          "--_cluster-gap": space,
          "--_cluster-justify": justify ?? "flex-start",
          "--_cluster-align": align ?? "center",
        },
        style,
      ),
      ...props,
    },
    children,
  );
}
