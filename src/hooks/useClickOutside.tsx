import { useEffect, useState } from "react";

const useClickOutside = (ref: React.RefObject<HTMLInputElement>): boolean => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current.contains(event.target as Node)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return isOpen;
};

export default useClickOutside;
