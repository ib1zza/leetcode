const reverse = (num) => {
  const z = num < 0 ? "-" : "";
  let ans = String(Math.abs(num)).split("").reverse();
  if (Number(ans.join("")) >= 2147483647) {
    return 0;
  }
  return z + ans.join("");
};
