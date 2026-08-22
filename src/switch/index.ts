import { SwitchRoot } from "./switch-root";
import { SwitchThumb } from "./switch-thumb";

/**
 * Compound component for an on/off setting.
 *
 * Assemble the parts as properties of the object:
 *
 * ```tsx
 * import { Switch } from '@vikram-hegde/elemental'
 *
 * <label>
 *   <Switch.Root defaultChecked name="notifications" />
 *   Notifications
 * </label>
 * ```
 *
 * Use a switch for instant-effect settings that don't wait on form
 * submission ("Dark mode", "Mute"); use `Checkbox` when the value is part of
 * submitted form data or represents membership in a list. See the Root docs
 * for react-hook-form / TanStack Form wiring — the hidden native input keeps
 * those integrations working.
 *
 * All parts are thin styled wrappers over Base UI's `Switch`, so every Base
 * UI prop, `render` override, and ref behaves the same. Part prop types are
 * exported separately (`SwitchProps`, ...).
 */
export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};

export type { SwitchProps } from "./switch-root";
export type { SwitchThumbProps } from "./switch-thumb";
