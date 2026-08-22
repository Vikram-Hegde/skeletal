import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";

type LayoutChild = ReactElement<Record<string, unknown>>;

/**
 * Clones each direct child element, applying `transform` to the child at
 * `index` (0-based). Non-element children are returned untouched.
 */
export function transformChildAt(
  children: ReactNode,
  index: number,
  transform: (element: LayoutChild) => ReactElement,
): ReactNode {
  return Children.map(children, (child, childIndex) => {
    if (!isValidElement(child)) return child;
    return childIndex === index ? transform(child as LayoutChild) : child;
  });
}

/**
 * Clones every direct child element, applying `transform` to each. Non-element
 * children are returned untouched.
 */
export function transformChildren(
  children: ReactNode,
  transform: (element: LayoutChild) => ReactElement,
): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    return transform(child as LayoutChild);
  });
}
