/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

*/

// IDEA 1: FIND ALL THE POSSIBLE SUBARRAYS USING BRUTE FORCE, ADD THEM TO THE POSSIBLES ARRAY, AND FIND THE MAX OF THAT

let maxSubarray1 = (nums) => {
  let possibles = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] < nums[i + 1]) continue;
    let currSum = 0;
    for (let j = i; j < nums.length; j++) {
      currSum += nums[j];
      possibles.push(currSum);
    }
  }
  return Math.max(...possibles);
};

console.log(maxSubarray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
