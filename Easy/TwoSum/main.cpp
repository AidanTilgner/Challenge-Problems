/*

Given an array of integers nums and an integer target, return indices of the two
numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:


Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

#include <iostream>
#include <vector>
#include <array>
#include <cmath>

std::vector<int> findIndices(std::vector<int> array, int target)
{
    std::vector<int> indices;

    for(int i = 0; i < array.size(); i++)
    {
        int num1 = array[i]; // Get the first number

        for(int j = 1; j < array.size() + 1; j++)
        {
            int num2 = array[j]; // Get the second number


            // Now if they both add up to the target, then return them
            if (num1 + num2 == target)
            {
                // If it adds up, then push to the vector and return it, otherwise, go on
                indices.push_back(i);
                indices.push_back(j);
                return indices;
            }
        }
    }

    return indices;
}

int main()
{
    std::vector<int> numbers = {5, 7, 8, 9};
    int target = 12;

    std::vector<int> indices = findIndices(numbers, target);

    // TESTING
    std::cout << "[";
    for (int i = 0; i < 2; i++)
    {
        std::cout << indices[i];
        i < 1 && std::cout << ", ";
    }
    std::cout << "]";

    return 0;
}

