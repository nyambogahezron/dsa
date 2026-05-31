/**
 * @file longest-consecutive-sequence.ts
 * @description Longest Consecutive Sequence (LeetCode #128)
 *
 * --- Problem Description ---
 * Given an unsorted array of integers `nums`, return the length of the longest
 * consecutive elements sequence. You must write an algorithm that runs in O(N) time.
 * Use a HashSet: only start counting from elements that have no left neighbor
 * (num - 1 is not in the set), then expand rightward.
 *
 * --- Example ---
 * Input: nums = [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive sequence is [1, 2, 3, 4].
 *
 * --- Constraints ---
 * - 0 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [100, 4, 200, 1, 3, 2]
 *    Expected: 4
 * 2. All same
 *    Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
 *    Expected: 9
 * 3. Empty array
 *    Input: nums = []
 *    Expected: 0
 */

export function longestConsecutive(nums: number[]): number {
    // TODO: Implement the solution for Longest Consecutive Sequence
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(longestConsecutive([100,4,200,1,3,2])); // Expected: 4
