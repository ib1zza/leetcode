/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let z = "";
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "-") z = "-";
    if (Number(s[i])) {
      for (let j = i; j < s.length; j++) {
        Number(ans) === NaN && break;
        ans += s[i];
      }
    }
  }
  const a = parseInt(s);
  if (Math.abs(a) > 2147483648) {
    return a > 0 ? 2147483647 : -2147483648;
  }
  return parseInt(s);
};
