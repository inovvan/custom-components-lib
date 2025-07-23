import Button from "./button/Button";

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
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button size="small" variant="text">
          Click me
        </Button>
        <Button disabled size="medium" variant="text">
          Click me
        </Button>
        <Button size="large" variant="text">
          Click me
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button size="small" variant="contained">
          Click me
        </Button>
        <Button disabled size="medium" variant="contained">
          Click me
        </Button>
        <Button size="large" variant="contained">
          Click me
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button size="small" variant="outlined">
          Click me
        </Button>
        <Button disabled size="medium" variant="outlined">
          Click me
        </Button>
        <Button size="large" variant="outlined">
          Click me
        </Button>
      </div>
    </div>
  );
};
