import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import BookDialog from "./BookDialog";
import { createTestStore } from "../../store/testStore";

const store = createTestStore({
  books: {
    loading: false,
    items: [],
    error: null,
    selectedBook: null,
    search: "",
    filter: { category: "", author: "" },
    sort: "",
  },
});

test("renders BookDialog component", () => {
  render(
    <Provider store={store}>
      <BookDialog onClose={() => {}} isOpen={true} />
    </Provider>
  );
  const dialogElement = screen.getByTestId("book-dialog");
  expect(dialogElement).toBeInTheDocument();
});

test("renders BookDialog component with Add Book title", () => {
  render(
    <Provider store={store}>
      <BookDialog onClose={() => {}} isOpen={true} />
    </Provider>
  );
  const titleElement = screen.getByText("Add Book");
  expect(titleElement).toBeInTheDocument();
});

test("calls onClose when close button is clicked", () => {
  const onCloseMock = jest.fn();
  render(
    <Provider store={store}>
      <BookDialog onClose={onCloseMock} isOpen={true} />
    </Provider>
  );
  const closeButtonElement = screen.getByText("×");
  fireEvent.click(closeButtonElement);
  expect(onCloseMock).toHaveBeenCalled();
});
