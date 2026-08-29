import type { ButtonState } from "@base-ui/react/button";
import type { PopoverTriggerProps as BasePopoverTriggerProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ButtonProps as SkeletalButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";
import type { CSSProperties } from "react";

/**
 * A button that opens the popover. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`,
 * `onClick`, ...) plus the popover-trigger props from Base UI (`payload`,
 * `handle`, `openOnHover`, `delay`, `closeDelay`, `id`). Defaults to the
 * `outline` variant.
 *
 * Set `openOnHover` to open on hover (useful for preview cards); tune it with
 * `delay` and `closeDelay`. `payload` lets you pass data from the trigger to
 * a render-prop `children` on the root.
 *
 * @default variant = 'outline'
 * @default size = 'md'
 * @default openOnHover = false
 * @default delay = 300
 * @default closeDelay = 0
 */
export interface PopoverTriggerProps<Payload = unknown>
  extends Omit<SkeletalButtonProps, "className" | "style" | "render">,
    Omit<BasePopoverTriggerProps<Payload>, "className" | "style" | "render" | "nativeButton"> {
  /** Class applied to the trigger button, or a function of the button state. */
  className?: string | ((state: ButtonState) => string | undefined);
  /** Style applied to the trigger button, or a function of the button state. */
  style?: CSSProperties | ((state: ButtonState) => CSSProperties | undefined);
}

export function PopoverTrigger<Payload>({
  className,
  style,
  variant = "outline",
  size = "md",
  fullWidth = false,
  ...props
}: PopoverTriggerProps<Payload>) {
  return (
    <BasePopover.Trigger
      {...props}
      render={
        <Button
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          className={className}
          style={style}
        />
      }
    />
  );
}
