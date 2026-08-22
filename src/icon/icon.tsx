import type {
  IconWeight,
  Icon as PhosphorIcon,
  IconProps as PhosphorIconProps,
} from "@phosphor-icons/react";
import { clsx } from "clsx";
import styles from "./icon.module.css";

/**
 * A single-color icon rendered from a Phosphor icon component.
 *
 * The `name` prop is type-restricted to Phosphor icon components, so only
 * icons from `@phosphor-icons/react` are accepted:
 *
 * ```tsx
 * import { Horse as HorseIcon } from '@phosphor-icons/react'
 *
 * <Icon name={HorseIcon} size={20} />
 * ```
 *
 * By default the icon is decorative (`aria-hidden`); pass `alt` (rendered as
 * a `<title>` by Phosphor) or `aria-label` to make it accessible to screen
 * readers. Color inherits from the surrounding text via `currentColor`.
 *
 * All other Phosphor icon props pass through (`color`, `mirrored`, `title`,
 * `style`, etc.), including `weight` which defaults to `'regular'`.
 */
export interface IconProps
  extends Omit<PhosphorIconProps, "size" | "children" | "weight" | "alt" | "name"> {
  /**
   * The Phosphor icon component to render (e.g. `import { Horse as HorseIcon }`).
   */
  name: PhosphorIcon;
  /**
   * Icon size, in pixels or any CSS length.
   *
   * Pass a string like `'1.25em'` to inherit the surrounding font size.
   *
   * @default 20
   */
  size?: string | number;
  /**
   * The icon's stroke weight.
   *
   * @default 'regular'
   */
  weight?: IconWeight;
  /**
   * Accessible description rendered as an SVG `<title>` element.
   *
   * Omit for purely decorative icons.
   */
  alt?: string;
}

export function Icon({
  name: IconComponent,
  size = 20,
  weight = "regular",
  alt,
  className,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  ...props
}: IconProps) {
  const decorative = ariaLabel === undefined && ariaHidden === undefined && alt === undefined;
  const ariaProps = decorative
    ? { "aria-hidden": true as const }
    : ariaHidden !== undefined
      ? { "aria-hidden": ariaHidden }
      : {};
  return (
    <IconComponent
      size={size}
      weight={weight}
      {...(alt !== undefined && { alt })}
      {...ariaProps}
      className={clsx(styles.icon, className)}
      {...props}
    />
  );
}
