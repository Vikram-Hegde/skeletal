import type { SelectTriggerProps as BaseSelectTriggerProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import type { ButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A button that opens the select popup. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`,
 * `onClick`, ...) plus the select-trigger props from Base UI. Defaults to the
 * `outline` variant.
 *
 * Put a `Select.Value` and a `Select.Icon` inside to render the selected value
 * and the disclosure chevron. The trigger lays them out with the value
 * left-aligned and the icon pushed to the right edge.
 */
export interface SelectTriggerProps
  extends ButtonProps,
    Omit<BaseSelectTriggerProps, "className" | "style" | "render" | "nativeButton"> {}

export function SelectTrigger({
  className,
  variant = "outline",
  size = "md",
  fullWidth = false,
  ...props
}: SelectTriggerProps) {
  return (
    <BaseSelect.Trigger
      render={
        <Button
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          className={mergeClassName(styles.select__trigger, className)}
        />
      }
      {...props}
    />
  );
}
