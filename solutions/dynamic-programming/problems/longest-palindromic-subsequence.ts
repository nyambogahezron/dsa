/**
 * @file longest-palindromic-subsequence.ts
 * @description Longest Palindromic Subsequence
 *
 * --- Problem Description ---
 * Given a string `s`, find the longest palindromic subsequence's length in `s`.
 * A subsequence is a sequence that can be derived from another sequence by deleting
 * some or no characters without changing the order of the remaining characters.
 * Use a 2D DP table where dp[i][j] = LPS length of s[i..j].
 *
 * --- Example ---
 * Input: s = "bbbab"
 * Output: 4
 * Explanation: One possible longest palindromic subsequence is "bbbb".
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for single-char and all-same-char strings.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N^2)
 * Space Complexity: O(N^2) — can be optimized to O(N) with 1D DP
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: s = "bbbab"
 *    Expected: 4
 * 2. Single character
 *    Input: s = "a"
 *    Expected: 1
 * 3. No repeated chars
 *    Input: s = "cbbd"
 *    Expected: 2
 */

export function longestPalindromeSubseq(s: string): number {
    // TODO: Implement the solution for Longest Palindromic Subsequence
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(longestPalindromeSubseq("bbbab")); // Expected: 4
