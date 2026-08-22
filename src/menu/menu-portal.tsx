import type { MenuPortalProps as BaseMenuPortalProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * Moves the menu popup to a different part of the DOM, appended to `<body>`
 * by default. Renders a `<div>` element.
 *
 * `keepMounted` keeps the portal in the DOM while the menu is closed (useful
 * for exit animations). `container` overrides the portal target.
 *
 * @default keepMounted = false
 */
export interface MenuPortalProps extends BaseMenuPortalProps {}

export function MenuPortal({ className, ...props }: MenuPortalProps) {
  return <BaseMenu.Portal className={mergeClassName(styles.menu__portal, className)} {...props} />;
}
