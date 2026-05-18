/**
 * @file knapsack-01-dp.ts
 * @description 0/1 Knapsack (Dynamic Programming)
 * 
 * --- Problem Description ---
 * Given weights and values of `n` items, we want to put these items in a knapsack of capacity `W` to get the maximum total value.
In this problem, items cannot be divided. Implement this in O(N * W) time using 2D tabulation, and then attempt to optimize it to a 1D array.
 * 
 * --- Example ---
 * Input: values = [60, 100, 120], weights = [10, 20, 30], capacity = 50
Output: 220
Explanation: Take items 2 and 3. Total value = 100 + 120 = 220. Weight = 50.
 * 
 * 
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for duplicates, ordering, and empty-like edge cases where applicable.
 * 
 * --- Target Complexity ---
 * Time Complexity: O(N * W)
Space Complexity: O(W) (optimized 1D)
 * 
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: Use a representative normal input from the example.
 *    Expected: Correct output for the standard scenario.
 * 2. Edge Case
 *    Input: Minimal valid input (e.g., empty/single element/smallest grid).
 *    Expected: Correct base-condition behavior.
 * 3. Boundary Case
 *    Input: Large valid input near constraints.
 *    Expected: Correct output within target complexity bounds.
 */

export function knapsack01DP(values: number[], weights: number[], capacity: number): number {
    // TODO: Implement the solution for 0/1 Knapsack (Dynamic Programming)
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(knapsack01DP(/* TODO: add test input */));
