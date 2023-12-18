import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import BookDetails from "./BookDetails";
import { createTestStore } from "../../store/testStore";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

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

test("renders BookDetails component", () => {
  render(
    <Provider store={store}>
      <BookDetails />
    </Provider>
  );
});

test("renders BookDetails component with spinner", () => {
  render(
    <Provider store={store}>
      <BookDetails />
    </Provider>
  );
  const bookItem = screen.getByRole("spinner");
  expect(bookItem).toBeInTheDocument();
});

test("renders BookDetails component without book", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/book/312l312l312"]}>
        <BookDetails />
      </MemoryRouter>
    </Provider>
  );

  await waitFor(() => {
    const bookItem = screen.getByTestId("empty-book");
    expect(bookItem).toBeInTheDocument();
  });
});
