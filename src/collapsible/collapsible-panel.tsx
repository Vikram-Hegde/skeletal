import type { CollapsiblePanelProps as BaseCollapsiblePanelProps } from "@base-ui/react/collapsible";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./collapsible.module.css";

/**
 * The region that expands and collapses. Renders a `<div>` element.
 *
 * Animates its block size between `0` and its content height, and clips
 * overflow while animating. It has no padding of its own, so wrap the content
 * in a layout (e.g. `Stack`) to space it from the trigger.
 *
 * Accepts all Base UI panel props:
 * - `keepMounted`: keep the closed panel in the DOM (for SEO or state that must
 *   survive closing).
 * - `hiddenUntilFound`: hide the closed panel with `hidden="until-found"` so
 *   the browser's find-in-page can reveal it. Overrides `keepMounted`.
 *
 * @default keepMounted = false
 * @default hiddenUntilFound = false
 */
export interface CollapsiblePanelProps extends BaseCollapsiblePanelProps {}

export function CollapsiblePanel({ className, ...props }: CollapsiblePanelProps) {
  return (
    <BaseCollapsible.Panel
      className={mergeClassName(styles.collapsible__panel, className)}
      {...props}
    />
  );
}
