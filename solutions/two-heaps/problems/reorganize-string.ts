/**
 * @file reorganize-string.ts
 * @description Reorganize String (LeetCode #767)
 *
 * --- Problem Description ---
 * Given a string `s`, rearrange the characters of `s` so that any two adjacent
 * characters are not the same. Return any possible rearrangement, or "" if not possible.
 * Use a max-heap: always pick the most frequent character that differs from the last placed.
 *
 * --- Example ---
 * Input: s = "aab"
 * Output: "aba"
 *
 * Input: s = "aaab"
 * Output: ""
 *
 * --- Constraints ---
 * - 1 <= s.length <= 500
 * - s consists of lowercase English letters.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N log 26) = O(N)
 * Space Complexity: O(26) = O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: "aab"
 *    Expected: "aba"
 * 2. Not possible
 *    Input: "aaab"
 *    Expected: ""
 * 3. Single char
 *    Input: "a"
 *    Expected: "a"
 */

export function reorganizeString(s: string): string {
    // TODO: Implement using max-heap (greedy)
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(reorganizeString("aab"));  // Expected: "aba"
// console.log(reorganizeString("aaab")); // Expected: ""
