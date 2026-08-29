import type { InputProps as BaseInputProps } from "@base-ui/react/input";
import { Input as BaseInput } from "@base-ui/react/input";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import { clsx } from "clsx";
import styles from "./input.module.css";

/**
 * The height and text size of the input:
 * - `sm`: 2rem tall — dense forms, inline filters, table toolbars.
 * - `md`: 2.5rem tall — default; most form fields.
 * - `lg`: 3rem tall — prominent search bars, hero CTAs.
 *
 * @default size = 'md'
 */
export type InputSize = "sm" | "md" | "lg";

/**
 * A styled text input. Renders a native `<input>` element.
 *
 * Wraps Base UI's `Input`, so every Base UI prop works: `render` to swap the
 * element, `value`/`defaultValue`/`onValueChange` for controlled usage,
 * `className`, `disabled`, etc.
 *
 * It is designed to live inside Base UI's `Field` (`Field.Root`,
 * `Field.Label`, `Field.Description`, `Field.Error`, `Field.Control`). When it
 * is, it automatically reflects validation state via `data-valid`,
 * `data-invalid`, `data-filled`, `data-touched`, `data-dirty`, and `data-focused`
 * attributes set by Base UI — so the border and ring restyle themselves with no
 * extra wiring. The same styling works standalone (unwrapped) too.
 *
 * All props are optional.
 */
export interface InputProps extends Omit<BaseInputProps, "size"> {
  /** Height and text size of the input. @default 'md' */
  size?: InputSize;
  /** Whether the input stretches to fill its parent width. @default false */
  fullWidth?: boolean;
}

const SIZE_CLASS: Record<InputSize, string | undefined> = {
  sm: styles["input--sm"],
  md: undefined,
  lg: styles["input--lg"],
};

export function Input({
  className,
  size = "md",
  fullWidth = false,
  ...props
}: InputProps) {
  return (
    <BaseInput
      className={mergeClassName(
        clsx(styles.input, SIZE_CLASS[size], fullWidth && styles["input--full"]),
        className,
      )}
      {...props}
    />
  );
}
