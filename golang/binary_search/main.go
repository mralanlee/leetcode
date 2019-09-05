package main

func Search(nums []int, target int) int {
	return helper(nums, target, 0, len(nums)-1)
}

func helper(nums []int, target int, left int, right int) int {
	if left > right {
		return -1
	}

	middleIndex := (left + right) / 2

	if nums[middleIndex] == target {
		return middleIndex
	} else if nums[middleIndex] > target {
		return helper(nums, target, left, middleIndex-1)
	} else {
		return helper(nums, target, middleIndex+1, right)
	}
}
