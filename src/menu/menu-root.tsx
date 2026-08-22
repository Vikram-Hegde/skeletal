import type { MenuRootProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";

/**
 * The root of the menu, grouping all parts together. Renders no DOM element.
 *
 * All Base UI root props are supported: `open`, `defaultOpen`, `modal`,
 * `onOpenChange`, `onOpenChangeComplete`, `orientation`, `loopFocus`,
 * `highlightItemOnHover`, `actionsRef`, `handle`, `triggerId`, and `disabled`.
 *
 * Use `open` + `onOpenChange` to control the menu; otherwise it is
 * uncontrolled. `modal` is `true` by default (pointer outside is blocked and
 * page scroll is locked while open); set `modal={false}` for a non-blocking
 * dropdown that dismisses when you click elsewhere.
 *
 * @default modal = true
 */
export interface MenuProps<Payload = unknown> extends MenuRootProps<Payload> {}

export function MenuRoot<Payload>(props: MenuProps<Payload>) {
  return <BaseMenu.Root {...props} />;
}
