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
