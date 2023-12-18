import React from "react";
import { render, screen } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero component with correct content", () => {
  render(<Hero />);

  const titleElement = screen.getByText("Bookworm's Wonderland");
  const subtitleElement = screen.getByText(
    "Discover new worlds and universes with us"
  );
  const textElement = screen.queryByText((content, element) => {
    return (
      element?.tagName.toLowerCase() === "p" &&
      content.includes(
        "Explore our collection of classic and contemporary books."
      )
    );
  });

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
