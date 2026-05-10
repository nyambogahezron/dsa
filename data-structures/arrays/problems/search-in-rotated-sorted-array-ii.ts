/**
 * @file search-in-rotated-sorted-array-ii.ts
 * 
 * 81. Search in Rotated Sorted Array II
 * Medium
 * 
 * There is an integer array nums sorted in ascending order (with repeated values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
 * For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
 * 
 * Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
 * You must decrease the overall operation steps as much as possible.
 * 
 * Example 1:
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 * 
 * Example 2:
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 * 
 * Constraints:
 * - 1 <= nums.length <= 5000
 * - -10^4 <= nums[i] <= 10^4
 * - nums is guaranteed to be rotated at some pivot.
 * - -10^4 <= target <= 10^4
 */

export function search(nums: number[], target: number): boolean {
    // Your implementation goes here
    return false;
}

// Tests
console.log('[2,5,6,0,0,1,2], target=0 =>', search([2, 5, 6, 0, 0, 1, 2], 0));
console.log('[2,5,6,0,0,1,2], target=3 =>', search([2, 5, 6, 0, 0, 1, 2], 3));
