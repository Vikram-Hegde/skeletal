import type { CheckboxGroupProps as BaseCheckboxGroupProps } from "@base-ui/react/checkbox-group";
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./checkbox.module.css";

/**
 * Shared state for a series of checkboxes. Renders a `<div>` laid out as a
 * vertical stack.
 *
 * Place `Checkbox.Root` items inside; each child submits under its own
 * `name` / `value`. For form libraries, treat the group as one array-valued
 * field — e.g. with React Hook Form's `Controller`, keep the group controlled
 * and map `onValueChange` to `field.onChange`:
 *
 * ```tsx
 * <Controller
 *   control={control}
 *   name="protocols"
 *   render={({ field }) => (
 *     <Checkbox.Group value={field.value} onValueChange={field.onChange} onBlur={field.onBlur}>
 *       <label><Checkbox.Root value="http" /> HTTP</label>
 *       <label><Checkbox.Root value="https" /> HTTPS</label>
 *     </Checkbox.Group>
 *   )}
 * />
 * ```
 *
 * TanStack Form works the same way via `form.Field` (`field.state.value`,
 * `field.handleChange`). For a "select all" parent checkbox, pass `allValues`
 * (every child value) and add the `parent` prop on that checkbox — the group
 * then drives its indeterminate state automatically.
 *
 * Label the group accessibly with `aria-labelledby` or by wrapping in Base
 * UI's `Fieldset.Root`.
 */
export interface CheckboxGroupProps extends BaseCheckboxGroupProps {}

export function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
  return (
    <BaseCheckboxGroup className={mergeClassName(styles.checkbox__group, className)} {...props} />
  );
}
