package main

import "testing"

func TestTwoSum(t *testing.T) {
	res := TwoSum([]int{2, 7, 11, 15}, 9)

	expect := []int{0, 1}

	for i := range res {
		if res[i] != expect[i] {
			t.Errorf("Indexes were incorrect, got: %v, want: %v", res, expect)
		}
	}
}
