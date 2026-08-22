import { styleVars } from "@skeletal/lib/style-vars";
import { clsx } from "clsx";
import type { ElementType } from "react";
import { createElement } from "react";
import type { LayoutPrimitiveProps } from "./layout-props";
import styles from "./sidebar.module.css";

/**
 * The media-object primitive: two children sit side by side — a fixed-width
 * (or content-width) sidebar and a main element taking the rest of the space.
 * When the container gets too narrow, they wrap to a stacked (vertical)
 * configuration. No breakpoints required.
 *
 * Use for media + text, inputs + buttons, label + control rows. The sidebar is
 * the FIRST child by default; pass `side="right"` to make the LAST child the
 * sidebar.
 *
 * ```tsx
 * <Sidebar sideWidth="12rem" space="1.5rem">
 *   <img src="..." alt="" />
 *   <p>Description</p>
 * </Sidebar>
 * ```
 */
export interface SidebarProps extends LayoutPrimitiveProps {
  /**
   * Which child is the sidebar.
   *
   * @default 'left'
   */
  side?: "left" | "right";
  /**
   * Width of the sidebar in the horizontal configuration.
   *
   * When unset, the sidebar is sized by its content.
   *
   * @default 'content'
   */
  sideWidth?: string;
  /**
   * The narrowest the main element can be before the two children wrap.
   *
   * Should be a percentage.
   *
   * @default '50%'
   */
  contentMin?: string;
  /**
   * Space between the sidebar and the main element.
   *
   * @default '1rem'
   */
  space?: string;
  /**
   * Let each child adopt its natural height instead of stretching to match.
   *
   * @default false
   */
  noStretch?: boolean;
}

export function Sidebar({
  as,
  side = "left",
  sideWidth,
  contentMin,
  space,
  noStretch = false,
  className,
  style,
  children,
  ...props
}: SidebarProps) {
  const Comp = (as ?? "div") as ElementType;
  return createElement(
    Comp,
    {
      className: clsx(styles.sidebar, className),
      style: styleVars(
        {
          "--_sidebar-width": sideWidth,
          "--_sidebar-content-min": contentMin,
          "--_sidebar-space": space,
        },
        style,
      ),
      ...(side !== "left" ? { "data-side": "right" } : {}),
      ...(noStretch ? { "data-no-stretch": true } : {}),
      ...props,
    },
    children,
  );
}
