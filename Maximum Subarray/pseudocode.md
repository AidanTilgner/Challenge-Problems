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

For the general function:

1. Initialize possibles array
2. Begin a loop to go through each number
3. Start iterating through each subarray starting at index 1
4. If index 0 + index 1 < index 1, drop index 1
5. After each subarray, add the sum to the possibles array
6. After all this, find the maximum number in the possibles array

To find all possible subarrays:

1. Start at a current index, add it to the possibles array
2. Add the current index to the current sum for each iteration in the nested for loop
3. For every iteration, add the current sum to the possibles array

Pseudocode:

def MaxSubarray (nums):
\\for(every index in nums):
\\\\if(current index + next index < next index):
\\\\\\skip this iteration
\\\\current sum = current number
\\\\for(every index past the current one in nums):
\\\\\\add current number to current sum
\\\\\\add current sum to possibles
