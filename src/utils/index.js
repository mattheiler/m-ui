export function uuid() {
  return Math.random()
    .toString(36)
    .slice(4);
}

export function format(value, ...args) {
  return value.replace(/{(\d+)}/g, (match, number) => (args[number] !== undefined ? args[number] : match));
}
