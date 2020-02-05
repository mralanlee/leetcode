/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const sums = [];

  for (let i = 0; i < sorted.length; i++) {
    // in the for loop's context, i is the base
    // therefore if sorted is greater than our target, then there is no need to continue
    if (sorted[i] > 0) break;
    // if the number is greater than start index
    // and current number is equal to previous number
    // skip to prevent defaults
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    let leftIndex = i + 1;
    let rightIndex = sorted.length - 1;

    // while loop would be the left and right pointers to right of i
    while (leftIndex < rightIndex) {
      let total = sorted[i] + sorted[leftIndex] + sorted[rightIndex];

      if (0 === total) {
        sums.push([sorted[i], sorted[leftIndex], sorted[rightIndex]]);
        // keep passing if incrementing until left is no longer equal to number next to it, otherwise duplicates
        while (sorted[leftIndex] === sorted[leftIndex + 1]) leftIndex++;
        // keep passing if incrementing until right is no longer equal to number next to it, otherwise duplicates
        while (sorted[rightIndex] === sorted[rightIndex - 1]) rightIndex--;
        leftIndex++;
        rightIndex--;
      } else if (0 < total) {
        // if 0 is less than total, than that means we have to move rightIndex closer
        rightIndex--;
      } else {
        // if 0 is greater than total, than we have to move left index closer
        leftIndex++;
      }
    }
  }
  return sums;
};

module.exports = threeSum;
