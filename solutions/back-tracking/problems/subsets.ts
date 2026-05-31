/**
 * @file subsets.ts
 * @description Subsets
 *
 * --- Problem Description ---
 * Given an integer array `nums` of unique elements, return all possible subsets
 * (the power set). The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 * Use backtracking: at each index choose to include or skip the element.
 *
 * --- Example ---
 * Input: nums = [1, 2, 3]
 * Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for single and empty arrays.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N * 2^N)
 * Space Complexity: O(N * 2^N) for output; O(N) recursion stack
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [1, 2, 3]
 *    Expected: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
 * 2. Single element
 *    Input: nums = [0]
 *    Expected: [[], [0]]
 * 3. Two elements
 *    Input: nums = [1, 2]
 *    Expected: [[], [1], [2], [1,2]]
 */

export function subsets(nums: number[]): number[][] {
    // TODO: Implement the solution for Subsets
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(subsets([1, 2, 3]));
