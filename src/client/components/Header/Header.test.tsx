import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import Header from "./Header";
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

test("renders Header component with default state", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const logoElement = screen.getByText("Bookstore");
  const searchInput = screen.getByPlaceholderText("Search...");
  const addBookButton = screen.getByLabelText("Add a new book");

  expect(logoElement).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(addBookButton).toBeInTheDocument();
});
