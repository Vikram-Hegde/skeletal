import { styleVars } from "@elemental/lib/style-vars";
import { transformChildren } from "@elemental/lib/transform-children";
import { clsx } from "clsx";
import type { CSSProperties, ElementType, ReactElement } from "react";
import { Children, cloneElement, createElement } from "react";
import type { LayoutPrimitiveProps } from "./layout-props";
import styles from "./switcher.module.css";

/**
 * The mode-switch primitive: children sit in a single horizontal row when the
 * container is wide enough, and switch directly to a single vertical column
 * (bypassing intermediate states) when it isn't.
 *
 * Use for equal items that should never appear as "featured" by wrapping
 * unevenly — e.g. product cards or numbered steps. The switch happens at
 * `threshold` (a container-based breakpoint) and, with `limit`, when there are
 * more items than fit comfortably in one row.
 */
export interface SwitcherProps extends LayoutPrimitiveProps {
  /**
   * Container width at which the layout switches from horizontal to vertical.
   *
   * @default '30rem'
   */
  threshold?: string;

  /**
   * Space between the children.
   *
   * @default '1rem'
   */
  space?: string;
  /**
   * Maximum items allowed in the horizontal configuration.
   *
   * With more items than this, each is forced to a full row (stacked). Children
   * are cloned and restyled inline, so they must accept a `style` prop.
   *
   * @default 4
   */
  limit?: number;
}

export function Switcher({
  as,
  threshold,
  space,
  limit = 4,
  className,
  style,
  children,
  ...props
}: SwitcherProps) {
  const Comp = (as ?? "div") as ElementType;
  const count = Children.count(children);
  const stackAll = limit !== undefined && count > limit;
  const content = stackAll
    ? transformChildren(children, (element) =>
        cloneElement(element, { style: withStyle(element, { flexBasis: "100%" }) }),
      )
    : children;
  return createElement(
    Comp,
    {
      className: clsx(styles.switcher, className),
      style: styleVars({ "--_switcher-threshold": threshold, "--_switcher-space": space }, style),
      ...props,
    },
    content,
  );
}

function withStyle(element: ReactElement, added: CSSProperties): CSSProperties {
  const { style } = element.props as { style?: CSSProperties };
  return { ...style, ...added };
}
