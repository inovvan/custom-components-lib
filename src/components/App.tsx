import Modal from "./modal/Modal";
import { useState } from "react";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>Custom Components Library</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Welcome to the Custom Components Library</h1>
        <p>This is a simple modal example.</p>
      </Modal>
    </div>
  );
};
