/**
 * @file word-search.ts
 * @description Word Search
 *
 * --- Problem Description ---
 * Given an `m x n` grid of characters `board` and a string `word`, return `true`
 * if the word exists in the grid. The word can be constructed from letters of
 * sequentially adjacent cells (horizontally or vertically). The same cell may not
 * be used more than once. Use DFS backtracking, marking visited cells temporarily.
 *
 * --- Example ---
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for single-cell grids and words longer than the grid.
 *
 * --- Target Complexity ---
 * Time Complexity: O(M * N * 4^L) where L = word length
 * Space Complexity: O(L) recursion stack
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 *    Expected: true
 * 2. Word not present
 *    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 *    Expected: false
 * 3. Single cell
 *    Input: board = [["A"]], word = "A"
 *    Expected: true
 */

export function exist(board: string[][], word: string): boolean {
    // TODO: Implement the solution for Word Search
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // true
