import * as styles from "./TextField.module.scss";
import { useState } from "react";
type InputVariant = "outlined" | "filled" | "standard";
type InputSize = "small" | "normal";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  disabled?: boolean;
  error?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  labelText?: string;
  initialValue?: string;
}

const Input = ({
  id,
  disabled = false,
  variant = "standard",
  size = "normal",
  error = false,
  labelText = "",
  initialValue = "",
  ...rest
}: InputProps) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const classNames = [
    styles["text-field"],
    styles[`text-field--${size}`],
    styles[`text-field--${variant}`],
    disabled && styles[`text-field--disabled`],
    error && styles[`text-field--error`],
    isFocused && styles[`text-field--focused`],
    value && styles[`text-field--value`],
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

      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        id={id}
        className={styles["text-field__input"]}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};

export default Input;
