import * as styles from "./Button.module.scss";
import useFillAnimation from "../hooks/useFillAnimation";
import GrowingCircle from "./components/growingCircle/GrowingCircle";

type ButtonVariant = "text" | "contained" | "outlined";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button = ({
  children,
  disabled = false,
  variant = "contained",
  size = "medium",
  ...rest
}: ButtonProps) => {
  const { animations, buttonRef, handleMouseDown, handleMouseUpAndLeave } =
    useFillAnimation();

  const classNames = [
    styles.button,
    styles[`button--${size}`],
    styles[`button--${variant}`],
    disabled && styles[`button--disabled`],
  ].join(" ");

  return (
    <button
      ref={buttonRef}
      className={classNames}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpAndLeave}
      onMouseLeave={handleMouseUpAndLeave}
      {...rest}
    >
      {children}

      {animations.map((animation) => (
        <GrowingCircle
          key={animation.key}
          x={animation.x}
          y={animation.y}
          active={animation.active}
          variant={variant}
        />
      ))}
    </button>
  );
};

export default Button;
