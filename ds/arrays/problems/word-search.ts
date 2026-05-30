/**
 * @file word-search.ts
 *
 * 79. Word Search
 * Medium
 *
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 *
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 *
 * Example 2:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 *
 * Constraints:
 * - m == board.length
 * - n = board[i].length
 * - 1 <= m, n <= 6
 * - 1 <= word.length <= 15
 * - board and word consists of only lowercase and uppercase English letters.
 */

function exist(board: string[][], word: string): boolean {
	function dfs(
		board: string[][],
		wordArr: string[],
		wordIndex: number,
		row: number,
		col: number,
		visited: Set<string>,
	): boolean {
		if (wordIndex === wordArr.length) {
			return true
		}
		let char = wordArr[wordIndex]
		let directions = [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		]
		for (let [dr, dc] of directions) {
			let newRow = row + dr
			let newCol = col + dc
			if (
				newRow >= 0 &&
				newRow < board.length &&
				newCol >= 0 &&
				newCol < board[newRow].length &&
				board[newRow][newCol] === char &&
				!visited.has(`${newRow}-${newCol}`)
			) {
				visited.add(`${newRow}-${newCol}`)
				if (dfs(board, wordArr, wordIndex + 1, newRow, newCol, visited)) {
					return true
				}
				visited.delete(`${newRow}-${newCol}`)
			}
		}
		return false
	}

	let wordArr = word.split('')
	for (let i = 0; i < wordArr.length; i++) {
		let char = wordArr[i]
		for (let j = 0; j < board.length; j++) {
			for (let k = 0; k < board[j].length; k++) {
				if (board[j][k] === char) {
					let visited = new Set<string>()
					visited.add(`${j}-${k}`)
					if (dfs(board, wordArr, i + 1, j, k, visited)) {
						return true
					}
				}
			}
		}
	}
	return false
}



// Tests
const b1 = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
]
console.log('ABCCED =>', exist(b1, 'ABCCED'))
console.log('SEE =>', exist(b1, 'SEE'))
