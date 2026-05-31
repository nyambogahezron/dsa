/**
 * @file find-smallest-missing-positive.ts
 * @description Find All Numbers Disappeared in an Array (LeetCode #448)
 *
 * --- Problem Description ---
 * Given an array `nums` of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in `nums`.
 * Use cyclic sort: place each number at index num-1. After sorting, any index i where
 * nums[i] != i+1 means i+1 is missing.
 *
 * --- Example ---
 * Input: nums = [4, 3, 2, 7, 8, 2, 3, 1]
 * Output: [5, 6]
 *
 * --- Constraints ---
 * - n == nums.length
 * - 1 <= n <= 10^5
 * - 1 <= nums[i] <= n
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1) extra (output doesn't count)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [4,3,2,7,8,2,3,1]
 *    Expected: [5,6]
 * 2. Consecutive missing
 *    Input: [1,1]
 *    Expected: [2]
 * 3. No missing
 *    Input: [1,2,3]
 *    Expected: []
 */

export function findDisappearedNumbers(nums: number[]): number[] {
    // TODO: Implement using cyclic sort pattern
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // Expected: [5,6]
