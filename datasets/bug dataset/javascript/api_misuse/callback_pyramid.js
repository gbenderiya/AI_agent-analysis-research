// API misuse: deep callback pyramid causing hard-to-handle errors and logic duplication
function step1 (cb) {
  setTimeout(() => cb(null, 1), 10)
}
function step2 (x, cb) {
  setTimeout(() => cb(null, x + 1), 10)
}
step1((e, a) => {
  if (e) return
  step2(a, (e, b) => {
    if (e) return
    step2(b, (e, c) => {
      if (e) return
      console.log('done', c)
    })
  })
})
