import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Having Form fields by there name", () => {
  render(<App />);
  expect(screen.getByLabelText("Name")).toBeInTheDocument();

  expect(screen.getByLabelText("Relationship")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});
