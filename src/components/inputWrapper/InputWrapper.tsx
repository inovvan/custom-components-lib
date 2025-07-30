import * as styles from "./InputWrapper.module.scss";
import { clsx } from "clsx";

type InputVariant = "outlined" | "filled" | "standard";

interface InputWrapperProps {
  id: string;
  disabled?: boolean;
  error?: boolean;
  variant?: InputVariant;
  labelText?: string;
  value: string;
  focused: boolean;
  children?: React.ReactNode;
}

const InputWrapper = ({
  id,
  disabled = false,
  variant = "standard",
  error = false,
  labelText = "",
  value,
  focused,
  children,
}: InputWrapperProps) => {
  const classNames = clsx(
    styles["text-field"],
    styles[`text-field--${variant}`],
    disabled && styles[`text-field--disabled`],
    error && styles[`text-field--error`],
    focused && styles[`text-field--focused`],
    value && styles[`text-field--not-empty`],
  );

  return (
    <div className={classNames}>
      <label htmlFor={id} className={styles["text-field__label"]}>
        {error ? "Error" : labelText}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
