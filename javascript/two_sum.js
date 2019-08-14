/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // one loop
    let track = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (track.has(diff)) {
        return [track.get(diff), i]
      }

      track.set(nums[i], i)
    }
    return [];
};
