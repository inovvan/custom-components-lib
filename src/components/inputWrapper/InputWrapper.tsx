import * as styles from "./InputWrapper.module.scss";
import { useState } from "react";

type InputVariant = "outlined" | "filled" | "standard";
type InputSize = "small" | "normal";

interface InputWrapperProps {
  id: string;
  disabled?: boolean;
  error?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  labelText?: string;
  value: string;
  children?: React.ReactNode;
}

const InputWrapper = ({
  id,
  disabled = false,
  variant = "standard",
  size = "normal",
  error = false,
  labelText = "",
  value,
  children,
}: InputWrapperProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const classNames = [
    styles["text-field"],
    styles[`text-field--${size}`],
    styles[`text-field--${variant}`],
    disabled && styles[`text-field--disabled`],
    error && styles[`text-field--error`],
    isFocused && styles[`text-field--focused`],
    value && styles[`text-field--not-empty`],
  ].join(" ");

  return (
    <div
      className={classNames}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <label htmlFor={id} className={styles["text-field__label"]}>
        {error ? "Error" : labelText}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
