import { useEffect, useState } from "react";
import { fetchReservations } from "api/tableReservation";

type UseExistingBookingSlotsHook = () => {
  isLoading: boolean;
  existingBookingSlots: Set<string>;
};

const useExistingBookingSlots: UseExistingBookingSlotsHook = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [existingBookingSlots, setExistingBookingSlots] = useState(
    new Set<string>([]),
  );

  useEffect(() => {
    (async () => {
      const reservations = await fetchReservations();
      const reservationSlotKeys = reservations.map(
        (reservation) => `${reservation.date}-${reservation.time}`,
      );

      setExistingBookingSlots(new Set(reservationSlotKeys));
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, existingBookingSlots };
};

export default useExistingBookingSlots;
