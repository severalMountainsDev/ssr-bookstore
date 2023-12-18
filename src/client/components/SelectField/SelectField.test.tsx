import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import SelectField from "./SelectField";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const onChange = jest.fn();

test("renders SelectField with placeholder", () => {
  render(
    <SelectField
      type="category"
      value={null}
      onChange={onChange}
      options={options}
      placeholder="Select an option"
    />
  );

  const selectContainer = screen.getByRole("combobox");
  expect(selectContainer).toBeInTheDocument();
  expect(screen.getByText("Select an option")).toBeInTheDocument();
});

test("renders SelectField with selected option", () => {
  render(
    <SelectField
      type="category"
      value={options[0]}
      onChange={onChange}
      options={options}
      placeholder="Select an option"
    />
  );

  const selectContainer = screen.getByRole("combobox");
  expect(selectContainer).toBeInTheDocument();
  expect(screen.getByText("Option 1")).toBeInTheDocument();
});

test("calls onChange when an option is selected", () => {
  render(
    <SelectField
      type="category"
      value={null}
      onChange={onChange}
      options={options}
      placeholder="Select an option"
    />
  );

  const selectContainer = screen.getByRole("combobox");
  fireEvent.click(selectContainer);

  const optionToSelect = screen.getByText("Option 1");
  fireEvent.click(optionToSelect);

  expect(onChange).toHaveBeenCalledWith(options[0], "category");
});

test("clears selected option when clear button is clicked", () => {
  render(
    <SelectField
      type="category"
      value={options[0]}
      onChange={onChange}
      options={options}
      placeholder="Select an option"
    />
  );

  const clearButton = screen.getByLabelText("Clear selected category");
  fireEvent.click(clearButton);

  expect(onChange).toHaveBeenCalledWith(null, "category");
});
