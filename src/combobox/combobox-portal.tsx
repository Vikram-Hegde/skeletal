import type { ComboboxPortalProps as BaseComboboxPortalProps } from "@base-ui/react/combobox";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./combobox.module.css";

/**
 * Moves the combobox popup to a different part of the DOM, appended to `<body>`
 * by default. Renders a `<div>` element.
 *
 * `container` overrides the portal target. `keepMounted` keeps the portal in
 * the DOM while closed.
 *
 * @default keepMounted = false
 */
export interface ComboboxPortalProps extends BaseComboboxPortalProps {}

export function ComboboxPortal({ className, ...props }: ComboboxPortalProps) {
  return (
    <BaseCombobox.Portal
      className={mergeClassName(styles.combobox__portal, className)}
      {...props}
    />
  );
}
