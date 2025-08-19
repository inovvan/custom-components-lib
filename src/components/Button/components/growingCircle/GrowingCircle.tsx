import { useEffect, useRef } from "react";
import * as styles from "./GrowingCircle.module.scss";

const GrowingCircle = ({
  x,
  y,
  active,
  variant,
}: {
  x: string;
  y: string;
  active: boolean;
  variant: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      requestAnimationFrame(() => {
        el.classList.add(styles.animationIn);
      });
    }
  }, []);

  return (
    <span
      ref={ref}
      className={[
        styles.growingCircle,
        variant === "contained" && styles["growingCircle--contaied"],
        !active && styles.animationOut,
      ].join(" ")}
      style={{ left: x, top: y }}
    />
  );
};

export default GrowingCircle;
