import * as styles from "./Modal.module.scss";
import { MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const stopPropagation = (e: MouseEvent<HTMLElement>) => e.stopPropagation();

  return (
    <div className={styles["modal__overlay"]} onClick={onClose}>
      <div
        className={styles["modal__content"]}
        onClick={stopPropagation}
        data-testid="modal-content"
      >
        <button className={styles["modal__close-button"]} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
