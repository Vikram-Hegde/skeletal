import type { DrawerTriggerProps as BaseDrawerTriggerProps } from "@base-ui/react/drawer";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import type { ButtonProps } from "@elemental/button/button";
import { Button } from "@elemental/button/button";

/**
 * A button that opens the drawer. Renders a `<button>` element.
 *
 * Composed from the `Button` component via Base UI's `render` prop, so it
 * accepts all `Button` props (`variant`, `size`, `fullWidth`, `disabled`,
 * `onClick`, ...) plus the drawer-trigger props from Base UI (`payload`,
 * `handle`, `id`). Defaults to the `primary` variant.
 *
 * The `payload` prop lets you pass data from the trigger to the drawer's
 * render-prop content.
 */
export interface DrawerTriggerProps<Payload = unknown>
  extends ButtonProps,
    Omit<BaseDrawerTriggerProps<Payload>, "className" | "style" | "render" | "nativeButton"> {}

export function DrawerTrigger<Payload>({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: DrawerTriggerProps<Payload>) {
  return (
    <BaseDrawer.Trigger
      render={<Button variant={variant} size={size} fullWidth={fullWidth} className={className} />}
      {...props}
    />
  );
}
