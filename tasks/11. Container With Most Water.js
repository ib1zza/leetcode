var maxArea = function (height) {
  let mx = 0;

  for (let i = 0; i < height.length - 1; i++) {
    if (height[i] * height.length - 1 - i < mx) continue;
    for (let j = i + 1; j < height.length; j++) {
      let ch = height[i] > height[j] ? height[j] : height[i];
      ch *= j - i;
      ch > mx && (mx = ch);
    }
  }

  return mx;
};
