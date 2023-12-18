import React from "react";
import { render, screen } from "@testing-library/react";

import Spinner from "./Spinner";

describe("Spinner Component", () => {
  it("renders the spinner component", () => {
    render(<Spinner />);

    const spinnerContainer = screen.getByRole("spinner");
    expect(spinnerContainer).toBeInTheDocument();
  });
});
