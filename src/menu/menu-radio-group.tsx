import type { MenuRadioGroupProps as BaseMenuRadioGroupProps } from "@base-ui/react/menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./menu.module.css";

/**
 * Groups `Menu.RadioItem`s so selecting one deselects the others. Renders a
 * `<div>` element.
 *
 * Accepts all Base UI radio-group props: `value`, `defaultValue`, and
 * `onValueChange` for controlled/uncontrolled selection, plus `disabled`.
 *
 * Rendered with `display: contents` so its items participate directly in the
 * popup grid, letting radio items share the tick-mark column via subgrid.
 */
export interface MenuRadioGroupProps extends BaseMenuRadioGroupProps {}

export function MenuRadioGroup({ className, ...props }: MenuRadioGroupProps) {
  return (
    <BaseMenu.RadioGroup
      className={mergeClassName(styles["menu__radio-group"], className)}
      {...props}
    />
  );
}
