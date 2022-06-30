package main

import (
	_ "fmt"
)

type TreeNode struct {
	value int
	left  *TreeNode
	right *TreeNode
}

func main() {

}

func same(node1, node2 *TreeNode) bool {
	if node1 == nil && node2 == nil {
		return true
	}

	if node1 == nil || node2 == nil || node1 != node2 {
		return false
	}

	return same(node1.left, node2.left) && same(node1.right, node2.right)
}
