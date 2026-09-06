import { RadioGroup } from "./radio-group";
import { RadioIndicator } from "./radio-indicator";
import { RadioRoot } from "./radio-root";

/**
 * Compound component for picking exactly one option from a set.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
  * import { Cluster, Radio } from '@vikram-hegde/skeletal'
  *
  * <Radio.Group defaultValue="free" name="plan">
  *   <Cluster as="label" space="0.5rem">
  *     <Radio.Root value="free">
  *       <Radio.Indicator />
  *     </Radio.Root>
  *     Free
  *   </Cluster>
  *   <Cluster as="label" space="0.5rem">
  *     <Radio.Root value="pro">
  *       <Radio.Indicator />
  *     </Radio.Root>
  *     Pro
  *   </Cluster>
  * </Radio.Group>
 * ```
 *
 * The `Group` owns the value and renders the hidden form input — see its
 * docs for react-hook-form / TanStack Form wiring. All parts are thin styled
 * wrappers over Base UI's `Radio` / `RadioGroup`, so every Base UI prop,
 * `render` override, and ref behaves the same. Part prop types are exported
 * separately (`RadioProps`, `RadioGroupProps`, ...).
 */
export const Radio = {
  Root: RadioRoot,
  Group: RadioGroup,
  Indicator: RadioIndicator,
};

export type { RadioGroupProps } from "./radio-group";
export type { RadioIndicatorProps } from "./radio-indicator";
export type { RadioProps } from "./radio-root";
