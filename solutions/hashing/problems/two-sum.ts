/**
 * @file two-sum.ts
 * @description Two Sum (LeetCode #1)
 *
 * --- Problem Description ---
 * Given an array of integers `nums` and an integer `target`, return indices of the
 * two numbers such that they add up to `target`. You may assume that each input
 * would have exactly one solution, and you may not use the same element twice.
 * Use a HashMap storing value → index for O(1) complement lookup.
 *
 * --- Example ---
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9.
 *
 * --- Constraints ---
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [2, 7, 11, 15], target = 9
 *    Expected: [0, 1]
 * 2. Answer at end
 *    Input: nums = [3, 2, 4], target = 6
 *    Expected: [1, 2]
 * 3. Duplicate values
 *    Input: nums = [3, 3], target = 6
 *    Expected: [0, 1]
 */

export function twoSum(nums: number[], target: number): number[] {
    // TODO: Implement the solution for Two Sum
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
// console.log(twoSum([3, 2, 4], 6));       // Expected: [1, 2]
