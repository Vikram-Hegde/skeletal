import type { RadioRootProps as BaseRadioRootProps } from "@base-ui/react/radio";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./radio.module.css";
import { RadioIndicator } from "./radio-indicator";

/**
 * A single radio button — must sit inside a `Radio.Group`. Renders a `<span>`
 * with a hidden `<input>` beside it, so it participates in native form
 * submission and validation without extra wiring.
 *
 * Works directly with headless form libraries. Unlike checkboxes, radios are
 * always string-valued and identified by their `value`, so libraries only
 * need the group-level handlers:
 *
 * - **React Hook Form** — control the group (see `Radio.Group`) and give each
 *   option its `value`; no per-item registration is needed:
 *
 * ```tsx
 * <Controller
 *   control={control}
 *   name="plan"
 *   render={({ field }) => (
 *     <Radio.Group value={field.value} onValueChange={field.onChange} onBlur={field.onBlur}>
  *       <Cluster as="label" space="0.5rem"><Radio.Root value="free" /> Free</Cluster>
  *       <Cluster as="label" space="0.5rem"><Radio.Root value="pro" /> Pro</Cluster>
 *     </Radio.Group>
 *   )}
 * />
 * ```
 *
 * - **TanStack Form** — same shape via `form.Field` (`field.state.value`,
 *   `field.handleChange`). **Formisch** / uncontrolled forms — just set the
 *   group's `name`; the selected radio's hidden input submits natively.
 *
 * Validation styling (`data-invalid`, `data-valid`, ...) activates when the
 * radio is wrapped in Base UI's `Field.Root`.
 */
export interface RadioProps<Value = unknown> extends BaseRadioRootProps<Value> {}

export function RadioRoot<Value>({ className, children, ...props }: RadioProps<Value>) {
  return (
    <BaseRadio.Root className={mergeClassName(styles.radio__root, className)} {...props}>
      {children ?? <RadioIndicator />}
    </BaseRadio.Root>
  );
}
