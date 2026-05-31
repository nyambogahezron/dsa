/**
 * @file two-sum-ii.ts
 * @description Two Sum II – Input Array Is Sorted (LeetCode #167)
 *
 * --- Problem Description ---
 * Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing
 * order, find two numbers such that they add up to a specific `target` number. Return
 * the indices of the two numbers (1-indexed) as an integer array of length 2.
 * You may not use the same element twice. Use two pointers converging from both ends.
 *
 * --- Example ---
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 * Explanation: numbers[0] + numbers[1] = 2 + 7 = 9.
 *
 * --- Constraints ---
 * - 2 <= numbers.length <= 3 * 10^4
 * - -1000 <= numbers[i] <= 1000
 * - numbers is sorted in non-decreasing order.
 * - -1000 <= target <= 1000
 * - Exactly one solution exists.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: numbers = [2, 7, 11, 15], target = 9
 *    Expected: [1, 2]
 * 2. Last two elements
 *    Input: numbers = [2, 3, 4], target = 6
 *    Expected: [1, 3]
 * 3. Negative numbers
 *    Input: numbers = [-1, 0], target = -1
 *    Expected: [1, 2]
 */

export function twoSum(numbers: number[], target: number): number[] {
    // TODO: Implement the solution for Two Sum II
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [1, 2]
// console.log(twoSum([2, 3, 4], 6));       // Expected: [1, 3]
