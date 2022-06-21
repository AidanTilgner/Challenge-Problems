package main

import (
	"fmt"
)

func main() {
	s := "taco"
	t := "ocat"

	fmt.Printf("Result: %v", validAnagram(s, t))
}

func validAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	check := make(map[byte]int, len(t))
	for i := 0; i < len(s); i++ {
		check[s[i]] = i
	}
	for i := 0; i < len(t); i++ {
		_, ok := check[t[i]]
		if !ok {
			return false
		}
	}
	return true
}
