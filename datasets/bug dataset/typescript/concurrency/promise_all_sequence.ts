// Concurrency bug: executing heavy async tasks sequentially instead of in parallel
export async function doMany(tasks: (() => Promise<any>)[]) {
  const results = [];
  for (const t of tasks) {
    // awaiting inside loop - slower than Promise.all
    results.push(await t());
  }
  return results;
}
