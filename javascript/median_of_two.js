/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b)
    const len = merged.length
    const even = len % 2 === 0
    const mid = Math.round(len / 2);
    
    return even ? ((merged[mid - 1] + merged[mid]) / 2) : merged[mid - 1]
};