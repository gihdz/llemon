import { getAvailableTimes } from "./getAvailableTimes";

describe("getAvailableTimes", () => {
  it("should get proper times for a given date", () => {
    let date = new Date("2023-08-10");
    const availableTimes = getAvailableTimes(date);
    expect(availableTimes).toEqual([
      "17:00",
      "17:30",
      "18:00",
      "19:00",
      "19:30",
      "20:00",
      "21:30",
      "22:30",
      "23:00",
    ]);
  });
});
