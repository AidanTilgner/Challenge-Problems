/**
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */

/**
 * I: [1, 2, 3, -2, 4, 5]
 * O: 9
 */

// Kadane's algorithm

const findMaxSubarray = (nums: number[]): number => {
  let max = Math.max(...nums);
  let currSum = 0;

  nums.forEach((num) => {
    currSum = Math.max(num, currSum + num);
    max = Math.max(max, currSum);
  });

  return max;
};

console.log("Test: ", findMaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
