/* Concurrency bug: using var in loop causing closure to capture same i and wrong behavior */
function delayedLogs () {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i) // prints 3,3,3 instead of 0,1,2
    }, i * 10)
  }
}
delayedLogs()
