import type { ButtonState } from "@base-ui/react/button";
import type { TooltipTriggerProps as BaseTooltipTriggerProps } from "@base-ui/react/tooltip";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ButtonProps as SkeletalButtonProps } from "@elemental/button/button";
import { Button } from "@elemental/button/button";
import type { CSSProperties } from "react";

/**
 * The element that opens the tooltip when hovered or focused. Renders a
 * `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`, ...)
 * plus the tooltip-trigger props from Base UI (`handle`, `payload`, `delay`,
 * `closeDelay`, `closeOnClick`, `disabled`, `id`). Defaults to the `ghost`
 * variant — use `variant="outline"` for a bordered icon button.
 *
 * The trigger must carry an `aria-label` matching the tooltip content so
 * screen-reader users get an accessible name; the tooltip itself is
 * visual-only.
 *
 * @default variant = 'ghost'
 * @default size = 'sm'
 * @default delay = 600
 * @default closeDelay = 0
 * @default closeOnClick = true
 */
export interface TooltipTriggerProps<Payload = unknown>
  extends Omit<SkeletalButtonProps, "className" | "style" | "render">,
    Omit<BaseTooltipTriggerProps<Payload>, "className" | "style" | "render"> {
  /** Class applied to the trigger button, or a function of the button state. */
  className?: string | ((state: ButtonState) => string | undefined);
  /** Style applied to the trigger button, or a function of the button state. */
  style?: CSSProperties | ((state: ButtonState) => CSSProperties | undefined);
}

export function TooltipTrigger<Payload>({
  className,
  style,
  variant = "ghost",
  size = "sm",
  fullWidth = false,
  ...props
}: TooltipTriggerProps<Payload>) {
  return (
    <BaseTooltip.Trigger
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
