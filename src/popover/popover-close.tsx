import type { PopoverCloseProps as BasePopoverCloseProps } from "@base-ui/react/popover";
import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";

/**
 * A button that closes the popover. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`, ...).
 * Defaults to the `ghost` variant — use `variant="secondary"` for a footer
 * action or `variant="primary"` for confirmations.
 *
 * When `modal` is `true` or `'trap-focus'` on the root, render a close button
 * inside `<Popover.Popup>` so focus trapping has an escape target and touch
 * screen readers can dismiss the popup. Visually hide it with `sr-only` if
 * needed.
 */
export interface PopoverCloseProps
  extends Omit<ButtonProps, "render" | "className" | "style">,
    Omit<BasePopoverCloseProps, "className" | "style" | "render" | "nativeButton"> {
  /** Class applied to the close button. */
  className?: string;
  /** Style applied to the close button. */
  style?: React.CSSProperties;
}

export function PopoverClose({
  className,
  style,
  variant = "ghost",
  size = "md",
  fullWidth = false,
  ...props
}: PopoverCloseProps) {
  return (
    <BasePopover.Close
      render={(buttonProps, _state) => (
        <Button
          {...buttonProps}
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          className={className}
          style={style}
        />
      )}
      {...props}
    />
  );
}
