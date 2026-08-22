import type { SelectIconProps as BaseSelectIconProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * A disclosure icon indicating the trigger opens a select popup. Renders a
 * `<span>` element.
 *
 * Place it inside the trigger after `Select.Value`, e.g. with a chevron:
 *
 * ```tsx
 * <Select.Icon>
 *   <Icon name={CaretDown} size={16} />
 * </Select.Icon>
 * ```
 *
 * The icon rotates 180° while the popup is open (`data-popup-open`).
 */
export interface SelectIconProps extends BaseSelectIconProps {}

export function SelectIcon({ className, ...props }: SelectIconProps) {
  return <BaseSelect.Icon className={mergeClassName(styles.select__icon, className)} {...props} />;
}
