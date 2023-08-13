import { renderHook, waitFor } from "@testing-library/react";
import useExistingBookingSlots from "./useExistingBookingSlots";
import * as TableReservationApi from "api/tableReservation";

describe("useExistingBookingSlots hook", () => {
  let fetchReservationsSpy: jest.SpyInstance;
  beforeEach(() => {
    fetchReservationsSpy = jest.spyOn(TableReservationApi, "fetchReservations");
  });
  it("should return proper set of booked slots", async () => {
    fetchReservationsSpy.mockReturnValue([
      {
        date: "2023-08-13",
        time: "15:00",
      },
    ]);
    const { result } = renderHook(() => useExistingBookingSlots());
    await waitFor(() =>
      expect(result.current.existingBookingSlots.size).toBeGreaterThan(0),
    );
    expect(result.current.existingBookingSlots.has("2023-08-13-15:00")).toBe(
      true,
    );
  });
});
