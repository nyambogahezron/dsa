/**
 * @file product-of-array-except-self.ts
 * @description Product of Array Except Self (LeetCode #238)
 *
 * --- Problem Description ---
 * Given an integer array `nums`, return an array `answer` such that `answer[i]`
 * is equal to the product of all elements of `nums` except `nums[i]`.
 * You must write an algorithm that runs in O(N) without using the division operation.
 * Use prefix and suffix product arrays (or compute in two passes over the result array).
 *
 * --- Example ---
 * Input: nums = [1, 2, 3, 4]
 * Output: [24, 12, 8, 6]
 *
 * --- Constraints ---
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 * - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1) extra (output array doesn't count)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [1,2,3,4]
 *    Expected: [24,12,8,6]
 * 2. Contains zero
 *    Input: [-1,1,0,-3,3]
 *    Expected: [0,0,9,0,0]
 * 3. Two elements
 *    Input: [2,3]
 *    Expected: [3,2]
 */

export function productExceptSelf(nums: number[]): number[] {
    // TODO: Implement the solution for Product of Array Except Self
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
