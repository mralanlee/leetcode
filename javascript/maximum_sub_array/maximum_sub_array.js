var maxSubArray = function(nums) {
  let currMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (nums[i] > currMax) {
      currMax = nums[i];
    }
  }

  return currMax;
};

module.exports = maxSubArray;
