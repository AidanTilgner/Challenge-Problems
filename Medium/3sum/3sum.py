# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such
# that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
# Notice that the solution set must not contain duplicate triplets.

# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]

# Example 2:

# Input: nums = []
# Output: []

# Example 3:

# Input: nums = [0]
# Output: []


def ThreeSum(nums):
    triplets = []
    indexes = []
    for i in range(0, len(nums)):
        first = nums[i]
        for j in range(0, len(nums)):
            if i == j:
                continue
            second = nums[j]
            try:
                k = nums.index((second + first) * -1) 
            except:
                k = False
            if k and k != j and k != i:
                indexes.append([i, j, k])
    indexValues = []
    for i in range(0, len(indexes)):
        if (indexes[i][0] + indexes[i][1] + indexes[i][2]) not in indexValues:
            indexValues.append(indexes[i][0] + indexes[i][1] + indexes[i][2])
            triplets.append(
                [
                    nums[indexes[i][0]],
                    nums[indexes[i][1]],
                    nums[indexes[i][2]],
                ]
            )
    return triplets

print(ThreeSum([-1,0,1,2,-1,-4]))
