/**
 * @file longest-increasing-subsequence.ts
 * @description Longest Increasing Subsequence (LeetCode #300)
 *
 * --- Problem Description ---
 * Given an integer array `nums`, return the length of the longest strictly increasing
 * subsequence. A subsequence is derived by deleting some or no elements without
 * changing the order of remaining elements.
 *
 * Two approaches:
 *   1. DP — O(N²): dp[i] = max(dp[j]+1) for all j < i where nums[j] < nums[i]
 *   2. Patience sorting (binary search) — O(N log N): maintain tails array
 *
 * --- Example ---
 * Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * Output: 4
 * Explanation: The LIS is [2, 3, 7, 101].
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 2500
 * - -10^4 <= nums[i] <= 10^4
 *
 * --- Target Complexity ---
 * Time Complexity: O(N log N) with patience sorting
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [10,9,2,5,3,7,101,18]
 *    Expected: 4
 * 2. All decreasing
 *    Input: [3,2,1]
 *    Expected: 1
 * 3. All increasing
 *    Input: [0,1,2,3,4]
 *    Expected: 5
 */

export function lengthOfLIS(nums: number[]): number {
    // TODO: Implement the solution for Longest Increasing Subsequence
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
// console.log(lengthOfLIS([0,1,0,3,2,3]));          // Expected: 4
