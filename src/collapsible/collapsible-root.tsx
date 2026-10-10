import type { CollapsibleRootProps as BaseCollapsibleRootProps } from "@base-ui/react/collapsible";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";

/**
 * The root of the collapsible, sharing open state between its parts. Renders a
 * `<div>` element.
 *
 * Deliberately unstyled: it is a plain container, so compose the parts with
 * whatever layout you need (e.g. `Stack`) around it.
 *
 * All Base UI root props are supported: `open`, `defaultOpen`,
 * `onOpenChange`, `disabled`, and `render`. Use `open` + `onOpenChange` to
 * control the panel; otherwise it is uncontrolled.
 *
 * @default defaultOpen = false
 * @default disabled = false
 */
export interface CollapsibleProps extends BaseCollapsibleRootProps {}

export function CollapsibleRoot(props: CollapsibleProps) {
  return <BaseCollapsible.Root {...props} />;
}
