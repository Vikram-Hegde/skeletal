import type { MenuArrowProps as BaseMenuArrowProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A small arrow pointing from the popup to the trigger. Renders a `<div>`
 * element.
 *
 * Place it inside `<Menu.Popup>` (before the items). It orients itself based
 * on the popup's `data-side` attribute, so it works for any placement. Pair
 * with a larger `sideOffset` on the `Menu.Positioner` so the arrow has room.
 */
export interface MenuArrowProps extends BaseMenuArrowProps {}

export function MenuArrow({ className, ...props }: MenuArrowProps) {
  return <BaseMenu.Arrow className={mergeClassName(styles.menu__arrow, className)} {...props} />;
}
