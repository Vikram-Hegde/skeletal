import type { SwitchThumbProps as BaseSwitchThumbProps } from "@base-ui/react/switch";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./switch.module.css";

/**
 * The knob that slides along the track. Renders a `<span>`. Place exactly one
 * inside a `Switch.Root` — the track animates its position via
 * `data-checked` (`translate`), tinted from theme tokens so no color props
 * are needed.
 */
export interface SwitchThumbProps extends BaseSwitchThumbProps {}

export function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  return (
    <BaseSwitch.Thumb className={mergeClassName(styles.switch__thumb, className)} {...props} />
  );
}
