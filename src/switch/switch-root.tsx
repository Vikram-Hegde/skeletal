import type { SwitchRootProps as BaseSwitchRootProps } from "@base-ui/react/switch";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./switch.module.css";
import { SwitchThumb } from "./switch-thumb";

/**
 * An on/off toggle for instant-effect settings (not form data — use
 * `Checkbox` when the value is submitted). Renders a `<span>` with a hidden
 * `<input>` beside it, so it still participates in native form submission
 * and validation (`name` / `value`, submits `"on"` by default) without extra
 * wiring.
 *
 * Works directly with headless form libraries — the hidden input carries the
 * value; libraries only need the controlled pair and blur/ref:
 *
 * - **React Hook Form** — wrap with `Controller` and map the change handler:
 *
 * ```tsx
 * <Controller
 *   control={control}
 *   name="notifications"
 *   render={({ field }) => (
 *     <Switch.Root
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
 * <form.Field name="notifications">
 *   {(field) => (
 *     <Switch.Root
 *       checked={field.state.value}
 *       onCheckedChange={(checked) => field.handleChange(checked)}
 *       onBlur={field.handleBlur}
 *     />
 *   )}
 * </form.Field>
 * ```
 *
 * - **Formisch** / uncontrolled forms — just pass `name`; the hidden input
 *   submits `value` (default `"on"`) when on, like a native checkbox.
 *
 * Validation styling (`data-invalid`, `data-valid`, ...) activates when the
 * switch is wrapped in Base UI's `Field.Root`. Label it with an enclosing
 * `<label>`.
 */
export interface SwitchProps extends BaseSwitchRootProps {}

export function SwitchRoot({ className, children, ...props }: SwitchProps) {
  return (
    <BaseSwitch.Root className={mergeClassName(styles.switch__root, className)} {...props}>
      {children ?? <SwitchThumb />}
    </BaseSwitch.Root>
  );
}
