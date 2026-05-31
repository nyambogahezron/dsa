/**
 * @file trapping-rain-water.ts
 * @description Trapping Rain Water (LeetCode #42)
 *
 * --- Problem Description ---
 * Given `n` non-negative integers representing an elevation map where the width of
 * each bar is 1, compute how much water it can trap after raining.
 * Use the two-pointer approach tracking left-max and right-max from both ends.
 *
 * --- Example ---
 * Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
 * Output: 6
 * Explanation: 6 units of rain water are trapped.
 *
 * --- Constraints ---
 * - n == height.length
 * - 1 <= n <= 2 * 10^4
 * - 0 <= height[i] <= 10^5
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 *    Expected: 6
 * 2. No water trapped
 *    Input: height = [3, 2, 1]
 *    Expected: 0
 * 3. Simple valley
 *    Input: height = [4, 2, 0, 3, 2, 5]
 *    Expected: 9
 */

export function trap(height: number[]): number {
    // TODO: Implement the solution for Trapping Rain Water
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
// console.log(trap([4,2,0,3,2,5]));              // Expected: 9
