/**
 * @file maximum-subarray-prefix.ts
 * @description Maximum Subarray (Kadane's / Prefix Sum view) (LeetCode #53)
 *
 * --- Problem Description ---
 * Given an integer array `nums`, find the subarray which has the largest sum and
 * return its sum. Can be solved with Kadane's algorithm or via prefix sums:
 * maxSum = max over all j of (prefix[j] - min(prefix[0..j-1])).
 *
 * --- Example ---
 * Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 6
 * Explanation: Subarray [4,-1,2,1] has the largest sum = 6.
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [-2,1,-3,4,-1,2,1,-5,4]
 *    Expected: 6
 * 2. All negative
 *    Input: [-1,-2,-3]
 *    Expected: -1
 * 3. Single element
 *    Input: [5]
 *    Expected: 5
 */

export function maxSubArray(nums: number[]): number {
    // TODO: Implement using prefix sum or Kadane's algorithm
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
