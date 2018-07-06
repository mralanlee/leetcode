/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var diff = nums.indexOf(target - nums[i])
        if (diff > -1 && diff !== i) {
            return [i, diff]
        }
    }
};