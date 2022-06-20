package main

import (
	"fmt"
)

func main() {
	prices := []int{2, 1, 7, 3, 8, 1}
	result := bestTime(prices)
	fmt.Println("The result is: ", result)
}

func bestTime(prices []int) int {
	currMax := 0
	l, r := 0, 1

	for r < len(prices) {
		if prices[l] > prices[r] {
			l += 1
			r += 1
			continue
		}
		if prices[r] > prices[l] {
			if currMax < (prices[r] - prices[l]) {
				currMax = prices[r] - prices[l]
			}
		}
		r++
	}

	return currMax
}
