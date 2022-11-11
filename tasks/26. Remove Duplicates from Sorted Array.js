var removeDuplicates = function (nums) {
  let uniq = -101;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > uniq) {
      uniq = nums[i];
      nums[counter] = nums[i];
      counter++;
    }
  }
  return counter;
};
