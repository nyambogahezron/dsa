/**
 * @file combination-sum-ii.ts
 *
 * 40. Combination Sum II
 * Medium
 *
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 *
 * Example 1:
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
 *
 * Example 2:
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output: [[1,2,2],[5]]
 *
 * Constraints:
 * - 1 <= candidates.length <= 100
 * - 1 <= candidates[i] <= 50
 * - 1 <= target <= 30
 */

// Backtracking
// Time: O(2^n) | Space: O(n)

export function combinationSum2(
	candidates: number[],
	target: number,
): number[][] {
	candidates.sort((a, b) => a - b)

	const results: number[][] = []
	const combination: number[] = []

	function backtrack(weight: number, remaining: number) {
		if (remaining === 0) {
			results.push([...combination])
			return
		}

		if (remaining < 0) {
			return
		}

		for (let i = weight; i < candidates.length; i++) {
			if (i > weight && candidates[i] === candidates[i - 1]) {
				continue
			}

			combination.push(candidates[i])
			backtrack(i + 1, remaining - candidates[i])
			combination.pop()
		}
	}

	backtrack(0, target)
	return results
}

// Tests
console.log(
	'candidates = [10,1,2,7,6,1,5], target = 8 =>',
	combinationSum2([10, 1, 2, 7, 6, 1, 5], 8),
)
console.log(
	'candidates = [2,5,2,1,2], target = 5 =>',
	combinationSum2([2, 5, 2, 1, 2], 5),
)
console.log(
	'candidates = [1,1,1,1,2], target = 4 =>',
	combinationSum2([1, 1, 1, 1, 2], 4),
)
