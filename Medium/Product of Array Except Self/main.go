package main

import (
	"fmt"
	_ "fmt"
)

func main() {
	nums := []int{1, 2, 3, 4}
	fmt.Println("Output is: ", prod(nums))
}

func prod(nums []int) []int {
	output := make([]int, len(nums))

	prefix := 1
	for i := range nums {
		output[i] = prefix
		prefix *= nums[i]
	}

	postfix := 1
	for i := len(nums) - 1; i >= 0; i-- {
		output[i] *= postfix
		postfix *= nums[i]
	}

	return output
}
