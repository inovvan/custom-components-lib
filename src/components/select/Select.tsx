import React, { useState, ReactElement, useEffect, useRef } from "react";
import InputWrapper from "../inputWrapper/InputWrapper";
import * as styles from "./Select.module.scss";
import clsx from "clsx";
type InputVariant = "outlined" | "filled" | "standard";
type InputSize = "small" | "normal";
interface Child {
  value: string;
  children: React.ReactNode;
}

interface SelectProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  disabled?: boolean;
  error?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  labelText?: string;
  initialValue?: string;
  width?: number;
  children: ReactElement<Child>[];
}

const Select = ({
  id,
  disabled = false,
  variant = "standard",
  size = "normal",
  error = false,
  labelText = "",
  initialValue = "",
  width,
  children,
  ...rest
}: SelectProps) => {
  const [value, setValue] = useState(initialValue);
  const [defaultWidth, setDefaultWidth] = useState<string | number>("auto");
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!width) {
      setDefaultWidth(dropdownRef.current.offsetWidth);
    }
  }, []);

  const handleClickOption = (child: ReactElement<Child>) => {
    setValue(child.props.value);
  };

  return (
    <div className={clsx(styles["select"], styles[`select--${size}`])}>
      <InputWrapper
        id={id}
        disabled={disabled}
        variant={variant}
        error={error}
        labelText={labelText}
        value={value}
      >
        <div>
          <input
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={
              width ? { width: `${width}px` } : { width: `${defaultWidth}px` }
            }
            className={styles["select__input"]}
            value={value}
            readOnly
            id={id}
            disabled={disabled}
            data-testid="select-input"
            {...rest}
          />
          <svg
            className={[
              styles["select__svg"],
              isFocused && styles["select__svg--active"],
              error && styles["select__svg--error"],
            ].join(" ")}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </div>
      </InputWrapper>

      <div
        ref={dropdownRef}
        className={clsx(
          styles["select__dropdown"],
          styles[`text-field--${size}`],
          width && styles["select__dropdown--custom-width"],
          isFocused && styles["select__dropdown--opened"],
        )}
      >
        <ul className={styles["select__list"]}>
          {children.map((child) => {
            return (
              <li
                className={clsx(
                  styles["select__option"],
                  child.props.value === value &&
                    styles["select__option--active"],
                )}
                key={child.props.value}
                onClick={() => handleClickOption(child)}
              >
                {child.props.children}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
