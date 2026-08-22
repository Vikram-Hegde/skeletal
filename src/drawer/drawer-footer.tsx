import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./drawer.module.css";

/**
 * A sticky footer bar for drawer actions. Renders a `<div>` element.
 *
 * Render it as a direct child of `Drawer.Popup`, after `Drawer.Content`. It
 * stays pinned to the popup's bottom edge while the content scrolls beneath it
 * — the conventional placement for a drawer's primary/destructive actions:
 *
 * ```tsx
 * <Drawer.Popup>
 *   <Drawer.Content>…</Drawer.Content>
 *   <Drawer.Footer>
 *     <Drawer.Close>Cancel</Drawer.Close>
 *     <Drawer.Close variant="primary">Save</Drawer.Close>
 *   </Drawer.Footer>
 * </Drawer.Popup>
 * ```
 *
 * Styled as a muted bar with a top border and a right-aligned, wrapping row of
 * buttons — the same treatment as `Dialog.Footer`. Override alignment with
 * `className` or `style` (e.g. `justifyContent: "space-between"`) when needed.
 */
export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return <div className={clsx(styles.drawer__footer, className)} {...props} />;
}
