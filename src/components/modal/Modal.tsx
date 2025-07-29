import * as styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles["modal__overlay"]} onClick={onClose}>
      <div
        className={styles["modal__content"]}
        onClick={(e) => e.stopPropagation()}
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
