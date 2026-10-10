import { CollapsiblePanel } from "./collapsible-panel";
import { CollapsibleRoot } from "./collapsible-root";
import { CollapsibleTrigger } from "./collapsible-trigger";

/**
 * Compound component for a region that expands and collapses.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Collapsible, Stack } from '@vikram-hegde/skeletal'
 *
 * <Collapsible.Root>
 *   <Collapsible.Trigger>Shipping details</Collapsible.Trigger>
 *   <Collapsible.Panel>
 *     <Stack space="0.5rem">Standard shipping takes 3–5 business days.</Stack>
 *   </Collapsible.Panel>
 * </Collapsible.Root>
 * ```
 *
 * Composition follows the Base UI anatomy: the `Trigger` toggles the `Panel`
 * and both share state through `Root`. Use the Root's `open` + `onOpenChange`
 * to control it, or `defaultOpen` to start open.
 *
 * All parts are thin styled wrappers over Base UI's `Collapsible`, so every
 * Base UI prop, `render` override, and ref behaves the same. Part prop types
 * are exported separately (`CollapsibleProps`, ...).
 */
export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
};

export type { CollapsibleProps } from "./collapsible-root";
export type { CollapsiblePanelProps } from "./collapsible-panel";
export type { CollapsibleTriggerProps } from "./collapsible-trigger";
