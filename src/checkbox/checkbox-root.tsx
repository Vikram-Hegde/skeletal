import type { CheckboxRootProps as BaseCheckboxRootProps } from "@base-ui/react/checkbox";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./checkbox.module.css";
import { CheckboxIndicator } from "./checkbox-indicator";

/**
 * A single checkbox control. Renders a `<span>` with a hidden `<input>`
 * beside it, so it participates in native form submission and validation
 * (`required`, `name` / `value`) without any extra wiring.
 *
 * Works directly with headless form libraries — the hidden input carries
 * `name` and submits `value` when ticked:
 *
 * - **React Hook Form** — wrap with `Controller` and map the change handler:
 *
 * ```tsx
 * <Controller
 *   control={control}
 *   name="terms"
 *   render={({ field }) => (
 *     <Checkbox.Root
 *       checked={field.value}
 *       onCheckedChange={(checked) => field.onChange(checked)}
 *       onBlur={field.onBlur}
 *       inputRef={field.ref}
 *     />
 *   )}
 * />
 * ```
 *
 * - **TanStack Form** — drive it from `form.Field` state:
 *
 * ```tsx
 * <form.Field name="terms">
 *   {(field) => (
 *     <Checkbox.Root
 *       checked={field.state.value}
 *       onCheckedChange={(checked) => field.handleChange(checked)}
 *       onBlur={field.handleBlur}
 *     />
 *   )}
 * </form.Field>
 * ```
 *
 * - **Formisch** / uncontrolled forms — just pass `name`; the hidden input
 *   submits `value` (or `"on"`) when checked, exactly like a native checkbox.
 *
 * Validation styling (`data-invalid`, `data-valid`, ...) activates when the
 * checkbox is wrapped in Base UI's `Field.Root`.
 */
export interface CheckboxProps extends BaseCheckboxRootProps {}

export function CheckboxRoot({ className, children, ...props }: CheckboxProps) {
  return (
    <BaseCheckbox.Root className={mergeClassName(styles.checkbox__root, className)} {...props}>
      {children ?? <CheckboxIndicator />}
    </BaseCheckbox.Root>
  );
}
