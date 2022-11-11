var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const symbols = new Set(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      if (symbols.has(s[j])) {
        break;
      } else {
        symbols.add(s[j]);
      }
    }
    if (ans < symbols.size) ans = symbols.size;
  }
  return ans;
};
