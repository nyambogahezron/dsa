/**
 * @file climbing-stairs.ts
 * @description Climbing Stairs (LeetCode #70)
 *
 * --- Problem Description ---
 * You are climbing a staircase. It takes `n` steps to reach the top. Each time you
 * can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Classic bottom-up DP (Fibonacci variant): dp[i] = dp[i-1] + dp[i-2].
 *
 * --- Example ---
 * Input: n = 3
 * Output: 3
 * Explanation: 1+1+1, 1+2, 2+1
 *
 * --- Constraints ---
 * - 1 <= n <= 45
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1) — only need last two values
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: n = 3
 *    Expected: 3
 * 2. Small input
 *    Input: n = 2
 *    Expected: 2
 * 3. Single step
 *    Input: n = 1
 *    Expected: 1
 */

export function climbStairs(n: number): number {
    // TODO: Implement the solution for Climbing Stairs
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(climbStairs(3)); // Expected: 3
// console.log(climbStairs(5)); // Expected: 8
