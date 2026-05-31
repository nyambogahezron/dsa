/**
 * @file contains-duplicate.ts
 * @description Contains Duplicate (LeetCode #217)
 *
 * --- Problem Description ---
 * Given an integer array `nums`, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 * Brute-force O(N²): compare all pairs. Optimal O(N): use a HashSet.
 * Implement both and compare.
 *
 * --- Example ---
 * Input: nums = [1, 2, 3, 1]
 * Output: true
 *
 * Input: nums = [1, 2, 3, 4]
 * Output: false
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * --- Target Complexity ---
 * Brute-force: O(N²) time, O(1) space
 * Optimal:     O(N) time, O(N) space
 *
 * --- Test Cases ---
 * 1. Has duplicate
 *    Input: [1,2,3,1]
 *    Expected: true
 * 2. No duplicate
 *    Input: [1,2,3,4]
 *    Expected: false
 * 3. Single element
 *    Input: [1]
 *    Expected: false
 */

/** O(N²) brute-force */
export function containsDuplicateBrute(nums: number[]): boolean {
    // TODO: Compare every pair
    throw new Error("Method not implemented.");
}

/** O(N) optimal using HashSet */
export function containsDuplicate(nums: number[]): boolean {
    // TODO: Use a Set for O(1) membership check
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(containsDuplicateBrute([1,2,3,1])); // Expected: true
// console.log(containsDuplicate([1,2,3,4]));       // Expected: false
