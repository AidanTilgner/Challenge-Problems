package main

import (
	_ "fmt"
)

func main() {

}

type LinkNode struct {
	value int
	next  *LinkNode
}

func merge(l1, l2 LinkNode) LinkNode {
	dummy := LinkNode{}
	tail := dummy

	for l1 != (LinkNode{}) && l2 != (LinkNode{}) {
		if l1.value < l2.value {
			tail.next = &l1
			l1 = *l1.next
			continue
		}
		tail.next = &l2
		l2.next = &l2
		tail = *tail.next
	}

	if l1 != (LinkNode{}) {
		tail.next = &l1
	}

	if l2 != (LinkNode{}) {
		tail.next = &l2

	}

	return dummy
}
