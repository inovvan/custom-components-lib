import Select from "./select/Select";
import TextFiled from "./textField/TextFiled";
import MenuItem from "./menuItem/MenuItem";

export const App = () => {
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
      <Select id="1" variant="standard" labelText="Label text">
        <MenuItem value={"1"}>Один</MenuItem>
        <MenuItem value={"2"}>Два</MenuItem>
        <MenuItem value={"3"}>Три</MenuItem>
        <MenuItem value={"4"}>Четыре</MenuItem>
        <MenuItem value={"4"}>Четыре</MenuItem>
        <MenuItem value={"4"}>Четыре</MenuItem>
      </Select>
      <TextFiled id="2" variant="filled" size="normal" labelText="Label text" />
    </div>
  );
};
