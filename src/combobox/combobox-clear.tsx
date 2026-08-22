import type { ComboboxClearProps as BaseComboboxClearProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import type { ButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A button that clears the current selection (and input text). Renders a
 * `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props plus the combobox-clear props from Base UI
 * (`keepMounted`, `disabled`). Defaults to the `ghost` `sm` variant, compacted
 * into an icon-sized square when inside a `Combobox.InputGroup`.
 *
 * It is only visible when there is a value to clear (single/multi select) or
 * non-empty input text; pass `keepMounted` to keep it in the DOM and drive its
 * show/hide styling yourself. Give it an `aria-label` and an `x` icon child.
 *
 * @default keepMounted = false
 */
export interface ComboboxClearProps
  extends ButtonProps,
    Omit<BaseComboboxClearProps, "className" | "style" | "render" | "nativeButton"> {}

export function ComboboxClear({
  className,
  variant = "ghost",
  size = "sm",
  fullWidth = false,
  ...props
}: ComboboxClearProps) {
  return (
    <BaseCombobox.Clear
      render={
        <Button
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          className={mergeClassName(styles.combobox__clear, className)}
        />
      }
      {...props}
    />
  );
}
