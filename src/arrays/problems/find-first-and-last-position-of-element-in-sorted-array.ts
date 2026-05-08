/**
 * @file find-first-and-last-position-of-element-in-sorted-array.ts
 * 
 * 34. Find First and Last Position of Element in Sorted Array
 * Medium
 * 
 * Given an array of integers nums sorted in non-decreasing order, find the starting 
 * and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 * 
 * Constraints:
 * - 0 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 * - nums is a non-decreasing array.
 * - -10^9 <= target <= 10^9
 */

export function searchRange(nums: number[], target: number): number[] {
    // Your implementation goes here
    return [-1, -1];
}

// Tests
console.log('nums = [5,7,7,8,8,10], target = 8 =>', searchRange([5, 7, 7, 8, 8, 10], 8));
console.log('nums = [5,7,7,8,8,10], target = 6 =>', searchRange([5, 7, 7, 8, 8, 10], 6));
