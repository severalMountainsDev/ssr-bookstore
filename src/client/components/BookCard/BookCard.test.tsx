import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import BookCard from "./BookCard";
import { FullBook } from "../../api/booksApi";
import { formatCurrency } from "../../helpers/currencyFormatter";

test("renders BookCard component with book details", () => {
  const book: FullBook = {
    id: 1,
    name: "Sample Book",
    author: "John Doe",
    price: 19.99,
    category: "Fiction",
    description: "A sample book description.",
  };

  render(<BookCard {...book} onCLick={() => {}} />);

  const bookItemElement = screen.getByTestId("book-item");
  const titleElement = screen.getByText(book.name);
  const authorElement = screen.getByText(book.author);
  const priceElement = screen.getByText(formatCurrency(book.price));
  const categoryElement = screen.getByText(book.category);
  const descriptionElement = screen.getByText(book.description);

  expect(bookItemElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  expect(categoryElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

test("calls onClick callback when the book card is clicked", () => {
  const book: FullBook = {
    id: 1,
    name: "Sample Book",
    author: "John Doe",
    price: 19.99,
    category: "Fiction",
    description: "A sample book description.",
  };

  const onClickMock = jest.fn();

  render(<BookCard {...book} onCLick={onClickMock} />);

  const bookItemElement = screen.getByTestId("book-item");

  fireEvent.click(bookItemElement);

  expect(onClickMock).toHaveBeenCalledWith(book);
});
