/**
 * @file valid-anagram.ts
 * @description Valid Anagram (LeetCode #242)
 *
 * --- Problem Description ---
 * Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and
 * false otherwise. An anagram is a word formed by rearranging the letters of
 * another, using all original letters exactly once.
 * Use a frequency count array of size 26 (or a HashMap for Unicode support).
 *
 * --- Example ---
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * --- Constraints ---
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1) — fixed 26-char array
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: s = "anagram", t = "nagaram"
 *    Expected: true
 * 2. Not anagram
 *    Input: s = "rat", t = "car"
 *    Expected: false
 * 3. Different lengths
 *    Input: s = "a", t = "ab"
 *    Expected: false
 */

export function isAnagram(s: string, t: string): boolean {
    // TODO: Implement the solution for Valid Anagram
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(isAnagram("anagram","nagaram")); // Expected: true
// console.log(isAnagram("rat","car"));          // Expected: false
