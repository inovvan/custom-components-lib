import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from "./TextField";

describe("TextFiled component", () => {
  const baseProps = {
    id: "username",
  };

  it("renders input with provided id", () => {
    render(<TextField {...baseProps} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "username");
  });

  it("sets initial value if provided", () => {
    render(<TextField {...baseProps} initialValue="Ivan" />);
    expect(screen.getByDisplayValue("Ivan")).toBeInTheDocument();
  });

  it("changes value on user input", () => {
    render(<TextField {...baseProps} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "new value" } });
    expect(input).toHaveValue("new value");
  });

  it("renders with correct size class", () => {
    const { container } = render(<TextField {...baseProps} size="small" />);
    expect(container.firstChild).toHaveClass("text-field--small");
  });

  it("disables input when disabled=true", () => {
    render(<TextField {...baseProps} disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("applies custom width style when width is provided", () => {
    render(<TextField {...baseProps} width={300} />);
    expect(screen.getByRole("textbox")).toHaveStyle("width: 300px");
  });

  it("renders label text when provided", () => {
    render(<TextField {...baseProps} labelText="Username" />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("passes error state to InputWrapper", () => {
    render(<TextField {...baseProps} error labelText="Field" />);
    expect(screen.getByLabelText("Error")).toBeInTheDocument();
  });
});
