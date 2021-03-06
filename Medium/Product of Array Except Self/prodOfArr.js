/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

function ProductOfArrayExceptSelf(nums) {
  let answers = [];
  for (let i = 0; i < nums.length; i++) {
    // For each number, reduce the array to all the numbers unless the number is the current one
    let answer = nums.reduce((prev, curr, index) => {
      if (index !== i) {
        return prev * curr;
      }
      return prev;
    });
    answers.push(answer);
  }
  return answers;
}

console.log(ProductOfArrayExceptSelf([-1, 1, 0, -3, 3]));
