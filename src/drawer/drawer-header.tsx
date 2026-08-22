import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./drawer.module.css";

/**
 * A sticky top bar for the drawer. Renders a `<div>` element.
 *
 * Render it as a direct child of `Drawer.Popup`, before `Drawer.Content`. It
 * stays pinned to the popup's top edge while the content scrolls beneath it —
 * pair it with `Drawer.Footer` so actions are always visible:
 *
 * ```tsx
 * <Drawer.Popup>
 *   <Drawer.Header>
 *     <Drawer.Title>Filters</Drawer.Title>
 *     <Drawer.Close size="sm" variant="ghost">✕</Drawer.Close>
 *   </Drawer.Header>
 *   <Drawer.Content>…</Drawer.Content>
 *   <Drawer.Footer>
 *     <Drawer.Close>Reset</Drawer.Close>
 *     <Drawer.Close variant="primary">Apply</Drawer.Close>
 *   </Drawer.Footer>
 * </Drawer.Popup>
 * ```
 *
 * Styled as a bar on the popup surface (same background as the content) with a
 * bottom border to separate it from the body. It is a plain container — put
 * the title on the left and trailing actions on the right
 * (`justify-content: space-between`), and override alignment with `className`
 * or `style` when needed.
 */
export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return <div className={clsx(styles.drawer__header, className)} {...props} />;
}
