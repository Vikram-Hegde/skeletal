import type { SelectBackdropProps as BaseSelectBackdropProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * An overlay rendered beneath the select popup, used when the select is modal.
 * Renders a `<div>` element.
 *
 * Only needed when `Select.Root` is modal (the default). Clicking the backdrop
 * dismisses the popup. The overlay is translucent; set a fully opaque color
 * (or remove it) if you prefer a "dimmed page" look vs. a light scrim.
 */
export interface SelectBackdropProps extends BaseSelectBackdropProps {}

export function SelectBackdrop({ className, ...props }: SelectBackdropProps) {
  return (
    <BaseSelect.Backdrop
      className={mergeClassName(styles.select__backdrop, className)}
      {...props}
    />
  );
}
