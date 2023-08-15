import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "components/Pages/BookingPage/BookingForm/BookingForm";
import * as useExistingBookingSlotsHook from "hooks/useExistingBookingSlots";
import * as TableReservationApi from "api/tableReservation";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("BookingForm", () => {
  beforeEach(() => {
    jest.spyOn(useExistingBookingSlotsHook, "default").mockReturnValue({
      isLoading: false,
      existingBookingSlots: new Set(),
    });
    jest
      .spyOn(TableReservationApi, "createTableReservation")
      .mockImplementation(() => new Promise(null));
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
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
  it("should have form fields with proper html5 validation attributes", () => {
    render(<BookingForm />);
    const dateField = screen.getByRole("dialog", { name: "Choose date" });
    expect(dateField).toHaveAttribute("type", "date");
    expect(dateField).toHaveAttribute("required", "");

    const timeField = screen.getByRole("combobox", { name: "Choose time" });
    expect(timeField).toHaveAttribute("required", "");

    const occasionField = screen.getByRole("combobox", { name: "Occasion" });
    expect(occasionField).toHaveAttribute("required", "");

    const noOfGuestsField = screen.getByRole("spinbutton", {
      name: "Number of guests",
    });
    expect(noOfGuestsField).toHaveAttribute("required", "");
    expect(noOfGuestsField).toHaveAttribute("min", "1");
    expect(noOfGuestsField).toHaveAttribute("max", "10");
  });
  it("should validate fields", async () => {
    render(<BookingForm />);

    userEvent.click(
      screen.getByRole("button", { name: "Make Your reservation" }),
    );

    expect(await screen.findByText("Date is required")).toBeInTheDocument();
    expect(screen.getByText("Time is required")).toBeInTheDocument();
    expect(screen.getByText("Guests is required")).toBeInTheDocument();
  });
});
