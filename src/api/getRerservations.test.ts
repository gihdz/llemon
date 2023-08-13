import { testsExports } from "./tableReservation";

describe("getReservations", () => {
  const localStorageGetItemMock = jest.fn();
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: localStorageGetItemMock,
        setItem: jest.fn(),
      },
      writable: true,
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should get reservations from local storage", () => {
    const reservationMock = [{ date: "2020-10-10", time: "10:30" }];
    localStorageGetItemMock.mockReturnValue(JSON.stringify(reservationMock));
    const parsedValue = testsExports.getReservations();

    expect(localStorageGetItemMock).toHaveBeenCalledWith(
      "LITTLE_LEMON_TABLE_RESERVATIONS_STORAGE_KEY",
    );
    expect(parsedValue).toEqual(reservationMock);
  });
});
