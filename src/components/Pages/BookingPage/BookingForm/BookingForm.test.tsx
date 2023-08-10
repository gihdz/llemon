import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "components/Pages/BookingPage/BookingForm/BookingForm";

describe("BookingForm", () => {
  it("should render properly", () => {
    render(<BookingForm />);
    expect(
      screen.getByRole("dialog", { name: "Choose date" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Choose time" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "Occasion" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: "Number of guests" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Make Your reservation" }),
    ).toBeInTheDocument();
  });
});
