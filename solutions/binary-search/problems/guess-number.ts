/**
 * @file guess-number-higher-or-lower.ts
 * @description Guess Number Higher or Lower (LeetCode #374)
 *
 * --- Problem Description ---
 * We are playing the Guess Game. The game is: I pick a number from 1 to n.
 * You have to guess which number I picked. Every time you guess wrong, I will
 * tell you whether the number I picked is higher or lower than your guess.
 * The API `guess(num)` returns: -1 (too high), 1 (too low), 0 (correct).
 * Use binary search on [1, n].
 *
 * --- Example ---
 * Input: n = 10, pick = 6
 * Output: 6
 *
 * --- Constraints ---
 * - 1 <= n <= 2^31 - 1
 * - 1 <= pick <= n
 *
 * --- Target Complexity ---
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: n=10, pick=6
 *    Expected: 6
 * 2. First element
 *    Input: n=10, pick=1
 *    Expected: 1
 * 3. Last element
 *    Input: n=10, pick=10
 *    Expected: 10
 */

// Stub for the built-in guess API
declare function guess(num: number): number;

export function guessNumber(n: number): number {
    // TODO: Implement using binary search on [1, n]
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// Cannot run directly — depends on the built-in guess() API from LeetCode.
