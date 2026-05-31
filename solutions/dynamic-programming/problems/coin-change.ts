/**
 * @file coin-change.ts
 * @description Coin Change (LeetCode #322)
 *
 * --- Problem Description ---
 * You are given an integer array `coins` representing coins of different denominations
 * and an integer `amount` representing a total amount of money. Return the fewest
 * number of coins needed to make up that amount. If the amount cannot be made up by
 * any combination of coins, return -1. You may assume an infinite supply of each coin.
 * Bottom-up DP (unbounded knapsack): dp[a] = min coins to make amount `a`.
 *
 * --- Example ---
 * Input: coins = [1, 5, 11], amount = 15
 * Output: 3
 * Explanation: 11 + 1 + 1 + 1 + 1... wait — 11 + 4×1 = 5 coins.
 *              Actually 5+5+5 = 3 coins.
 *
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3 (5+5+1)
 *
 * --- Constraints ---
 * - 1 <= coins.length <= 12
 * - 1 <= coins[i] <= 2^31 - 1
 * - 0 <= amount <= 10^4
 *
 * --- Target Complexity ---
 * Time Complexity: O(amount * coins.length)
 * Space Complexity: O(amount)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: coins = [1,2,5], amount = 11
 *    Expected: 3
 * 2. Impossible
 *    Input: coins = [2], amount = 3
 *    Expected: -1
 * 3. Zero amount
 *    Input: coins = [1], amount = 0
 *    Expected: 0
 */

export function coinChange(coins: number[], amount: number): number {
    // TODO: Implement the solution for Coin Change
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(coinChange([1,2,5], 11)); // Expected: 3
// console.log(coinChange([2], 3));      // Expected: -1
