/**
 * @file pacific-atlantic-water-flow.ts
 * @description Pacific Atlantic Water Flow (LeetCode #417)
 *
 * --- Problem Description ---
 * There is an m×n rectangular island that borders both the Pacific Ocean (top/left)
 * and Atlantic Ocean (bottom/right). Rain falls on the island and flows to adjacent
 * (4-dir) cells with equal or lower height, eventually reaching an ocean.
 * Return a list of grid coordinates where rain water can flow to both the Pacific
 * and Atlantic Ocean. Use reverse BFS from each ocean's border inward.
 *
 * --- Example ---
 * Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
 * Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 *
 * --- Constraints ---
 * - m == heights.length, n == heights[r].length
 * - 1 <= m, n <= 200
 * - 0 <= heights[r][c] <= 10^5
 *
 * --- Target Complexity ---
 * Time Complexity: O(M * N)
 * Space Complexity: O(M * N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    See example above. Expected: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 * 2. 1x1 grid
 *    Input: [[1]]
 *    Expected: [[0,0]]
 * 3. Flat grid
 *    Input: [[1,1],[1,1]]
 *    Expected: [[0,0],[0,1],[1,0],[1,1]]
 */

export function pacificAtlantic(heights: number[][]): number[][] {
    // TODO: Implement the solution for Pacific Atlantic Water Flow
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));
