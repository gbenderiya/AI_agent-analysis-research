// Logic bug: mutating input array passed from caller causes surprising side-effects
export function addTag(tags: string[], tag: string) {
  tags.push(tag); // should return new array to avoid changing caller's array
  return tags;
}
