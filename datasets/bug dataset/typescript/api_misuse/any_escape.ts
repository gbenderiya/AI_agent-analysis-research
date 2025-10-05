// API misuse: using 'any' to silence types leads to runtime surprises
export function parse(payload: any) {
  // assume payload.items exists
  return payload.items.map((i: any) => i.value);
}
