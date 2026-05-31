/**
 * @file single-number.ts
 * @description Single Number (LeetCode #136)
 *
 * --- Problem Description ---
 * Given a non-empty array of integers `nums`, every element appears twice except
 * for one. Find that single one. You must implement a solution with a linear runtime
 * complexity and use only constant extra space.
 * Key trick: XOR all numbers together — pairs cancel out (a ^ a = 0), leaving the single.
 *
 * --- Example ---
 * Input: nums = [4, 1, 2, 1, 2]
 * Output: 4
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 3 * 10^4
 * - -3 * 10^4 <= nums[i] <= 3 * 10^4
 * - Each element appears twice except for exactly one element.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [4,1,2,1,2]
 *    Expected: 4
 * 2. Single element
 *    Input: [1]
 *    Expected: 1
 * 3. Negative numbers
 *    Input: [-1,-1,2]
 *    Expected: 2
 */

export function singleNumber(nums: number[]): number {
    // TODO: Implement the solution for Single Number (XOR trick)
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(singleNumber([4,1,2,1,2])); // Expected: 4
