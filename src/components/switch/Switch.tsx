import * as styles from "./Switch.module.scss";
import clsx from "clsx";
import { useState } from "react";

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
  color?: "primary" | "success" | "error";
  size?: "small" | "medium";
  labelText?: string;
  name: string;
  value: string;
}

const Switch = ({
  disabled = false,
  checked = false,
  color = "primary",
  size = "medium",
  labelText = "",
  name,
  value,
  ...rest
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked ? true : false);

  const handleSwitchChange = () => {
    if (disabled) return;
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={clsx(
        styles["switch"],
        styles[`switch--${size}`],
        styles[`switch--${color}`],
        disabled && styles["switch--disabled"],
        isChecked && styles["switch--checked"],
      )}
    >
      <div className={styles["switch__input-container"]}>
        <input
          onChange={handleSwitchChange}
          type="checkbox"
          id={value}
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          {...rest}
        />
        <span className={styles["switch__slider"]}></span>
        <span className={styles["switch__slider-sircle-wrapper"]}>
          <span className={styles["switch__slider-sircle"]}></span>
        </span>
      </div>
      <label htmlFor={value}>{labelText}</label>
    </div>
  );
};

export default Switch;
