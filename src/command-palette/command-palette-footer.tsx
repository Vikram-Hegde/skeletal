import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./command-palette.module.css";

/**
 * A footer bar for keyboard-shortcut hints and other instruction text.
 * Renders a `<div>` element.
 *
 * Place it as the last child of `CommandPalette.Content`, after the list (or
 * the empty state), to surface affordances like navigation keys:
 *
 * ```tsx
 * <CommandPalette.Footer>
 *   <kbd>↑↓</kbd> to navigate · <kbd>↵</kbd> to select
 * </CommandPalette.Footer>
 * ```
 *
 * It sits flush against the card's bottom edge with a top border and muted
 * background, reading as a distinct section rather than a loose row of text.
 * Content is laid out in a left-aligned, wrapping row with a small gap;
 * override alignment with `className` or `style` when needed.
 */
export interface CommandPaletteFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CommandPaletteFooter({ className, ...props }: CommandPaletteFooterProps) {
  return <div className={clsx(styles.command__footer, className)} {...props} />;
}
