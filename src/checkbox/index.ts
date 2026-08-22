import { CheckboxGroup } from "./checkbox-group";
import { CheckboxIndicator } from "./checkbox-indicator";
import { CheckboxRoot } from "./checkbox-root";

/**
 * Compound component for ticking one or many independent options.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Checkbox } from '@vikram-hegde/skeletal'
 *
 * <label>
 *   <Checkbox.Root defaultChecked name="terms" required />
 *   Accept terms and conditions
 * </label>
 * ```
 *
 * Wrap several checkboxes in `Checkbox.Group` to manage them as one
 * array-valued field (see the Group docs for react-hook-form / TanStack Form
 * wiring), and add a parent checkbox with the `parent` prop + `allValues` on
 * the group for "select all" behavior.
 *
 * All parts are thin styled wrappers over Base UI's `Checkbox`, so every Base
 * UI prop, `render` override, and ref behaves the same. The hidden native
 * input keeps native form submission and library integrations working. Part
 * prop types are exported separately (`CheckboxProps`,
 * `CheckboxGroupProps`, ...).
 */
export const Checkbox = {
  Root: CheckboxRoot,
  Group: CheckboxGroup,
  Indicator: CheckboxIndicator,
};

export type { CheckboxGroupProps } from "./checkbox-group";
export type { CheckboxIndicatorProps } from "./checkbox-indicator";
export type { CheckboxProps } from "./checkbox-root";
