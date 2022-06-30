package main

import (
	_ "fmt"
)

func main() {

}

type TrieNode struct {
	Childrens [27]*TrieNode
	IsWordEnd bool
}

type WordDictionary struct {
	Root *TrieNode
}

func (t *WordDictionary) insert(word string) {
	wordLength := len(word)
	current := t.Root
	for i := 0; i < wordLength; i++ {
		index := word[i] - 'a'
		if current.Childrens[index] == nil {
			current.Childrens[index] = &TrieNode{}
		}
		current = current.Childrens[index]
	}
	current.IsWordEnd = true
}

func (t *WordDictionary) find(word string) bool {
	wordLength := len(word)
	current := t.Root
	for i := 0; i < wordLength; i++ {
		index := word[i] - 'a'
		if current.Childrens[index] == nil {
			return false
		}
		current = current.Childrens[index]
	}
	return current.IsWordEnd
}
