import Switch from "./switch/Switch";

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
      <Switch
        name="checkbox1"
        value="checkbox1"
        labelText="Checkbox 1"
        color="primary"
        size="small"
        checked
        disabled
      />
    </div>
  );
};
