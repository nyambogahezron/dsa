/**
 * @file search-rotated-array.ts
 * @description Search in Rotated Sorted Array (LeetCode #33)
 *
 * --- Problem Description ---
 * There is an integer array `nums` sorted in ascending order (with distinct values).
 * Prior to being passed to your function, `nums` is possibly rotated at an unknown
 * pivot index k. Given the array `nums` and an integer `target`, return the index
 * of `target` if it is in `nums`, or -1 if it is not.
 * Must run in O(log N) time. Key insight: at every mid, one half is always sorted.
 *
 * --- Example ---
 * Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
 * Output: 4
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 5000
 * - -10^4 <= nums[i] <= 10^4
 * - All values in nums are unique.
 * - nums is an ascending array that is possibly rotated.
 * - -10^4 <= target <= 10^4
 *
 * --- Target Complexity ---
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [4,5,6,7,0,1,2], target = 0
 *    Expected: 4
 * 2. Not found
 *    Input: nums = [4,5,6,7,0,1,2], target = 3
 *    Expected: -1
 * 3. Single element
 *    Input: nums = [1], target = 0
 *    Expected: -1
 */

export function search(nums: number[], target: number): number {
    // TODO: Implement the solution for Search in Rotated Sorted Array
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
// console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1
