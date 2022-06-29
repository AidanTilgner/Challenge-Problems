package main

import (
	"fmt"
)

type Node struct {
	value int
	left  *Node
	right *Node
}

func main() {
	root := Node{
		value: 1,
	}
	left := Node{
		value: 2,
	}
	right := Node{
		value: 3,
	}
	root.right = &right
	root.left = &left

	fmt.Println("The max depth of the tree is: ", maxDepth(&root))
}

func max(num1, num2 int) int {
	if num1 > num2 {
		return num1
	}
	return num2
}

func maxDepth(node *Node) int {
	if node == nil {
		return 0
	}

	return 1 + max(maxDepth(node.left), maxDepth(node.right))
}
