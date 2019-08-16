package main

import "testing"

func TestSearch(t *testing.T) {
	res := Search([]int{-1, 0, 3, 5, 9, 12}, 9)
	expect := 4

	if res != expect {
		t.Errorf("Binary Search result, got %v, want %v", res, expect)
	}
}
