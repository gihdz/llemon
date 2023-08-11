interface Params {
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
      timeout || Math.random() * 2000,
    );
  });
};

const createTableReservation = async (params: Params) => {
  // call api

  try {
    await mockAsyncCall({ success: true, data: { code: 200, data: params } });
  } catch (e) {
    console.log(e.message);
  }
};

export default createTableReservation;
