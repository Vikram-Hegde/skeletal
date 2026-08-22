import type { MenuViewportProps as BaseMenuViewportProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A transition container for menu content. Renders a `<div>` element.
 *
 * This part is only required when one popup is opened by multiple triggers,
 * its content changes based on the trigger, and switching between them is
 * animated (e.g. a shared menu for several `Menu.Trigger`s via `handle`).
 *
 * When used, the popup should be sized with the `--popup-width` /
 * `--popup-height` variables so content changes don't thrash the layout.
 */
export interface MenuViewportProps extends BaseMenuViewportProps {}

export function MenuViewport({ className, ...props }: MenuViewportProps) {
  return (
    <BaseMenu.Viewport className={mergeClassName(styles.menu__viewport, className)} {...props} />
  );
}
