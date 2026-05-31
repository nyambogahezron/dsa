/**
 * @file range-sum-query.ts
 * @description Range Sum Query – Immutable
 *
 * --- Problem Description ---
 * Given an integer array `nums`, handle multiple queries of the following type:
 * Calculate the sum of the elements of `nums` between indices `left` and `right`
 * inclusive where `left <= right`. Implement the `NumArray` class using a prefix sum
 * array so each query runs in O(1) after O(N) preprocessing.
 *
 * --- Example ---
 * Input: nums = [-2, 0, 3, -5, 2, -1]
 *        sumRange(0, 2) → 1   // (-2) + 0 + 3
 *        sumRange(2, 5) → -1  // 3 + (-5) + 2 + (-1)
 *        sumRange(0, 5) → -3
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for negative numbers and single-element arrays.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N) constructor, O(1) per query
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [-2, 0, 3, -5, 2, -1]; sumRange(0, 2)
 *    Expected: 1
 * 2. Full range
 *    Input: sumRange(0, 5)
 *    Expected: -3
 * 3. Single element
 *    Input: sumRange(2, 2)
 *    Expected: 3
 */

export class NumArray {
    private prefix: number[];

    constructor(nums: number[]) {
        // TODO: Implement the constructor for Range Sum Query
        this.prefix = [];
        throw new Error("Method not implemented.");
    }

    sumRange(left: number, right: number): number {
        // TODO: Implement sumRange using the prefix array
        throw new Error("Method not implemented.");
    }
}

// Sample Test Scaffold (enable after implementation)
// const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
// console.log(obj.sumRange(0, 2)); // Expected: 1
// console.log(obj.sumRange(2, 5)); // Expected: -1
// console.log(obj.sumRange(0, 5)); // Expected: -3
