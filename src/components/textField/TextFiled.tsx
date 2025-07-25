import { useState } from "react";
import InputWrapper from "../inputWrapper/InputWrapper";

type InputVariant = "outlined" | "filled" | "standard";
type InputSize = "small" | "normal";
interface TextFiledProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  disabled?: boolean;
  error?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  labelText?: string;
  initialValue?: string;
}

const TextFiled = ({
  id,
  disabled = false,
  variant = "standard",
  size = "normal",
  error = false,
  labelText = "",
  initialValue = "",
  ...rest
}: TextFiledProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <>
      <InputWrapper
        id={id}
        disabled={disabled}
        variant={variant}
        size={size}
        error={error}
        labelText={labelText}
        value={value}
      >
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          id={id}
          disabled={disabled}
          {...rest}
        />
      </InputWrapper>
    </>
  );
};

export default TextFiled;
