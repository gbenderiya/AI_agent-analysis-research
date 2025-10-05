// Off-by-one: loop condition uses <= causing out of bounds access
export function copyAll(src: number[]) {
  const dst = [];
  for (let i = 0; i <= src.length; i++) {
    dst.push(src[i]); // last push is undefined
  }
  return dst;
}
