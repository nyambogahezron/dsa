/**
 * @file largest-rectangle-histogram.ts
 * @description Largest Rectangle in Histogram (LeetCode #84)
 *
 * --- Problem Description ---
 * Given an array of integers `heights` representing the histogram's bar heights
 * where the width of each bar is 1, return the area of the largest rectangle
 * in the histogram.
 * Use a monotonic increasing stack of indices. When a bar shorter than the stack
 * top is encountered, pop and calculate the rectangle using that bar as the height.
 *
 * --- Example ---
 * Input: heights = [2, 1, 5, 6, 2, 3]
 * Output: 10
 * Explanation: The largest rectangle has area 10 (bars of height 5 and 6, width 2).
 *
 * --- Constraints ---
 * - 1 <= heights.length <= 10^5
 * - 0 <= heights[i] <= 10^4
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: heights = [2,1,5,6,2,3]
 *    Expected: 10
 * 2. All same height
 *    Input: heights = [2, 2, 2, 2]
 *    Expected: 8
 * 3. Single bar
 *    Input: heights = [5]
 *    Expected: 5
 */

export function largestRectangleArea(heights: number[]): number {
    // TODO: Implement the solution for Largest Rectangle in Histogram
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(largestRectangleArea([2,1,5,6,2,3])); // Expected: 10
