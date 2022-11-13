var longestPalindrome = function (s) {
  var isPalindrome = function (x) {
    let length = Math.floor(x.length / 2);
    for (let i = 0; i < length; i++) {
      if (x[i] != x[x.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  let ans = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let a = s.slice(i, j + 1);
      a.length > ans.length && isPalindrome(a) && (ans = a);
    }
  }
  return ans;
};
