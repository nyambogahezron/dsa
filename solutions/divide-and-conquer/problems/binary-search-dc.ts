/**
 * @file binary-search-dc.ts
 * @description Binary Search via Divide and Conquer (LeetCode #704)
 *
 * --- Problem Description ---
 * Given an array of integers `nums` sorted in ascending order, and an integer `target`,
 * write a function to search `target` in `nums`. If target exists, return its index.
 * Otherwise return -1. This version implements it via explicit divide-and-conquer recursion
 * (split array in half, recurse on appropriate half), as a contrast to the iterative approach.
 *
 * --- Example ---
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i], target <= 10^4
 * - All integers in nums are unique.
 * - nums is sorted in ascending order.
 *
 * --- Target Complexity ---
 * Time Complexity: O(log N)
 * Space Complexity: O(log N) — recursion stack
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: nums=[-1,0,3,5,9,12], target=9
 *    Expected: 4
 * 2. Not found
 *    Input: nums=[-1,0,3,5,9,12], target=2
 *    Expected: -1
 * 3. Single element match
 *    Input: nums=[5], target=5
 *    Expected: 0
 */

export function search(nums: number[], target: number): number {
    function dc(lo: number, hi: number): number {
        // TODO: Implement divide-and-conquer binary search
        throw new Error("Method not implemented.");
    }
    return dc(0, nums.length - 1);
}

// Sample Test Scaffold (enable after implementation)
// console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
// console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1
