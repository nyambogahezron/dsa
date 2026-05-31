/**
 * @file kth-largest-element.ts
 * @description Kth Largest Element in an Array (LeetCode #215)
 *
 * --- Problem Description ---
 * Given an integer array `nums` and an integer `k`, return the kth largest element
 * in the array. Note that it is the kth largest element in sorted order, not the
 * kth distinct element. You must solve it in O(N) average time (QuickSelect) or
 * O(N log K) using a min-heap of size K.
 *
 * --- Example ---
 * Input: nums = [3, 2, 1, 5, 6, 4], k = 2
 * Output: 5
 *
 * --- Constraints ---
 * - 1 <= k <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 *
 * --- Target Complexity ---
 * Time Complexity: O(N) average (QuickSelect) or O(N log K) (min-heap)
 * Space Complexity: O(K) for heap approach, O(1) extra for QuickSelect
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums = [3,2,1,5,6,4], k = 2
 *    Expected: 5
 * 2. Single element
 *    Input: nums = [1], k = 1
 *    Expected: 1
 * 3. k equals length
 *    Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 *    Expected: 4
 */

export function findKthLargest(nums: number[], k: number): number {
    // TODO: Implement the solution for Kth Largest Element in an Array
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Expected: 4
