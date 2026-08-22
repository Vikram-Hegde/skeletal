import type { MenuSubmenuRootProps as BaseMenuSubmenuRootProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";

/**
 * The root of a nested submenu, grouping all its parts together. Renders no
 * DOM element.
 *
 * Place it inside a `<Menu.Popup>` as a sibling of the `Menu.SubmenuTrigger`
 * that opens it. All Base UI submenu-root props are supported: `open`,
 * `defaultOpen`, `onOpenChange`, `onOpenChangeComplete`, `loopFocus`,
 * `highlightItemOnHover`, `closeParentOnEsc`, `orientation`, and `disabled`.
 *
 * Submenus open on hover by default and never use a modal state.
 */
export interface MenuSubmenuRootProps extends BaseMenuSubmenuRootProps {}

export function MenuSubmenuRoot(props: MenuSubmenuRootProps) {
  return <BaseMenu.SubmenuRoot {...props} />;
}
