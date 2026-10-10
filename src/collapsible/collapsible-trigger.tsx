import type { CollapsibleTriggerProps as BaseCollapsibleTriggerProps } from "@base-ui/react/collapsible";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import type { ButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./collapsible.module.css";

/**
 * A button that opens and closes the collapsible panel. Renders a `<button>`
 * element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`, ...)
 * plus the collapsible-trigger props from Base UI. A chevron is appended after
 * the children and rotates when the panel is open, so pass only the label.
 *
 * Defaults to the `outline` variant. Use `fullWidth` for accordion-style
 * stacked headers, where the chevron sits at the trailing edge.
 *
 * @default variant = 'outline'
 * @default size = 'md'
 * @default fullWidth = false
 */
export interface CollapsibleTriggerProps
  extends ButtonProps,
    Omit<BaseCollapsibleTriggerProps, "className" | "style" | "render" | "nativeButton"> {}

export function CollapsibleTrigger({
  className,
  variant = "outline",
  size = "md",
  fullWidth = false,
  children,
  ...props
}: CollapsibleTriggerProps) {
  return (
    <BaseCollapsible.Trigger
      render={
        <Button
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          className={mergeClassName(styles.collapsible__trigger, className)}
        />
      }
      {...props}
    >
      {children}
      <span className={styles.collapsible__indicator} aria-hidden="true" />
    </BaseCollapsible.Trigger>
  );
}
