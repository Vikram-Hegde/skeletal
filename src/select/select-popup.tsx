import type { SelectPopupProps as BaseSelectPopupProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * The popup panel that holds the select list. Renders a `<div>` element.
 *
 * Accepts all Base UI popup props, including `finalFocus` for controlling
 * focus when the popup closes. Content animates in/out via the
 * `data-starting-style` / `data-ending-style` transitions.
 *
 * By default the popup is at least as wide as the trigger and never narrower
 * than 13rem (`min-width: max(var(--anchor-width), 13rem)`), so a small trigger
 * still gets a comfortable dropdown. Pass `style={{ width: ... }}` or a
 * `className` to constrain it. In `alignItemWithTrigger` mode (`data-side="none"`)
 * the popup widens by 1.75rem so the selected item aligns with the trigger's
 * value text.
 *
 * @default finalFocus = true
 */
export interface SelectPopupProps extends BaseSelectPopupProps {}

export function SelectPopup({ className, ...props }: SelectPopupProps) {
  return (
    <BaseSelect.Popup className={mergeClassName(styles.select__popup, className)} {...props} />
  );
}
