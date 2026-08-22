import type { SelectScrollUpArrowProps as BaseSelectScrollUpArrowProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A top edge arrow that scrolls the select list up while hovered. Renders a
 * `<div>` element. Hidden when the list is not scrollable (or on touch input).
 *
 * Place it above `Select.List` inside the popup and give it a chevron child.
 * Its background covers the list so items scroll underneath it.
 *
 * @default keepMounted = false
 */
export interface SelectScrollUpArrowProps extends BaseSelectScrollUpArrowProps {}

export function SelectScrollUpArrow({ className, ...props }: SelectScrollUpArrowProps) {
  return (
    <BaseSelect.ScrollUpArrow
      className={mergeClassName(styles["select__scroll-arrow"], className)}
      {...props}
    />
  );
}
