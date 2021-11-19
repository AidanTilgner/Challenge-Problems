/*
Given an integer array nums, return true if any value appears at least twice in
the array, and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

#include <iostream>
#include <vector>

class Solution {
public:
  bool containsDuplicate(std::vector<int> &nums) {
    for (int i = 0; i < nums.size(); i++) {
      for (int j = 0; j < nums.size(); j++) {
        if (j != i && nums[i] == nums[j]) {
          return true;
        }
      }
    }

    return false;
  }
};

int main() {
  Solution question;
  std::vector<int> vector = {1, 2, 3, 3, 4, 5};
  std::cout << question.containsDuplicate(vector) << std::endl;
}
