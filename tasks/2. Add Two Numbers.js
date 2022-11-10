const returnNum = (obj) => {
  return String(obj.val) + (obj.next === null ? "" : returnNum(obj.next));
};

const createList = (num) => {
  return {
    val: num[0],
    next: num.length === 1 ? null : createList([...num].slice(1)),
  };
};

var addTwoNumbers = function (l1, l2) {
  let l1copy = returnNum(l1).split("").reverse().join("");
  let l2copy = returnNum(l2).split("").reverse().join("");
  let ans = String(BigInt(l1copy) + BigInt(l2copy))
    .split("")
    .reverse();
  return createList(ans);
};
