import type { CheckboxIndicatorProps as BaseCheckboxIndicatorProps } from "@base-ui/react/checkbox";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./checkbox.module.css";

/**
 * The tick mark shown when the checkbox is checked. Renders a `<span>`.
 *
 * By default it draws a check icon, swapped for a dash when the parent
 * `Checkbox.Root` is `indeterminate` (e.g. a "select all" parent). Both are
 * tinted with the root's foreground color, so no color props are needed.
 *
 * Pass your own `children` or `render` to draw something else; they replace
 * the default icons entirely. Unmounts while unchecked unless `keepMounted`
 * is set. Animates in/out via `data-starting-style` / `data-ending-style`.
 *
 * @default keepMounted = false
 */
export interface CheckboxIndicatorProps extends BaseCheckboxIndicatorProps {}

export function CheckboxIndicator({
  className,
  render,
  children,
  ...props
}: CheckboxIndicatorProps) {
  const merged = mergeClassName(styles.checkbox__indicator, className);
  if (render === undefined && children === undefined) {
    return (
      <BaseCheckbox.Indicator
        className={merged}
        render={(defaultProps, state) => (
          <span {...defaultProps}>{state.indeterminate ? <DashIcon /> : <CheckIcon />}</span>
        )}
        {...props}
      />
    );
  }
  return (
    <BaseCheckbox.Indicator className={merged} {...props} render={render}>
      {children}
    </BaseCheckbox.Indicator>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m2.5 8.5 4 4 7-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
