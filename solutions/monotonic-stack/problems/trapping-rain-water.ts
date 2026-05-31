/**
 * @file trapping-rain-water-monotonic.ts
 * @description Trapping Rain Water — Monotonic Stack approach (LeetCode #42)
 *
 * --- Problem Description ---
 * Given `n` non-negative integers representing an elevation map where each bar has
 * width 1, compute how much water can be trapped after raining.
 * This file demonstrates the monotonic stack approach (as contrast to two-pointer):
 * use a decreasing stack; when a taller bar is found, pop and calculate trapped water
 * between the current bar and the new stack top.
 *
 * Note: The two-pointer solution lives in two-pointers/problems/trapping-rain-water.ts.
 * This version explores the stack-based approach which handles each "valley" explicitly.
 *
 * --- Example ---
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 *
 * --- Constraints ---
 * - n == height.length
 * - 1 <= n <= 2 * 10^4
 * - 0 <= height[i] <= 10^5
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 *    Expected: 6
 * 2. Flat
 *    Input: [3,3,3]
 *    Expected: 0
 * 3. Valley
 *    Input: [4,2,0,3,2,5]
 *    Expected: 9
 */

export function trap(height: number[]): number {
    // TODO: Implement using a monotonic decreasing stack
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
