import { useState } from "react";
import InputWrapper from "../InputWrapper/InputWrapper";
import { clsx } from "clsx";
import * as styles from "./TextField.module.scss";
type InputVariant = "outlined" | "filled" | "standard";
type InputSize = "small" | "normal";
interface TextFiledProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  disabled?: boolean;
  width?: number | null;
  error?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  labelText?: string;
  initialValue?: string;
}

const TextField = ({
  id,
  disabled = false,
  width,
  variant = "standard",
  size = "normal",
  error = false,
  labelText = "",
  initialValue = "",
  ...rest
}: TextFiledProps) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={clsx(styles[`text-field--${size}`])}>
      <InputWrapper
        id={id}
        disabled={disabled}
        variant={variant}
        error={error}
        labelText={labelText}
        value={value}
        focused={isFocused}
      >
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          style={width && { width: `${width}px` }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          id={id}
          disabled={disabled}
          {...rest}
        />
      </InputWrapper>
    </div>
  );
};

export default TextField;
