import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import NotFound from "./NotFound";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("NotFound Component", () => {
  it("renders the component correctly", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    expect(screen.getByText("404 - Page Not Found")).toBeInTheDocument();
    expect(
      screen.getByText("The page you are looking for does not exist.")
    ).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Go to All Books" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
