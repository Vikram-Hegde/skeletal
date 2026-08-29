import { CaretDown } from "@phosphor-icons/react";
import type { ComboboxTriggerProps as BaseComboboxTriggerProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import type { ButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";
import { Icon } from "@skeletal/icon/icon";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A button that opens the combobox popup. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`, ...)
 * plus the combobox-trigger props from Base UI. Defaults to the `ghost` `sm`
 * variant, which — when placed inside a `Combobox.InputGroup` — compacts into
 * an icon-sized square button. For the "input inside popup" (select-like)
 * pattern, pass `variant="outline"` / `size="md"` and wrap a
 * `<Combobox.Value>` inside.
 *
 * The disclosure `CaretDown` chevron is always rendered by the trigger itself
 * (via `BaseCombobox.Icon`, rotating 180° when open) — no `Combobox.Icon`
 * prop is needed.
 */
export interface ComboboxTriggerProps
  extends ButtonProps,
    Omit<BaseComboboxTriggerProps, "className" | "style" | "render" | "nativeButton"> {}

export function ComboboxTrigger({
  className,
  variant = "ghost",
  size = "sm",
  fullWidth = false,
  children,
  ...props
}: ComboboxTriggerProps) {
  return (
    <BaseCombobox.Trigger
      render={
        <Button
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          className={mergeClassName(styles.combobox__trigger, className)}
        />
      }
      {...props}
    >
      {children}
      <BaseCombobox.Icon className={styles.combobox__icon}>
        <Icon name={CaretDown} size={16} />
      </BaseCombobox.Icon>
    </BaseCombobox.Trigger>
  );
}
