import type { MenuItemProps as BaseMenuItemProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import { clsx } from "clsx";
import styles from "./menu.module.css";

/**
 * An individual interactive item in the menu. Renders a `<div>` element.
 *
 * Accepts all Base UI item props: `onClick`, `disabled`, `closeOnClick`
 * (defaults to `true`), and `label` for keyboard text navigation.
 *
 * Set `danger` for destructive actions (e.g. delete, remove) — the item takes
 * on the destructive color, and stays destructive when highlighted.
 *
 * @default closeOnClick = true
 * @default danger = false
 */
export interface MenuItemProps extends BaseMenuItemProps {
  /**
   * Whether the item is a destructive action. @default false
   */
  danger?: boolean;
}

export function MenuItem({ className, danger = false, ...props }: MenuItemProps) {
  return (
    <BaseMenu.Item
      className={mergeClassName(
        clsx(styles.menu__item, danger && styles["menu__item--danger"]),
        className,
      )}
      {...props}
    />
  );
}
