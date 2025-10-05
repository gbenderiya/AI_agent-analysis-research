// Logic bug: parseInt used without radix leading to octal surprises in older engines
function readHex(s) {
  return parseInt(s); // should use parseInt(s, 16) when expecting hex
}
console.log(readHex('0x10'));
