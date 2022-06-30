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

	prefix := 1                // Init prefix
	for i, num := range nums { // Forward iteration
		output[i] = prefix // Initialize output at index to whatever prefix is
		prefix *= num      // Multiply prefix by whatever num is at this index
	}

	postfix := 1                          // Init postfix
	for i := len(nums) - 1; i >= 0; i-- { // Backwards iteration
		output[i] *= postfix // Multiply i, which was initialize by the previous for, to whatever postfix is
		postfix *= nums[i]   // Multiply postfix by whatever nums is at this index
	}

	return output
}
