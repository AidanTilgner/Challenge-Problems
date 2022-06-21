package main

import (
	"fmt"
)

func main() {
	nums := []int{1, 2, 5, 6}
	target := 7
	result, worked := twoSum(nums, target)
	fmt.Printf("Result: %v %v", result, worked)
}

func twoSum(nums []int, target int) ([2]int, bool) {
	check := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		check[nums[i]] = i
	}
	for i := 0; i < len(nums); i++ {
		val, ok := check[target-nums[i]]
		if ok {
			return [2]int{i, val}, true
		}
	}
	return [2]int{0, 0}, false
}
