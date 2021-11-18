Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such
that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

# Input: nums = [-1,0,1,2,-1,-4]

# Output: [[-1,-1,2],[-1,0,1]]

IDEA: Since we're trying to find triplets that add to 0, one way to figure those
out would be to 0 numbers out. For every index, we could search the array to find
two numbers that added together, are equal to the opposite of the index.

1. Create an tripletIndexes and triplets array
2. Create a loop to iterate through each index
3. For each index iterate through the array again
4. For each index that isn't the current one, add to the current index
5. Then, search the array for the opposite of that addition, which will 0 it out
6. If the array contains it, add the indexes of those three numbers to the tripletIndexes array
7. Move onto the next iteration for this index until you've done this for every other index
8. Repeat this for every number in the array
9. Then for each index in the triplets array, add the triplet indexes together
10. If this new number doesn't match any previous addition, then it isn't a duplicate

function threeSum (nums) {
tripletIndexes
triplets
for(first in nums){
for(second in nums){
if(second's index == curr's index) skip this iteration;
thirdIndex = nums.indexof(negative of (second + first))
if (thirdIndex isn't -1){
add these three indexes to the indexes array
}
}
}
checks[]
for(every index in triplets){
if(the indexes added together aren't in the checks array){
add the array to triplets
}
}
return triplets
}
