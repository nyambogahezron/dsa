/**
 * @file longest-common-prefix.ts
 * 
 * 14. Longest Common Prefix
 * Easy
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * Constraints:
 * - 1 <= strs.length <= 200
 * - 0 <= strs[i].length <= 200
 * - strs[i] consists of only lowercase English letters.
 */

export function longestCommonPrefix(strs: string[]): string {
    // Your implementation goes here
    return "";
}

// Tests
console.log('["flower","flow","flight"] =>', longestCommonPrefix(["flower", "flow", "flight"]));
console.log('["dog","racecar","car"] =>', longestCommonPrefix(["dog", "racecar", "car"]));
