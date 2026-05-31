/**
 * @file string-all-anagrams.ts
 * @description Find All Anagrams in a String
 *
 * --- Problem Description ---
 * Given two strings `s` and `p`, return an array of all the start indices of `p`'s
 * anagrams in `s`. You may return the answer in any order.
 * Use a fixed-size sliding window of length `p.length` with character frequency matching.
 *
 * Aliases covered:
 *   - stringAllAnagrams
 *   - stringPermutationInAString
 *   - permutationInAString
 *
 * --- Example ---
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0, 6]
 * Explanation: The substring at index 0, "cba", is an anagram of "abc".
 *              The substring at index 6, "bac", is an anagram of "abc".
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for duplicates, ordering, and empty-like edge cases.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N + M) (where N = s.length, M = p.length)
 * Space Complexity: O(1) (fixed 26-char frequency array)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: s = "cbaebabacd", p = "abc"
 *    Expected: [0, 6]
 * 2. Single match
 *    Input: s = "af", p = "be"
 *    Expected: []
 * 3. Pattern longer than string
 *    Input: s = "ab", p = "abc"
 *    Expected: []
 */

export function findAnagrams(s: string, p: string): number[] {
    // TODO: Implement the solution for Find All Anagrams in a String
    throw new Error("Method not implemented.");
}

// Alias exports for naming variants used in the codebase
export const stringAllAnagrams = findAnagrams;
export const stringPermutationInAString = findAnagrams;
export const permutationInAString = (s1: string, s2: string): number[] => findAnagrams(s2, s1);

// Sample Test Scaffold (enable after implementation)
// console.log(findAnagrams("cbaebabacd", "abc")); // Expected: [0, 6]
