import type { ComboboxIconProps as BaseComboboxIconProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A disclosure icon indicating the trigger opens the popup. Renders a `<span>`
 * element.
 *
 * Place it inside a `Combobox.Trigger`, e.g. with a chevron:
 *
 * ```tsx
 * <Combobox.Icon>
 *   <Icon name={CaretDown} size={16} />
 * </Combobox.Icon>
 * ```
 *
 * When the icon is a direct child of the trigger, it rotates 180° while the
 * popup is open.
 */
export interface ComboboxIconProps extends BaseComboboxIconProps {}

export function ComboboxIcon({ className, ...props }: ComboboxIconProps) {
  return (
    <BaseCombobox.Icon className={mergeClassName(styles.combobox__icon, className)} {...props} />
  );
}
