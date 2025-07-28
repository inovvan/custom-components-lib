import Checkbox from "./checkbox/Checkbox";

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
      <Checkbox
        name="checkbox1"
        value="checkbox1"
        labelText="Checkbox 1"
        color="error"
        size="large"
        checked
        disabled
      />
    </div>
  );
};
