/**
 * @file group-anagrams.ts
 * @description Group Anagrams (LeetCode #49)
 *
 * --- Problem Description ---
 * Given an array of strings `strs`, group the anagrams together. You can return the
 * answer in any order. An anagram is a word or phrase formed by rearranging the
 * letters of a different word or phrase using all the original letters exactly once.
 * Use a HashMap with sorted string (or character count) as the canonical key.
 *
 * --- Example ---
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * --- Constraints ---
 * - 1 <= strs.length <= 10^4
 * - 0 <= strs[i].length <= 100
 * - strs[i] consists of lowercase English letters.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N * K log K) where K = max string length
 * Space Complexity: O(N * K)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: ["eat","tea","tan","ate","nat","bat"]
 *    Expected: [["bat"],["nat","tan"],["ate","eat","tea"]] (any order)
 * 2. Single string
 *    Input: ["a"]
 *    Expected: [["a"]]
 * 3. Empty string
 *    Input: [""]
 *    Expected: [[""]]
 */

export function groupAnagrams(strs: string[]): string[][] {
    // TODO: Implement the solution for Group Anagrams
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
