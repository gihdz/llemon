import { TableReservation, testsExports } from "api/tableReservation";

describe("saveReservation", () => {
  const localStorageSetItemMock = jest.fn();
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(),
        setItem: localStorageSetItemMock,
      },
      writable: true,
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should save in to local storage", () => {
    const tableReservation: TableReservation = {
      time: "11:30",
      date: "2023-08-23",
      noOfGuests: 4,
      occasion: "birthday",
    };

    testsExports.saveReservation(tableReservation);
    expect(localStorageSetItemMock).toHaveBeenCalledWith(
      "LITTLE_LEMON_TABLE_RESERVATIONS_STORAGE_KEY",
      JSON.stringify([tableReservation]),
    );
  });
});
