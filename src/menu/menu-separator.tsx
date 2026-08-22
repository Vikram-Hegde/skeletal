import { Menu as BaseMenu } from "@base-ui/react/menu";
import type { SeparatorProps as BaseSeparatorProps } from "@base-ui/react/separator";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A horizontal divider between groups of menu items. Renders a `<div>` element.
 *
 * Accepts the Base UI separator `orientation` prop (`'horizontal'` default,
 * `'vertical'` for menubar-style layouts). It is announced to screen readers
 * via `role="separator"`.
 *
 * @default orientation = 'horizontal'
 */
export interface MenuSeparatorProps extends BaseSeparatorProps {}

export function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
  return (
    <BaseMenu.Separator className={mergeClassName(styles.menu__separator, className)} {...props} />
  );
}
