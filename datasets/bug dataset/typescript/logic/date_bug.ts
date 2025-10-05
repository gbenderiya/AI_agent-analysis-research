// Logic bug: incorrect timezone handling by using getDate instead of getUTCDate in shared service
export function isSameDay(a: Date, b: Date) {
  return a.getDate() === b.getDate(); // fails across timezone boundaries
}
