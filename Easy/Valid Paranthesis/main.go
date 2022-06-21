package main

import (
	"fmt"
)

func main() {
	testString := "(())(){}"
	result := validParenthesis(testString)

	fmt.Println("Result: ", result)

}

var stacksize int

type Stack struct {
	items []string
	top   int
}

func (s *Stack) Push(value string) {
	if s.top == stacksize-1 {
		fmt.Println("Stack Overflow, cannot insert more values.")
		return
	}
	s.items = append(s.items, value)
	s.top++
}

func (s *Stack) Pop() string {
	if s.top == -1 {
		fmt.Println("Stack Underflow, no values to remove.")
		return ""
	}

	poppedElement := s.items[s.top]
	s.items = s.items[:s.top]
	s.top--
	return poppedElement
}

func (s *Stack) isEmpty() bool {
	if s.top == -1 {
		fmt.Println("Stack is empty")
		return true
	}
	return false
}

func (s *Stack) Peek() string {
	if s.top == -1 {
		fmt.Println("Stack is empty")
		return ""
	}

	element := s.items[s.top]
	return element
}

func (s *Stack) Display() {
	fmt.Print("Stack : ")
	for _, v := range s.items {
		fmt.Print(v, ", ")
	}
	fmt.Print("\n")
}

func validParenthesis(pars string) bool {
	stacksize = len(pars)
	checkStack := Stack{
		top: -1,
	}
	pairs := map[string]string{
		"(": ")",
		"[": "]",
		"{": "}",
	}

	for _, char := range pars {
		// Is it an opening brace?
		_, ok := pairs[string(char)]

		if ok {
			// If so, push to stack and continue
			checkStack.Push(string(char))
			continue
		}

		// If not, we're going to find the top element of the stack for later use
		peek := checkStack.Peek()

		// Check the value of the brace in the map to find the corresponding closing character
		val := pairs[peek]

		// If our character doesn't equal the closing character then it isn't valid
		if string(char) != val {
			return false
		}

		// If it does though, we can pop the peeked element from the stack and move on
		checkStack.Pop()
	}

	// If the stack is empty and we haven't returned true yet, we did it
	return checkStack.isEmpty()
}
