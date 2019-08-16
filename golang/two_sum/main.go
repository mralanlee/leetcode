package main

func TwoSum(nums []int, target int) []int {
	obj := make(map[int]int)

	for index, value := range nums {
		diff := target - value

		_, ok := obj[diff]

		if ok {
			return []int{obj[diff], index}
		}

		obj[value] = index
	}

	return []int{}
}
