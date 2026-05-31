/**
 * @file count-islands.ts
 * @description Count Sub Islands (LeetCode #1905)
 *
 * --- Problem Description ---
 * You are given two m×n binary matrices `grid1` and `grid2`. An island is a group
 * of 1s connected 4-directionally. An island in `grid2` is considered a sub-island
 * if there is an island in `grid1` that contains all the cells that make up this
 * island in `grid2`. Return the number of islands in `grid2` that are sub-islands.
 * DFS on each island of grid2; if any cell is 0 in grid1, it's not a sub-island.
 *
 * --- Example ---
 * Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]],
 *        grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
 * Output: 3
 *
 * --- Constraints ---
 * - m == grid1.length == grid2.length
 * - n == grid1[i].length == grid2[i].length
 * - 1 <= m, n <= 500
 * - grid1[i][j] and grid2[i][j] are either 0 or 1.
 *
 * --- Target Complexity ---
 * Time Complexity: O(M * N)
 * Space Complexity: O(M * N)
 *
 * --- Test Cases ---
 * 1. Basic Case (see example)
 *    Expected: 3
 * 2. No sub-islands
 *    Input: grid1=[[0]], grid2=[[1]]
 *    Expected: 0
 * 3. All sub-islands
 *    Input: grid1=[[1,1],[1,1]], grid2=[[1,0],[0,0]]
 *    Expected: 1
 */

export function countSubIslands(grid1: number[][], grid2: number[][]): number {
    // TODO: Implement the solution for Count Sub Islands
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(countSubIslands(grid1, grid2)); // Expected: 3
