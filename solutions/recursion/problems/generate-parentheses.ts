/**
 * @file generate-parentheses.ts
 * @description Generate Parentheses (LeetCode #22)
 *
 * --- Problem Description ---
 * Given n pairs of parentheses, write a function to generate all combinations of
 * well-formed parentheses. Use recursion/backtracking: track open and close counts;
 * add '(' if open < n, add ')' if close < open.
 *
 * --- Example ---
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * --- Constraints ---
 * - 1 <= n <= 8
 *
 * --- Target Complexity ---
 * Time Complexity: O(4^N / √N) — Catalan number
 * Space Complexity: O(N) — recursion depth
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: n = 3
 *    Expected: ["((()))","(()())","(())()","()(())","()()()"]
 * 2. n = 1
 *    Input: n = 1
 *    Expected: ["()"]
 * 3. n = 2
 *    Input: n = 2
 *    Expected: ["(())","()()"]
 */

export function generateParenthesis(n: number): string[] {
    // TODO: Implement recursive generation of valid parentheses
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(generateParenthesis(3)); // Expected: 5 combinations
