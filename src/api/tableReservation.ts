export interface TableReservation {
  date: string;
  time: string;
  noOfGuests: number;
  occasion: string;
}

interface AsyncMockParams<T> {
  success: boolean;
  timeout?: number;
  data?: T;
}

const mockAsyncCall = async <T>({
  success,
  timeout,
  data,
}: AsyncMockParams<T>) => {
  return new Promise<T | null>((resolve, reject) => {
    setTimeout(
      () => {
        if (success) {
          resolve(data || null);
        } else {
          reject({ message: "Error" });
        }
      },
      timeout || Math.random() * 4000,
    );
  });
};

const RESERVATIONS_LS_KEY = "LITTLE_LEMON_TABLE_RESERVATIONS_STORAGE_KEY";
const getReservations = (): TableReservation[] => {
  const storedReservations = localStorage.getItem(RESERVATIONS_LS_KEY);
  if (storedReservations) {
    const reservations: TableReservation[] = JSON.parse(storedReservations);
    return reservations;
  }

  return [];
};

const saveReservation = (tableReservation: TableReservation) => {
  const reservations = getReservations();
  reservations.push(tableReservation);
  localStorage.setItem(RESERVATIONS_LS_KEY, JSON.stringify(reservations));
};

export const fetchReservations = async (): Promise<TableReservation[]> => {
  try {
    const reservations = getReservations();
    const response = await mockAsyncCall({
      success: true,
      data: { code: 200, data: reservations },
      timeout: 100,
    });
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
  return [];
};

export const createTableReservation = async (params: TableReservation) => {
  // call api
  try {
    const response = await mockAsyncCall({
      success: true,
      data: { code: 200, data: params },
    });
    saveReservation(response.data);
  } catch (e) {
    console.log(e.message);
  }
};

const seededRandom = (seed: number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};
export const getAvailableTimes = (date: Date) => {
  let result = [];
  let random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};

export const testsExports = {
  getReservations,
  saveReservation,
};
