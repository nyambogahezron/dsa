/**
 * @file subarray-sum-equals-k.ts
 * @description Subarray Sum Equals K
 *
 * --- Problem Description ---
 * Given an array of integers `nums` and an integer `k`, return the total number of
 * subarrays whose sum equals `k`.
 * Use a prefix-sum with a HashMap to track how many times each running sum has appeared.
 *
 * --- Example ---
 * Input: nums = [1, 1, 1], k = 2
 * Output: 2
 * Explanation: [1,1] starting at index 0 and [1,1] starting at index 1.
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for negative numbers and k = 0.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [1, 1, 1], k = 2
 *    Expected: 2
 * 2. Negative numbers
 *    Input: nums = [1, -1, 1], k = 1
 *    Expected: 3
 * 3. Single element
 *    Input: nums = [1], k = 0
 *    Expected: 0
 */

export function subarraySum(nums: number[], k: number): number {
    // TODO: Implement the solution for Subarray Sum Equals K
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(subarraySum([1, 1, 1], 2)); // Expected: 2
