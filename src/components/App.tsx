import Button from "./button/Button";
import Modal from "./modal/Modal";
import { useState } from "react";
import { Checkbox, Select, Switch, TextField } from "..";
import MenuItem from "./menuItem/MenuItem";

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
      <TextField id="name" labelText="Name" variant="outlined" error={true} />
      <Button size="large" variant="contained">
        QWESAD
      </Button>
      <Switch name="qwe" value="qwe" />
      <Select id="1" variant="filled" labelText="qweda">
        <MenuItem value="1">One</MenuItem>
        <MenuItem value="2">Two</MenuItem>
        <MenuItem value="3">Three</MenuItem>
      </Select>
      <Checkbox name="check" value="check" labelText="qwe" checked />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Welcome to the Custom Components Library</h1>
        <p>This is a simple modal example.</p>
      </Modal>
    </div>
  );
};
