import type { ButtonProps as BaseButtonProps } from "@base-ui/react/button";
import { Button as BaseButton } from "@base-ui/react/button";
import { mergeClassName } from "@elemental/lib/merge-class-name";
import { clsx } from "clsx";
import styles from "./button.module.css";

/**
 * The visual emphasis of the button. Choose based on the action's importance:
 * - `primary`: solid accent fill — the main action on a screen. Use sparingly.
 * - `secondary`: muted fill — an alternative to primary in grouped actions.
 * - `outline`: transparent with a border — pairs with primary/secondary, or for
 *   actions that should feel lighter.
 * - `ghost`: no border or fill — inline/secondary actions that shouldn't draw
 *   attention; gains a subtle hover fill.
 * - `destructive`: red fill — irreversible actions (delete, remove). Always
 *   pair with a confirmation step (e.g. an Alert Dialog).
 *
 * @default variant = 'primary'
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";

/**
 * The button size:
 * - `sm`: 2rem tall — dense toolbars and inline actions.
 * - `md`: 2.5rem tall — default; most buttons.
 * - `lg`: 3rem tall — hero or primary form submissions.
 *
 * @default size = 'md'
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * A styled button that triggers an action. Renders a `<button>` element.
 *
 * Wraps Base UI's `Button`, so every Base UI prop works: `render` to swap the
 * element (set `nativeButton={false}` when rendering a non-`<button>` tag),
 * `className`, `disabled`, etc.
 *
 * For loading states, pass `loading`: the button disables itself (preventing
 * double-submits) while keeping focus (Base UI's `focusableWhenDisabled`), and
 * sets `aria-busy` so assistive tech announces the pending state. The label
 * and any icons stay fully visible — a progress bar sweeps along the bottom
 * edge of the button to indicate the pending state, and the button is dimmed
 * (but not as much as fully disabled) so it reads as non-interactive. The
 * button also sets `data-loading` if you want to style the pending state
 * yourself.
 *
 * All props are optional except children.
 */
export interface ButtonProps extends BaseButtonProps {
  /** Visual emphasis of the button. @default 'primary' */
  variant?: ButtonVariant;
  /** Size of the button. @default 'md' */
  size?: ButtonSize;
  /** Whether the button stretches to fill its parent width. @default false */
  fullWidth?: boolean;
  /** Whether the button shows a pending state. @default false */
  loading?: boolean;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: styles["button--primary"],
  secondary: styles["button--secondary"],
  outline: styles["button--outline"],
  ghost: styles["button--ghost"],
  destructive: styles["button--destructive"],
};

const SIZE_CLASS: Record<ButtonSize, string | undefined> = {
  sm: styles["button--sm"],
  md: undefined,
  lg: styles["button--lg"],
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  focusableWhenDisabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={mergeClassName(
        clsx(
          styles.button,
          VARIANT_CLASS[variant],
          SIZE_CLASS[size],
          fullWidth && styles["button--full"],
          loading && styles["button--loading"],
        ),
        className,
      )}
      disabled={loading ? true : disabled}
      focusableWhenDisabled={loading ? true : focusableWhenDisabled}
      aria-busy={loading ? true : undefined}
      data-loading={loading ? true : undefined}
      {...props}
    >
      {children}
    </BaseButton>
  );
}
