/**
 * @file permutations.ts
 * @description Permutations
 *
 * --- Problem Description ---
 * Given an array `nums` of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 * Use backtracking with a `used` boolean array (or in-place swap approach).
 *
 * --- Example ---
 * Input: nums = [1, 2, 3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for single and two-element arrays.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N! * N)
 * Space Complexity: O(N! * N) for output; O(N) recursion stack
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [1, 2, 3]
 *    Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 2. Two elements
 *    Input: nums = [0, 1]
 *    Expected: [[0,1],[1,0]]
 * 3. Single element
 *    Input: nums = [1]
 *    Expected: [[1]]
 */

export function permute(nums: number[]): number[][] {
    // TODO: Implement the solution for Permutations
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(permute([1, 2, 3]));
// Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
