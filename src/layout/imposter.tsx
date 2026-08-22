import { styleVars } from "@skeletal/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import styles from "./imposter.module.css";
import type { LayoutPrimitiveProps } from "./layout-props";

/**
 * The overlay primitive: positions its content centered over its nearest
 * positioned ancestor. Use sparingly — overlays obscure content — for
 * modals, notifications, and floating action controls.
 *
 * ```tsx
 * <div style={{ position: 'relative' }}>
 *   <Imposter>Tooltip-ish</Imposter>
 * </div>
 * ```
 */
export interface ImposterProps extends LayoutPrimitiveProps {
  /**
   * Position relative to the viewport instead of the parent.
   *
   * @default false
   */
  fixed?: boolean;
  /**
   * Keep the imposter clear of its container's edges by applying a margin.
   *
   * @default false
   */
  margin?: boolean;
  /**
   * Allow the imposter to break out of its container by this much on each side.
   *
   * @default '1rem'
   */
  breakout?: string;
}

export function Imposter({
  as,
  fixed = false,
  margin = false,
  breakout,
  className,
  style,
  children,
  ...props
}: ImposterProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.imposter, className),
      style: styleVars({ "--_imposter-breakout": breakout }, style),
      ...(fixed ? { "data-fixed": true } : {}),
      ...(margin ? { "data-margin": true } : {}),
      ...(breakout !== undefined ? { "data-breakout": true } : {}),
      ...props,
    },
    children,
  );
}
