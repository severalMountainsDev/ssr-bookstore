import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import SearchField from "./SearchField";

const onChange = jest.fn();

test("renders SearchField with placeholder", () => {
  render(
    <SearchField value="" onChange={onChange} placeholder="Search for books" />
  );

  const inputField = screen.getByPlaceholderText("Search for books");
  expect(inputField).toBeInTheDocument();
});

test("calls onChange when input value changes", () => {
  render(
    <SearchField value="" onChange={onChange} placeholder="Search for books" />
  );

  const inputField = screen.getByPlaceholderText("Search for books");
  fireEvent.change(inputField, { target: { value: "Harry Potter" } });

  expect(onChange).toHaveBeenCalledWith("Harry Potter");
});

test("clears input value when clear button is clicked", () => {
  render(
    <SearchField
      value="Harry Potter"
      onChange={onChange}
      placeholder="Search for books"
    />
  );

  const clearButton = screen.getByLabelText("Clear input");
  fireEvent.click(clearButton);

  expect(onChange).toHaveBeenCalledWith("");
});
