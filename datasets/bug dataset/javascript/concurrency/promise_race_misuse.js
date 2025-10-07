// Concurrency bug: using Promise.race to implement timeout without cleanup leads to dangling operations
function fetchWithTimeout (promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej('timeout'), ms))
  ])
}
// original fetch may still continue running after timeout
