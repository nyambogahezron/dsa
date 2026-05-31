/**
 * @file find-duplicate-number.ts
 * @description Find the Duplicate Number (LeetCode #287)
 *
 * --- Problem Description ---
 * Given an array of integers `nums` containing n + 1 integers where each integer
 * is in the range [1, n] inclusive, there is only one repeated number.
 * Return this repeated number without modifying the array and using only constant extra space.
 * Use cyclic sort: numbers in range [1, n] can be placed at index num-1.
 * Any number that belongs to an already-correct position is the duplicate.
 *
 * --- Example ---
 * Input: nums = [1, 3, 4, 2, 2]
 * Output: 2
 *
 * --- Constraints ---
 * - 1 <= n <= 10^5
 * - nums.length == n + 1
 * - 1 <= nums[i] <= n
 * - Only one repeated number exists, but may repeat more than once.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [1,3,4,2,2]
 *    Expected: 2
 * 2. Duplicate at start
 *    Input: [3,1,3,4,2]
 *    Expected: 3
 * 3. Duplicate is 1
 *    Input: [1,1]
 *    Expected: 1
 */

export function findDuplicate(nums: number[]): number {
    // TODO: Implement using cyclic sort (or Floyd's cycle detection)
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(findDuplicate([1,3,4,2,2])); // Expected: 2
