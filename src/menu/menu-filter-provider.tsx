import type { MenuFilterProviderProps as BaseMenuFilterProviderProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";

/**
 * Enables filtering for the menu or submenu it wraps. Renders no DOM element.
 *
 * Wrap `<Menu.Root>` in it, add `<Menu.Input>` to the popup, and place the
 * items inside `<Menu.List>`. Wrap each searchable submenu in its own provider.
 *
 * Accepts all Base UI filter props: `filter`, `autoHighlight`, `locale`,
 * `defaultValue`, `value`, and `onValueChange`. Pass `filter={null}` when
 * rendering filtered items yourself.
 *
 * @default filter = match items containing the query, ignoring case, accents, and punctuation
 * @default autoHighlight = false
 */
export interface MenuFilterProviderProps extends BaseMenuFilterProviderProps {}

export function MenuFilterProvider(props: MenuFilterProviderProps) {
  return <BaseMenu.FilterProvider {...props} />;
}
