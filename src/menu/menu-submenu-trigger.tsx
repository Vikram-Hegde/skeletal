import type { MenuSubmenuTriggerProps as BaseMenuSubmenuTriggerProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A menu item that opens a submenu. Renders a `<div>` element.
 *
 * Accepts all Base UI submenu-trigger props: `disabled`, `label`, `openOnHover`,
 * `delay`, and `closeDelay`. A right-pointing caret is added automatically and
 * rotates as the submenu opens.
 *
 * Per the Base UI anatomy, the submenu's `Menu.Portal`/`Positioner`/`Popup`
 * live inside a `Menu.SubmenuRoot` that wraps this trigger.
 */
export interface MenuSubmenuTriggerProps extends BaseMenuSubmenuTriggerProps {}

export function MenuSubmenuTrigger({ className, ...props }: MenuSubmenuTriggerProps) {
  return (
    <BaseMenu.SubmenuTrigger
      className={mergeClassName(styles["menu__submenu-trigger"], className)}
      {...props}
    />
  );
}
