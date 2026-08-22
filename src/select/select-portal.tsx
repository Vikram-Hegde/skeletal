import type { SelectPortalProps as BaseSelectPortalProps } from "@base-ui/react/select";
import { Select as BaseSelect } from "@base-ui/react/select";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./select.module.css";

/**
 * Moves the select popup to a different part of the DOM, appended to `<body>`
 * by default. Renders a `<div>` element.
 *
 * `container` overrides the portal target.
 */
export interface SelectPortalProps extends BaseSelectPortalProps {}

export function SelectPortal({ className, ...props }: SelectPortalProps) {
  return (
    <BaseSelect.Portal className={mergeClassName(styles.select__portal, className)} {...props} />
  );
}
