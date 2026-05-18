/**
 * @file surrounding-regions.ts
 * @description Surrounding Regions (Capture Board)
 * 
 * --- Problem Description ---
 * Given an `m x n` matrix `board` containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's in that surrounded region.
Note: 'O's on the border of the grid cannot be surrounded, and any connected 'O's to a border 'O' also cannot be flipped.
Solve this by triggering DFS from all border 'O's, marking them as non-flippable (e.g. changing 'O' to '#'), then sweeping the board.
 * 
 * --- Example ---
 * Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * 
 * --- Target Complexity ---
 * Time Complexity: O(R * C)
Space Complexity: O(R * C)
 */

export function solveBoard(board: string[][]): void {
    // TODO: Implement the solution for Surrounding Regions (Capture Board)
    throw new Error("Method not implemented.");
}
