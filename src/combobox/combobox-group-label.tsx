import type { ComboboxGroupLabelProps as BaseComboboxGroupLabelProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * A label for a `<Combobox.Group>`, automatically associated with it for screen
 * readers. Renders a `<div>` element.
 *
 * Styled small and muted; add a `Combobox.Separator` before the group to
 * visually divide it from the items above.
 */
export interface ComboboxGroupLabelProps extends BaseComboboxGroupLabelProps {}

export function ComboboxGroupLabel({ className, ...props }: ComboboxGroupLabelProps) {
  return (
    <BaseCombobox.GroupLabel
      className={mergeClassName(styles["combobox__group-label"], className)}
      {...props}
    />
  );
}
