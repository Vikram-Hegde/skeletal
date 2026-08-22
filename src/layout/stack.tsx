import { styleVars } from "@elemental/lib/style-vars";
import { transformChildAt } from "@elemental/lib/transform-children";
import { clsx } from "clsx";
import type { CSSProperties, ElementType, ReactElement } from "react";
import { cloneElement, createElement } from "react";
import type { LayoutPrimitiveProps } from "./layout-props";
import styles from "./stack.module.css";

/**
 * The vertical rhythm primitive: stacks its direct children with a consistent
 * space between them.
 *
 * The recommended default for vertical composition. Combine with `space` to
 * tune the rhythm and `splitAfter` to push a trailing group to the bottom
 * (e.g. a card with footer actions pinned to its base).
 *
 * ```tsx
 * <Stack space="1.5rem">
 *   <header />
 *   <main />
 *   <footer />
 * </Stack>
 * ```
 */
export interface StackProps extends LayoutPrimitiveProps {
  /**
   * Space between stacked items.
   *
   * @default '1.5rem'
   */
  space?: string;
  /**
   * Apply the space between items at every nesting level.
   *
   * By default the space applies to direct children only.
   *
   * @default false
   */
  recursive?: boolean;
  /**
   * Index (1-based) of the direct child at which the stack splits.
   *
   * That child and everything after it are pushed to the bottom via
   * `margin-block-start: auto`. The child is cloned and restyled inline, so it
   * must accept a `style` prop.
   *
   * @default undefined
   */
  splitAfter?: number;
  /**
   * Stretch the stack to fill its parent's height (`height: 100%`).
   *
   * Opt in explicitly — the stack does not stretch by default, so using one
   * as the only child of a fixed-height scroll container (a nav pane, a docs
   * page) keeps its content at natural height and preserves the container's
   * bottom padding. Reach for it when the stack should pin content to the
   * bottom of a definite-height box (dialog popups, cards with `splitAfter`
   * footers).
   *
   * @default false
   */
  fill?: boolean;
}

export function Stack({
  as,
  space,
  recursive = false,
  splitAfter,
  fill = false,
  className,
  style,
  children,
  ...props
}: StackProps) {
  const Comp = (as ?? "div") as ElementType;
  const content =
    splitAfter !== undefined && splitAfter > 1
      ? transformChildAt(children, splitAfter - 1, (element) =>
          cloneElement(element, { style: withStyle(element, { marginBlockStart: "auto" }) }),
        )
      : children;
  return createElement(
    Comp,
    {
      className: clsx(styles.stack, fill && styles["stack--fill"], className),
      style: styleVars({ "--_stack-space": space }, style),
      ...(recursive ? { "data-recursive": true } : {}),
      ...props,
    },
    content,
  );
}

function withStyle(element: ReactElement, added: CSSProperties): CSSProperties {
  const { style } = element.props as { style?: CSSProperties };
  return { ...style, ...added };
}
