// Logic bug: loose falsy check treats 0 as missing value
function getDiscount(amount) {
  if (!amount) return 0; // 0 becomes falsy - no discount for zero amount logic breaks
  return Math.min(10, amount * 0.1);
}
console.log(getDiscount(0)); // expects 0? ambiguous logic
