import TextFiled from "./textField/TextFiled";

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
      <TextFiled id="1" variant="outlined" labelText="Label text" />
      <TextFiled id="1" size="small" labelText="Label text" />
    </div>
  );
};
