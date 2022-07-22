const threeSum = (nums: number[]): number[][] => {
  const output: number[][] = [];
  const sorted = [...nums].sort();

  sorted.forEach((a, i) => {
    if (i > 0 && a == sorted[i - 1]) {
      return;
    }

    let [l, r] = [i + 1, sorted.length - 1];
    while (l < r) {
      const sum = a + sorted[l] + sorted[r];
      if (sum > 0) {
        r -= 1;
        continue;
      }
      if (sum < 0) {
        l += 1;
        continue;
      }
      output.push([a, sorted[l], sorted[r]]);
      l += 1;
      while (sorted[l] == sorted[l - 1] && l < r) {
        l += 1;
      }
    }
  });

  return output;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log("Output: ", threeSum(nums));
