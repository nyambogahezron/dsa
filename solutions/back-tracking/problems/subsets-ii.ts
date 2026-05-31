/**
 * @file subsets-ii.ts
 * @description Subsets II (with duplicates)
 *
 * --- Problem Description ---
 * Given an integer array `nums` that may contain duplicates, return all possible
 * subsets (the power set). The solution set must not contain duplicate subsets.
 * Return the solution in any order.
 * Sort the array first, then use backtracking skipping duplicate elements at the
 * same recursion level.
 *
 * --- Example ---
 * Input: nums = [1, 2, 2]
 * Output: [[], [1], [1,2], [1,2,2], [2], [2,2]]
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for all-duplicate and mixed arrays.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N * 2^N)
 * Space Complexity: O(N * 2^N) for output; O(N) recursion stack
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [1, 2, 2]
 *    Expected: [[], [1], [1,2], [1,2,2], [2], [2,2]]
 * 2. All duplicates
 *    Input: nums = [2, 2]
 *    Expected: [[], [2], [2,2]]
 * 3. No duplicates (same as Subsets I)
 *    Input: nums = [0]
 *    Expected: [[], [0]]
 */

export function subsetsWithDup(nums: number[]): number[][] {
    // TODO: Implement the solution for Subsets II
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(subsetsWithDup([1, 2, 2]));
// Expected: [[],[1],[1,2],[1,2,2],[2],[2,2]]
