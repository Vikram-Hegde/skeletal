import {
  Field as BaseField,
  type FieldRootProps as BaseFieldRootProps,
  type FieldLabelProps as BaseFieldLabelProps,
  type FieldDescriptionProps as BaseFieldDescriptionProps,
  type FieldErrorProps as BaseFieldErrorProps,
} from "@base-ui/react/field";
import { mergeClassName } from "@skeletal/lib/merge-class-name";
import styles from "./field.module.css";

/**
 * Groups a label, control, description, and error into a single accessible
 * field. Wraps Base UI's `Field.Root`, so every Base UI prop works
 * (`disabled`, `name`, `validate`, `validationMode`, etc.). All parts placed
 * inside it (including Skeletal's `Input`) automatically share validation
 * state.
 *
 * All props are optional.
 */
export interface FieldRootProps extends BaseFieldRootProps {}

/**
 * An accessible label automatically associated with the field's control.
 * Wraps Base UI's `Field.Label`. All props are optional.
 */
export interface FieldLabelProps extends BaseFieldLabelProps {}

/**
 * Helper text shown beneath the label, before the control. Use it to clarify
 * the expected format or purpose. Wraps Base UI's `Field.Description`. All
 * props are optional.
 */
export interface FieldDescriptionProps extends BaseFieldDescriptionProps {}

/**
 * An error message revealed when the field fails validation (driven by the
 * field's `ValidityState`). Wraps Base UI's `Field.Error`, so its `match` prop
 * controls visibility. All props are optional.
 */
export interface FieldErrorProps extends BaseFieldErrorProps {}

export const Field = {
  Root: function FieldRoot({ className, ...props }: FieldRootProps) {
    return (
      <BaseField.Root
        className={mergeClassName(styles["field__root"], className)}
        {...props}
      />
    );
  },
  Label: function FieldLabel({ className, ...props }: FieldLabelProps) {
    return (
      <BaseField.Label
        className={mergeClassName(styles["field__label"], className)}
        {...props}
      />
    );
  },
  Description: function FieldDescription({
    className,
    ...props
  }: FieldDescriptionProps) {
    return (
      <BaseField.Description
        className={mergeClassName(styles["field__description"], className)}
        {...props}
      />
    );
  },
  Error: function FieldError({ className, ...props }: FieldErrorProps) {
    return (
      <BaseField.Error
        className={mergeClassName(styles["field__error"], className)}
        {...props}
      />
    );
  },
};
