/**
 * @file combination-sum.ts
 * @description Combination Sum
 *
 * --- Problem Description ---
 * Given an array of distinct integers `candidates` and a target integer `target`,
 * return a list of all unique combinations of `candidates` where the chosen numbers
 * sum to `target`. You may return the combinations in any order.
 * The same number may be chosen from `candidates` an unlimited number of times.
 * Use backtracking: at each step choose to include the current candidate or move on.
 *
 * --- Example ---
 * Input: candidates = [2, 3, 6, 7], target = 7
 * Output: [[2, 2, 3], [7]]
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for no-solution inputs and single-element arrays.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N^(T/M)) where T = target, M = min candidate
 * Space Complexity: O(T/M) recursion depth
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: candidates = [2, 3, 6, 7], target = 7
 *    Expected: [[2,2,3],[7]]
 * 2. No solution
 *    Input: candidates = [2], target = 3
 *    Expected: []
 * 3. Single element match
 *    Input: candidates = [1], target = 1
 *    Expected: [[1]]
 */

export function combinationSum(candidates: number[], target: number): number[][] {
    // TODO: Implement the solution for Combination Sum
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(combinationSum([2, 3, 6, 7], 7)); // Expected: [[2,2,3],[7]]
