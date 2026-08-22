import { styleVars } from "@elemental/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import styles from "./container.module.css";
import type { LayoutPrimitiveProps } from "./layout-props";

/**
 * The page-width primitive: constrains content to a maximum width and centers
 * it with horizontal gutters. The standard wrapper for page-level content.
 */
export interface ContainerProps extends LayoutPrimitiveProps {
  /**
   * The maximum width of the container.
   *
   * @default '60rem'
   */
  max?: string;
  /**
   * Horizontal gutters applied as padding on each side.
   *
   * @default '1rem'
   */
  padding?: string;
}

export function Container({
  as,
  max,
  padding,
  className,
  style,
  children,
  ...props
}: ContainerProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.container, className),
      style: styleVars({ "--_container-max": max, "--_container-padding": padding }, style),
      ...props,
    },
    children,
  );
}
