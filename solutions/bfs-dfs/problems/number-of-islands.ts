/**
 * @file number-of-islands.ts
 * @description Number of Islands (LeetCode #200)
 *
 * --- Problem Description ---
 * Given an m×n 2D binary grid where '1' represents land and '0' represents water,
 * return the number of islands. An island is surrounded by water and formed by
 * connecting adjacent lands horizontally or vertically.
 * Use DFS or BFS flood-fill: for every unvisited '1', increment count and mark
 * the entire connected land mass as visited.
 *
 * --- Example ---
 * Input: grid = [["1","1","0","0","0"],
 *                ["1","1","0","0","0"],
 *                ["0","0","1","0","0"],
 *                ["0","0","0","1","1"]]
 * Output: 3
 *
 * --- Constraints ---
 * - m == grid.length, n == grid[i].length
 * - 1 <= m, n <= 300
 * - grid[i][j] is '0' or '1'.
 *
 * --- Target Complexity ---
 * Time Complexity: O(M * N)
 * Space Complexity: O(M * N) recursion stack
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: See example above
 *    Expected: 3
 * 2. Single island
 *    Input: [["1"]]
 *    Expected: 1
 * 3. No islands
 *    Input: [["0","0"],["0","0"]]
 *    Expected: 0
 */

export function numIslands(grid: string[][]): number {
    // TODO: Implement the solution for Number of Islands
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));
// Expected: 3
