// Off-by-one: substring end index off-by-one losing last char
function prefix (s, n) {
  return s.substring(0, n - 1) // should be n
}
console.log(prefix('hello', 3)) // expects 'hel' but returns 'he'
