export class Storage {
  static set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key: string) {
    return JSON.parse(localStorage.getItem(key) || "Key not found");
  }

  static has(key: string) {
    return !!localStorage.getItem(key);
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}

export function capitalaze(str: string) {
  return str
    .split(" ")
    .map((w) => {
      return w[0].toUpperCase() + w.substr(1);
    })
    .join(" ");
}
export function normalazeUrl(str: string) {
  return str.replace(" ", "").toLowerCase();
}

export function getChunks<T>(array: T[], chunk = 3): T[][] {
  return array.reduce((chunks, value, index) => {
    const chunkIndex = Math.floor(index / chunk);

    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(value);
    return chunks;
  }, []);
}
export function percentageOfAmount(base) {
  return (attitude) => {
    if (!base || !attitude) return 0;
    return (attitude / base) * 100;
  };
}

function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

export function numberDays(date) {
  const dateNow = new Date();
  if (date) {
    const lastDate = new Date(date);
    const diff = dateNow.getTime() - lastDate.getTime();
    const milliseconds = diff;

    const seconds = milliseconds / 1000;

    const minutes = seconds / 60;

    const hours = minutes / 60;

    const days = hours / 24;

    const noun = getNoun(days.toFixed(), "день", "дня", "дней");
    return `${days.toFixed()} ${noun}`;
  }

  return 0;
}

export const ruDays = (days) => {
  return getNoun(days.toFixed(), "день", "дня", "дней");
};

export function getRuDate(date) {
  return new Date(date).toLocaleString("ru", {
    timeZone: "UTC",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}

export function getRuFormatNumbers(number) {
  return new Intl.NumberFormat("ru-RU").format(number);
}

export const getFirstAndLast = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  return [arr[0], arr[arr.length - 1]];
};
export const getDayinMm = (day) => 24 * 60 * 60 * 1000 * day;
