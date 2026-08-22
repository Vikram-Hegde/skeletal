import { styleVars } from "@skeletal/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import styles from "./center.module.css";
import type { LayoutPrimitiveProps } from "./layout-props";

/**
 * The centering primitive: constrains content to a readable measure and centers
 * it horizontally.
 *
 * Use for prose, forms, and any content that benefits from a bounded line
 * length. `intrinsic` centers content that is narrower than the measure
 * without stretching it; `centerText` centers the text within.
 */
export interface CenterProps extends LayoutPrimitiveProps {
  /**
   * The maximum content width (the measure).
   *
   * @default '60ch'
   */
  max?: string;
  /**
   * Horizontal gutters applied as padding on each side.
   *
   * @default '1rem'
   */
  gutters?: string;
  /**
   * Center narrower content instead of stretching it to the full width.
   *
   * @default false
   */
  intrinsic?: boolean;
  /**
   * Center the text of the content.
   *
   * @default false
   */
  centerText?: boolean;
}

export function Center({
  as,
  max,
  gutters,
  intrinsic = false,
  centerText = false,
  className,
  style,
  children,
  ...props
}: CenterProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.center, className),
      style: styleVars({ "--_center-max": max, "--_center-gutters": gutters }, style),
      ...(intrinsic ? { "data-intrinsic": true } : {}),
      ...(centerText ? { "data-center-text": true } : {}),
      ...props,
    },
    children,
  );
}
