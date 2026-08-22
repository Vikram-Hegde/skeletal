import type { RadioGroupProps as BaseRadioGroupProps } from "@base-ui/react/radio-group";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./radio.module.css";

/**
 * Shared state for a series of radio buttons. Renders a `<div>` laid out as a
 * vertical stack.
 *
 * Place `Radio.Root` items inside; the group owns the selected value, so form
 * libraries only wire up the group — individual radios just declare their
 * `value`:
 *
 * ```tsx
 * // react-hook-form
 * <Controller
 *   control={control}
 *   name="plan"
 *   render={({ field }) => (
 *     <Radio.Group value={field.value} onValueChange={field.onChange} onBlur={field.onBlur}>
 *       <label><Radio.Root value="free" /> Free</label>
 *       <label><Radio.Root value="pro" /> Pro</label>
 *     </Radio.Group>
 *   )}
 * />
 * ```
 *
 * TanStack Form works the same way via `form.Field` (`field.state.value`,
 * `field.handleChange`). For Formisch / uncontrolled forms, pass `name` —
 * the hidden input submits the selected radio's value natively.
 *
 * Label the group accessibly with `aria-labelledby` or by wrapping in Base
 * UI's `Fieldset.Root`.
 */
export interface RadioGroupProps<Value = unknown> extends BaseRadioGroupProps<Value> {}

export function RadioGroup<Value>({ className, ...props }: RadioGroupProps<Value>) {
  return <BaseRadioGroup className={mergeClassName(styles.radio__group, className)} {...props} />;
}
