import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputWrapper from "./InputWrapper";

describe("InputWrapper", () => {
  it("renders labelText by default", () => {
    render(
      <InputWrapper id="username" value="test" labelText="Username">
        <input id="username" />
      </InputWrapper>,
    );
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("renders 'Error' label when error is true", () => {
    render(
      <InputWrapper id="username" value="test" labelText="Username" error>
        <input id="username" />
      </InputWrapper>,
    );
    expect(screen.getByLabelText("Error")).toBeInTheDocument();
  });

  it("applies default props correctly", () => {
    render(
      <InputWrapper id="default" value="">
        <input id="default" />
      </InputWrapper>,
    );
    const wrapper = screen.getByLabelText("")?.parentElement;
    expect(wrapper).toHaveClass("text-field--standard");
    expect(wrapper).not.toHaveClass("text-field--disabled");
    expect(wrapper).not.toHaveClass("text-field--error");
    expect(wrapper).not.toHaveClass("text-field--not-empty");
    expect(wrapper).not.toHaveClass("text-field--focused");
  });

  it("applies variant class", () => {
    render(
      <InputWrapper id="outlined" value="" variant="outlined">
        <input id="outlined" />
      </InputWrapper>,
    );
    const wrapper = screen.getByLabelText("")?.parentElement;
    expect(wrapper).toHaveClass("text-field--outlined");
  });

  it("applies disabled class", () => {
    render(
      <InputWrapper id="disabled" value="" disabled>
        <input id="disabled" />
      </InputWrapper>,
    );
    const wrapper = screen.getByLabelText("")?.parentElement;
    expect(wrapper).toHaveClass("text-field--disabled");
  });

  it("applies error class", () => {
    render(
      <InputWrapper id="error" value="" error>
        <input id="error" />
      </InputWrapper>,
    );
    const wrapper = screen.getByLabelText("Error")?.parentElement;
    expect(wrapper).toHaveClass("text-field--error");
  });

  it("applies not-empty class when value is not empty", () => {
    render(
      <InputWrapper id="not-empty" value="text">
        <input id="not-empty" />
      </InputWrapper>,
    );
    const wrapper = screen.getByLabelText("")?.parentElement;
    expect(wrapper).toHaveClass("text-field--not-empty");
  });

  it("applies focused class on focus", () => {
    render(
      <InputWrapper id="focus" value="">
        <input id="focus" data-testid="child-input" />
      </InputWrapper>,
    );
    const input = screen.getByTestId("child-input");
    const wrapper = input.parentElement;

    fireEvent.focus(wrapper!);
    expect(wrapper).toHaveClass("text-field--focused");

    fireEvent.blur(wrapper!);
    expect(wrapper).not.toHaveClass("text-field--focused");
  });

  it("renders children", () => {
    render(
      <InputWrapper id="child-test" value="">
        <input id="child-test" data-testid="child-input" />
      </InputWrapper>,
    );
    expect(screen.getByTestId("child-input")).toBeInTheDocument();
  });
});
