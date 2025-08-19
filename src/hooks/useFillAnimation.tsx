import { useRef, useState } from "react";

interface Animation {
  x: string;
  y: string;
  key: number;
  active: boolean;
}

type FillAnimationResult = {
  animations: Animation[];
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleMouseUpAndLeave: () => void;
};

const useFillAnimation = (): FillAnimationResult => {
  const [animations, setAnimations] = useState<Animation[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
      const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";

      setAnimations((prev) => [
        ...prev,
        { x, y, key: Math.random(), active: true },
      ]);
    }
  };

  const handleMouseUpAndLeave = () => {
    if (animations.length === 0) return;

    const key = animations[animations.length - 1].key;

    setAnimations((prev) => {
      return prev.map((animation) => {
        if (key === animation.key) {
          return {
            ...animation,
            active: false,
          };
        } else return animation;
      });
    });

    setTimeout(() => {
      setAnimations((prev) => {
        return prev.filter((animation) => animation.key !== key);
      });
    }, 500);
  };

  return {
    animations,
    buttonRef,
    handleMouseDown,
    handleMouseUpAndLeave,
  };
};

export default useFillAnimation;
