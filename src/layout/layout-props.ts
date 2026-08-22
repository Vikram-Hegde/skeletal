import type { ElementType, HTMLAttributes } from "react";

/**
 * Props shared by every layout primitive: an optional element override and all
 * standard HTML attributes (`className`, `style`, `id`, `aria-*`, ...).
 */
export interface LayoutPrimitiveProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The element to render. Useful for semantics (e.g. a `Stack` of steps as an
   * `<ol>`).
   *
   * @default 'div'
   */
  as?: ElementType;
}
