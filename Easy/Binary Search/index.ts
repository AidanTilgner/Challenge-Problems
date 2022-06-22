const binarySearch = (nums: number[], target: number) => {
  let l = 0;
  let m = Math.round(nums.length / 2);
  let r = nums.length - 1;

  while (l < r) {
    if (nums[m] === target) {
      return m;
    }
    if (nums[m] > target) {
      r = m;
      m = Math.round(m / 2);
    }
    if (nums[m] < target) {
      l = m;
      m = Math.round((r - m) / r);
    }
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const target = 5;
console.log(binarySearch(nums, target));
