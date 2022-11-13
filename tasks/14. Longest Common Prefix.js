var longestCommonPrefix = function (strs) {
  let ans = "";

  while (true) {
    const pref = ans + strs[0][ans.length];
    let flag = false;
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i].startsWith(pref)) {
        flag = true;
        break;
      }
    }
    if (flag) {
      return ans;
    } else {
      ans = pref;
    }
  }
};
