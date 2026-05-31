/**
 * @file longest-repeating-character.ts
 * @description Longest Repeating Character (Max Frequency in Window)
 *
 * --- Problem Description ---
 * Given a string `s`, find the length of the longest substring that contains only
 * one unique repeating character (no replacements allowed). Return the character
 * and its maximum run length.
 *
 * Note: This is the base variant of the character-replacement problem (k = 0).
 * Useful as a building block before tackling Longest Repeating Character Replacement.
 *
 * --- Example ---
 * Input: s = "AABABBA"
 * Output: 2
 * Explanation: "AA" is the longest run of a single repeating character.
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for single-char strings and all-same strings.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: s = "AABABBA"
 *    Expected: 2
 * 2. All same
 *    Input: s = "AAAA"
 *    Expected: 4
 * 3. All different
 *    Input: s = "ABCDE"
 *    Expected: 1
 */

export function longestRepeatingCharacter(s: string): number {
    // TODO: Implement the solution for Longest Repeating Character
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(longestRepeatingCharacter("AABABBA")); // Expected: 2
