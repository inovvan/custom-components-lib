import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("is checked when checked prop is true", () => {
    render(<Checkbox name="name" value="value" checked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("is not checked when checked prop is false", () => {
    render(<Checkbox name="name" value="value" />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Checkbox name="name" value="value" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("is not disabled when disabled prop is false", () => {
    render(<Checkbox name="name" value="value" />);
    expect(screen.getByRole("checkbox")).not.toBeDisabled();
  });

  it("renders with label text", () => {
    render(<Checkbox name="accept" value="yes" labelText="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("applies default props", () => {
    render(<Checkbox name="default" value="defaultValue" />);
    const checkbox = screen.getByRole("checkbox");

    const wrapper = checkbox.closest(".checkbox");
    expect(wrapper).toHaveClass("checkbox--medium");
    expect(wrapper).toHaveClass("checkbox--primary");
    expect(wrapper).not.toHaveClass("checkbox--disabled");
    expect(wrapper).not.toHaveClass("checkbox--checked");
  });

  it("applies color and size classes", () => {
    render(
      <Checkbox
        name="colored"
        value="coloredValue"
        color="success"
        size="large"
      />,
    );
    const wrapper = screen.getByRole("checkbox").closest(".checkbox");
    expect(wrapper).toHaveClass("checkbox--success");
    expect(wrapper).toHaveClass("checkbox--large");
  });

  it("applies disabled class and prevents toggle", () => {
    render(<Checkbox name="disabled" value="val" disabled checked={true} />);
    const checkbox = screen.getByRole("checkbox");
    const wrapper = checkbox.closest(".checkbox");

    expect(wrapper).toHaveClass("checkbox--disabled");
    expect(wrapper).toHaveClass("checkbox--checked");

    fireEvent.click(checkbox);
    expect(wrapper).toHaveClass("checkbox--checked");
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("toggles checked state on click", () => {
    render(<Checkbox name="toggle" value="toggleValue" />);
    const checkbox = screen.getByRole("checkbox");
    const wrapper = checkbox.closest(".checkbox");

    expect(wrapper).not.toHaveClass("checkbox--checked");

    fireEvent.click(checkbox);
    expect(wrapper).toHaveClass("checkbox--checked");
    expect(screen.getByRole("checkbox")).toBeChecked();

    fireEvent.click(checkbox);
    expect(wrapper).not.toHaveClass("checkbox--checked");
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("sets proper `name` and `value` attributes", () => {
    render(<Checkbox name="newsletter" value="subscribe" />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("name", "newsletter");
    expect(checkbox).toHaveAttribute("value", "subscribe");
  });
});
