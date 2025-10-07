/* API misuse: incorrect Buffer.concat usage with numeric length causes silent truncation */
const parts = [Buffer.from('hello'), Buffer.from('world')]
const joined = Buffer.concat(parts, 5) // wrong total length, may truncate
console.log(joined.toString())
