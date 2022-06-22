package main

func main() {

}

type MinStack struct {
	stack    []int
	mintrace []int
}

func (s *MinStack) Push(num int) {
	s.stack = append(s.stack, num)
	if num < s.mintrace[len(s.mintrace)-1] {
		num = s.mintrace[len(s.mintrace)-1]
	}
	s.mintrace = append(s.mintrace, num)
}

func (s *MinStack) Pop() int {
	poppedElement := s.stack[len(s.stack)-1]
	s.stack = s.stack[:len(s.stack)-1]
	s.mintrace = s.mintrace[:len(s.mintrace)-1]
	return poppedElement
}

func (s *MinStack) Top() int {
	return s.stack[len(s.stack)-1]
}

func (s *MinStack) Min() int {
	return s.mintrace[len(s.mintrace)-1]
}
