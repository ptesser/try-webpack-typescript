export function keys<T>(obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}