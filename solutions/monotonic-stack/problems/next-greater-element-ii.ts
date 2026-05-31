/**
 * @file next-greater-element-ii.ts
 * @description Next Greater Element II (LeetCode #503)
 *
 * --- Problem Description ---
 * Given a circular integer array `nums` (the next element of `nums[nums.length-1]`
 * is `nums[0]`), return the next greater number for every element in `nums`.
 * The next greater number of a number x is the first greater number to its
 * traversing-order next in the array. If it doesn't exist, return -1 for this number.
 * Use a monotonic decreasing stack; iterate the array twice (simulate circular).
 *
 * --- Example ---
 * Input: nums = [1, 2, 1]
 * Output: [2, -1, 2]
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [1, 2, 1]
 *    Expected: [2, -1, 2]
 * 2. All same
 *    Input: [1, 1, 1]
 *    Expected: [-1, -1, -1]
 * 3. Strictly increasing
 *    Input: [1, 2, 3, 4, 5]
 *    Expected: [2, 3, 4, 5, -1]
 */

export function nextGreaterElements(nums: number[]): number[] {
    // TODO: Implement the solution for Next Greater Element II
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(nextGreaterElements([1, 2, 1])); // Expected: [2, -1, 2]
