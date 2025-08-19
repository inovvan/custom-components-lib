import * as styles from "./Checkbox.module.scss";
import clsx from "clsx";
import { useState } from "react";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
  color?: "primary" | "success" | "error";
  size?: "small" | "medium" | "large";
  labelText?: string;
  name: string;
  value: string;
}

const Checkbox = ({
  disabled = false,
  checked = false,
  color = "primary",
  size = "medium",
  labelText = "",
  name,
  value,
  ...rest
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked ? true : false);

  const handleCheckboxChange = () => {
    if (disabled) return;
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={clsx(
        styles["checkbox"],
        styles[`checkbox--${size}`],
        styles[`checkbox--${color}`],
        disabled && styles["checkbox--disabled"],
        isChecked && styles["checkbox--checked"],
      )}
    >
      <div className={styles["checkbox__input-container"]}>
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          id={value}
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          {...rest}
        />
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
          {isChecked ? (
            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          ) : (
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
          )}
        </svg>
      </div>
      <label htmlFor={value}>{labelText}</label>
    </div>
  );
};

export default Checkbox;
