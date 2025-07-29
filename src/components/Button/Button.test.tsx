import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("renders children properly", () => {
    render(<Button size="medium">Test</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Test");
  });

  it("applies default props", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button--medium");
    expect(button).toHaveClass("button--contained");
    expect(button).not.toBeDisabled();
  });

  it("applies variant and size classes", () => {
    render(
      <Button variant="outlined" size="large">
        Outlined Large
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button--outlined");
    expect(button).toHaveClass("button--large");
  });

  it("sets disabled status properly", () => {
    const { rerender } = render(<Button size="medium">Test</Button>);
    expect(screen.getByRole("button")).not.toBeDisabled();

    rerender(
      <Button size="medium" disabled>
        Test
      </Button>,
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
