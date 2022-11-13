var convert = function (s, numRows) {
  //   s = s.split("");
  let o = {};

  if (numRows === 1) return s;
  for (let i = 0; i < numRows; i++) {
    o[i] = [];
  }

  while (s.length !== 0) {
    for (let i = 0; i < numRows - 1; i++) {
      if (s[i] === undefined) {
        break;
      }
      o[i].push(s[i]);
    }
    s = s.slice(numRows - 1);

    for (let i = 0; i < numRows - 1; i++) {
      if (s[i] === undefined) {
        break;
      }
      o[numRows - 1 - i].push(s[i]);
    }

    s = s.slice(numRows - 1);
  }

  let ans = "";
  for (const key in o) {
    ans += o[key].toString();
  }

  return ans;
};

console.log(convert("S", 4));
