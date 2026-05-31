/**
 * @file palindrome-partitioning.ts
 * @description Palindrome Partitioning
 *
 * --- Problem Description ---
 * Given a string `s`, partition `s` such that every substring of the partition
 * is a palindrome. Return all possible palindrome partitioning of `s`.
 * Use backtracking: at each start index try all substrings; recurse if it's a palindrome.
 *
 * --- Example ---
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for single-char and all-same-char strings.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N * 2^N) — each substring checked as palindrome in O(N)
 * Space Complexity: O(N) recursion depth
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: s = "aab"
 *    Expected: [["a","a","b"],["aa","b"]]
 * 2. Single character
 *    Input: s = "a"
 *    Expected: [["a"]]
 * 3. All same characters
 *    Input: s = "aa"
 *    Expected: [["a","a"],["aa"]]
 */

export function partition(s: string): string[][] {
    // TODO: Implement the solution for Palindrome Partitioning
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(partition("aab")); // Expected: [["a","a","b"],["aa","b"]]
