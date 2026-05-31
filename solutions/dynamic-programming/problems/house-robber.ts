/**
 * @file house-robber.ts
 * @description House Robber (LeetCode #198)
 *
 * --- Problem Description ---
 * You are a professional robber planning to rob houses along a street. Each house
 * has a certain amount of money stashed. Adjacent houses have security systems
 * connected — you cannot rob two adjacent houses. Given an integer array `nums`
 * representing the amount of money of each house, return the maximum amount you
 * can rob tonight without alerting the police.
 * Bottom-up DP: dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Space-optimize to O(1).
 *
 * --- Example ---
 * Input: nums = [2, 7, 9, 3, 1]
 * Output: 12
 * Explanation: Rob house 1 (2), house 3 (9), house 5 (1). Total = 12.
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 100
 * - 0 <= nums[i] <= 400
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [2,7,9,3,1]
 *    Expected: 12
 * 2. Two houses
 *    Input: nums = [1, 2]
 *    Expected: 2
 * 3. All same
 *    Input: nums = [2,2,2,2]
 *    Expected: 4
 */

export function rob(nums: number[]): number {
    // TODO: Implement the solution for House Robber
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(rob([2,7,9,3,1])); // Expected: 12
// console.log(rob([1,2,3,1]));   // Expected: 4
