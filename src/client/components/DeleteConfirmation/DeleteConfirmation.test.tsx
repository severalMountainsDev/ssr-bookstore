import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import DeleteConfirmation from "./DeleteConfirmation";

const originalScrollTo = window.scrollTo;

test("renders DeleteConfirmation component", () => {
  window.scrollTo = jest.fn();

  render(<DeleteConfirmation onConfirm={() => {}} onCancel={() => {}} />);
  const confirmationText = screen.getByText(
    "Are you sure that you want to delete this book?"
  );
  const deleteButton = screen.getByLabelText("Delete book");
  const cancelButton = screen.getByLabelText("Cancel delete book");

  expect(confirmationText).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();

  window.scrollTo = originalScrollTo;
});

test("calls onConfirm when 'Yes, Delete' button is clicked", () => {
  window.scrollTo = jest.fn();

  const mockOnConfirm = jest.fn();
  render(<DeleteConfirmation onConfirm={mockOnConfirm} onCancel={() => {}} />);
  const deleteButton = screen.getByLabelText("Delete book");

  fireEvent.click(deleteButton);

  expect(mockOnConfirm).toHaveBeenCalledTimes(1);

  window.scrollTo = originalScrollTo;
});

test("calls onCancel when 'Cancel' button is clicked", () => {
  window.scrollTo = jest.fn();

  const mockOnCancel = jest.fn();
  render(<DeleteConfirmation onConfirm={() => {}} onCancel={mockOnCancel} />);
  const cancelButton = screen.getByLabelText("Cancel delete book");

  fireEvent.click(cancelButton);

  expect(mockOnCancel).toHaveBeenCalledTimes(1);

  window.scrollTo = originalScrollTo;
});
