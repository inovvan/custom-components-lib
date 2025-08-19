import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Switch from "./Switch";

describe("Switch component", () => {
  const baseProps = {
    name: "theme",
    value: "dark",
  };

  it("renders with provided labelText", () => {
    render(<Switch {...baseProps} labelText="Dark Mode" />);
    expect(screen.getByLabelText("Dark Mode")).toBeInTheDocument();
  });

  it("sets the correct name and value on the input", () => {
    render(<Switch {...baseProps} />);
    const input = screen.getByRole("checkbox");
    expect(input).toHaveAttribute("name", "theme");
    expect(input).toHaveAttribute("value", "dark");
  });

  it("applies the correct color class", () => {
    const { container } = render(<Switch {...baseProps} color="success" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("switch--success");
  });

  it("applies the correct size class", () => {
    const { container } = render(<Switch {...baseProps} size="small" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("switch--small");
  });

  it("input is disabled when disabled=true", () => {
    render(<Switch {...baseProps} disabled />);
    const input = screen.getByRole("checkbox");
    expect(input).toBeDisabled();
  });

  it("wrapper has disabled class when disabled=true", () => {
    const { container } = render(<Switch {...baseProps} disabled />);
    expect(container.firstChild).toHaveClass("switch--disabled");
  });

  it("is initially checked if checked=true", () => {
    render(<Switch {...baseProps} checked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("toggles checked state on click", () => {
    render(<Switch {...baseProps} />);
    const input = screen.getByRole("checkbox");

    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
  });

  it("does not toggle when disabled", () => {
    render(<Switch {...baseProps} disabled />);
    const input = screen.getByRole("checkbox");

    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).not.toBeChecked();
  });
});
