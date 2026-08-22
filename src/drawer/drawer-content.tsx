import type { DrawerContentProps as BaseDrawerContentProps } from "@base-ui/react/drawer";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { Stack } from "@elemental/layout/stack";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import styles from "./drawer.module.css";

/**
 * The padded content container inside the drawer popup. Renders a `<div>`
 * element.
 *
 * Per the Base UI anatomy, render `<Drawer.Title>`, `<Drawer.Description>`,
 * and the drawer's actions inside `<Drawer.Content>`:
 *
 * ```tsx
 * <Drawer.Popup>
 *   <Drawer.Content>
 *     <Drawer.Title>Settings</Drawer.Title>
 *     <Drawer.Description>…</Drawer.Description>
 *     <Drawer.Close>Close</Drawer.Close>
 *   </Drawer.Content>
 * </Drawer.Popup>
 * ```
 *
 * The content is padded (`1.5rem`), measure-constrained, and wrapped in a
 * `Stack` layout primitive for the drawer's vertical rhythm
 * (`space="1.25rem"`), matching `Dialog.Content`. It also lets users select
 * text inside the drawer without triggering the swipe-to-dismiss gesture.
 *
 * `Drawer.Content` is the scrollable region of the popup: when it overflows,
 * it scrolls between an optional sticky `Drawer.Header` (above) and `Drawer.Footer`
 * (below), which stay pinned.
 */
export interface DrawerContentProps extends BaseDrawerContentProps {}

export function DrawerContent({ className, children, ...props }: DrawerContentProps) {
  return (
    <BaseDrawer.Content className={mergeClassName(styles.drawer__content, className)} {...props}>
      <Stack space="1.25rem">{children}</Stack>
    </BaseDrawer.Content>
  );
}
