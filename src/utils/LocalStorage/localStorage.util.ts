export class LocalStorage {
  public static set(name: string, item: any) {
    return localStorage.setItem(name, JSON.stringify(item));
  }
  public static get(name: string) {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  }
  public static remove(name: string) {
    return localStorage.removeItem(name);
  }
}
