import type { SelectScrollDownArrowProps as BaseSelectScrollDownArrowProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A bottom edge arrow that scrolls the select list down while hovered. Renders
 * a `<div>` element. Hidden when the list is not scrollable (or on touch input).
 *
 * Place it below `Select.List` inside the popup and give it a chevron child.
 * Its background covers the list so items scroll underneath it.
 *
 * @default keepMounted = false
 */
export interface SelectScrollDownArrowProps extends BaseSelectScrollDownArrowProps {}

export function SelectScrollDownArrow({ className, ...props }: SelectScrollDownArrowProps) {
  return (
    <BaseSelect.ScrollDownArrow
      className={mergeClassName(styles["select__scroll-arrow"], className)}
      {...props}
    />
  );
}
