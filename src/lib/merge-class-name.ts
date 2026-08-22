import { clsx } from "clsx";

/**
 * Combines a static design-system class with a consumer-supplied `className`.
 *
 * Base UI's `className` prop accepts either a plain string or a function of the
 * component's state. This helper preserves both shapes so styled wrappers can
 * add their own BEM class without dropping the state-driven variant.
 */
export function mergeClassName<State>(
  base: string | undefined,
  className: string | ((state: State) => string | undefined) | undefined,
): string | ((state: State) => string | undefined) {
  if (typeof className === "function") {
    return (state: State) => clsx(base, className(state));
  }
  return clsx(base, className);
}
