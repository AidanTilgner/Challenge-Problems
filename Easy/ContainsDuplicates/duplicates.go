package main

import (
	"fmt"
)

func main() {
	nums := []int{1, 2, 3, 4, 5}
	result := containsDuplicate(nums)
	fmt.Printf("Result without duplicate: %v \n", result)
	nums = append(nums, 1)
	result = containsDuplicate(nums)
	fmt.Printf("Result with duplicate: %v \n", result)
}

func containsDuplicate(nums []int) bool {
	checks := make(map[int]int, len(nums))
	for i := 0; i < len(nums); i++ {
		_, ok := checks[nums[i]]
		if ok {
			return true
		}
		checks[nums[i]] = i
	}
	return false
}
