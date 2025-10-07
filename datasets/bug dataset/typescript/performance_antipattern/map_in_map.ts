// Performance antipattern: nested map/filter causing quadratic complexity over large arrays
export function heavyTransform(arr: number[]) {
  return arr.map((a) => arr.filter((b) => b % a === 0).map((b) => b * 2));
}
