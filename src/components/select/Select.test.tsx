import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "./Select";

describe("Select <input> props", () => {
  const commonProps = {
    id: "select-input",
    children: [
      <li key="1" value="option1">
        Option 1
      </li>,
      <li key="2" value="option2">
        Option 2
      </li>,
    ],
  };

  it("sets the input id", () => {
    render(<Select {...commonProps} />);
    const input = screen.getByTestId("select-input");
    expect(input).toHaveAttribute("id", "select-input");
  });

  it("disables the input when disabled is true", () => {
    render(<Select {...commonProps} disabled />);
    const input = screen.getByTestId("select-input");
    expect(input).toBeDisabled();
  });

  it("uses initialValue as the input value", () => {
    render(<Select {...commonProps} initialValue="option2" />);
    const input = screen.getByTestId("select-input");
    expect(input).toHaveValue("option2");
  });

  it("applies custom width via style when width is provided", () => {
    render(<Select {...commonProps} width={300} />);
    const input = screen.getByTestId("select-input");
    expect(input).toHaveStyle("width: 300px");
  });
});
