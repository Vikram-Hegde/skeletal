import type { RadioIndicatorProps as BaseRadioIndicatorProps } from "@base-ui/react/radio";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./radio.module.css";

/**
 * The dot shown when the radio is selected. Renders a `<span>` whose `::before`
 * draws a circle tinted with the root's foreground color — pass `children` or
 * `render` to draw something else instead. Unmounts while unchecked unless
 * `keepMounted` is set. Animates in/out via `data-starting-style` /
 * `data-ending-style`.
 *
 * @default keepMounted = false
 */
export interface RadioIndicatorProps extends BaseRadioIndicatorProps {}

export function RadioIndicator({ className, ...props }: RadioIndicatorProps) {
  return (
    <BaseRadio.Indicator
      className={mergeClassName(styles.radio__indicator, className)}
      {...props}
    />
  );
}
