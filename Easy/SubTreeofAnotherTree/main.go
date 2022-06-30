package main

import (
	_ "fmt"
)

func main() {

}

type TreeNode struct {
	value int
	left  *TreeNode
	right *TreeNode
}

func isSubtree(root, subRoot *TreeNode) bool {
	if subRoot == nil {
		return true
	}

	if root == nil {
		return false
	}

	if sameTree(root, subRoot) {
		return true
	}

	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

func sameTree(node1, node2 *TreeNode) bool {
	if node1 == nil && node2 == nil {
		return true
	}

	if node1 == nil || node2 == nil || node1 != node2 {
		return false
	}

	return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right)
}
