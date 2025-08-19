import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

describe("Modal component", () => {
  it("does not render when isOpen is false", () => {
    const { container } = render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <p>Hidden content</p>
      </Modal>,
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders children when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <p>Visible content</p>
      </Modal>,
    );
    expect(screen.getByText("Visible content")).toBeInTheDocument();
  });

  it("calls onClose when overlay is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <p>Test</p>
      </Modal>,
    );

    const overlay = screen.getByTestId("modal-content").parentElement;
    if (overlay) fireEvent.click(overlay);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <p>Test</p>
      </Modal>,
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when content area is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <p>Modal content</p>
      </Modal>,
    );

    const content = screen.getByText("Modal content").parentElement;
    if (content) fireEvent.click(content);

    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
