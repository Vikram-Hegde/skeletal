import type { MenuGroupLabelProps as BaseMenuGroupLabelProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * A label for a `<Menu.Group>`, automatically associated with it for screen
 * readers. Renders a `<div>` element.
 *
 * Styled small and muted; add a `Menu.Separator` before the group to visually
 * divide it from the items above.
 */
export interface MenuGroupLabelProps extends BaseMenuGroupLabelProps {}

export function MenuGroupLabel({ className, ...props }: MenuGroupLabelProps) {
  return (
    <BaseMenu.GroupLabel
      className={mergeClassName(styles["menu__group-label"], className)}
      {...props}
    />
  );
}
