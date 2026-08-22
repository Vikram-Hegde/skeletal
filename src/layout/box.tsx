import { styleVars } from "@elemental/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import styles from "./box.module.css";
import type { LayoutPrimitiveProps } from "./layout-props";

/**
 * The padded container primitive: gives its content consistent padding and an
 * optional border/background/color.
 *
 * Use for cards, panels, and any bounded surface. `invert` swaps the surface
 * to the foreground color with background text — handy for emphasis bars.
 */
export interface BoxProps extends LayoutPrimitiveProps {
  /**
   * Padding inside the box.
   *
   * @default '1.5rem'
   */
  padding?: string;
  /**
   * Border shorthand (width style color).
   *
   * @default 'none'
   */
  border?: string;
  /**
   * Background color.
   *
   * @default 'transparent'
   */
  background?: string;
  /**
   * Text color.
   *
   * @default 'inherit'
   */
  color?: string;
  /**
   * Swap the box's background and foreground tokens.
   *
   * Text becomes the background token, with slightly reduced padding.
   *
   * @default false
   */
  invert?: boolean;
}

export function Box({
  as,
  padding,
  border,
  background,
  color,
  invert = false,
  className,
  style,
  children,
  ...props
}: BoxProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.box, className),
      style: styleVars(
        {
          "--_box-padding": padding,
          "--_box-border": border,
          "--_box-bg": background,
          "--_box-color": color,
        },
        style,
      ),
      ...(invert ? { "data-invert": true } : {}),
      ...props,
    },
    children,
  );
}
