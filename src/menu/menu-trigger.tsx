import type { MenuTriggerProps as BaseMenuTriggerProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import type { ButtonProps } from "@skeletal/button/button";
import { Button } from "@skeletal/button/button";

/**
 * A button that opens the menu. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`,
 * `onClick`, ...) plus the menu-trigger props from Base UI (`payload`,
 * `handle`, `openOnHover`, `delay`, `closeDelay`, `id`). Defaults to the
 * `outline` variant; for a plain text trigger pass `variant="ghost"`.
 *
 * Set `openOnHover` to open the menu when the pointer hovers the trigger
 * (useful for nav-menus); tune it with `delay` and `closeDelay`.
 */
export interface MenuTriggerProps<Payload = unknown>
  extends ButtonProps,
    Omit<BaseMenuTriggerProps<Payload>, "className" | "style" | "render" | "nativeButton"> {}

export function MenuTrigger<Payload>({
  className,
  variant = "outline",
  size = "md",
  fullWidth = false,
  ...props
}: MenuTriggerProps<Payload>) {
  return (
    <BaseMenu.Trigger
      render={<Button variant={variant} size={size} fullWidth={fullWidth} className={className} />}
      {...props}
    />
  );
}
