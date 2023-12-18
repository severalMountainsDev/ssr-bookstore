import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";

import { createTestStore } from "../../store/testStore";
import { FullBook } from "../../api/booksApi";
import Main from "./Main";

const mockBooks: FullBook[] = [
  {
    id: 1,
    name: "Book 1",
    author: "Author 1",
    category: "Category 1",
    description: "Description 1",
    price: 10,
  },
  {
    id: 2,
    name: "Book 2",
    author: "Author 2",
    category: "Category 2",
    description: "Description 2",
    price: 20,
  },
];

describe("Main Page", () => {
  const store = createTestStore({
    books: {
      loading: false,
      items: mockBooks,
      error: null,
      search: "",
      filter: { category: "", author: "" },
      sort: "",
    },
  });

  it("renders the Main component with books", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      const bookItems = screen.getAllByTestId("book-item");
      expect(bookItems.length).toBeGreaterThan(0);
    });
  });
});
