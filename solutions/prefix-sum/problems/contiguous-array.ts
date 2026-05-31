/**
 * @file contiguous-array.ts
 * @description Contiguous Array (LeetCode #525)
 *
 * --- Problem Description ---
 * Given a binary array `nums`, return the maximum length of a contiguous subarray
 * with an equal number of 0s and 1s.
 * Key trick: replace 0s with -1s, then find the longest subarray with sum 0 using
 * a prefix sum HashMap (first occurrence of each running sum).
 *
 * --- Example ---
 * Input: nums = [0, 1]
 * Output: 2
 *
 * Input: nums = [0, 1, 0]
 * Output: 2
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 10^5
 * - nums[i] is either 0 or 1.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [0,1]
 *    Expected: 2
 * 2. Longer balanced
 *    Input: [0,1,0,1,1,0,0]
 *    Expected: 6 (or 7 — check LeetCode constraints)
 *    Expected: 6
 * 3. All zeros
 *    Input: [0,0,0]
 *    Expected: 0
 */

export function findMaxLength(nums: number[]): number {
    // TODO: Implement the solution for Contiguous Array
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(findMaxLength([0,1]));           // Expected: 2
// console.log(findMaxLength([0,1,0,1,1,0,0])); // Expected: 6
