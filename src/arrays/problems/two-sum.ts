/**
 * @file two-sum.ts
 * 
 * 1. Two Sum
 * Easy
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 */

// Brute force approach
// Time: O(n^2) and space: O(1)
export function twoSumBruteForce(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
	return []
}

// Optimized solution
// Time: O(n) and space: O(n)
export function twoSumOptimized(nums: number[], target: number): number[] {
	const map = new Map<number, number>() 

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]

		if (map.has(complement)) {
			return [map.get(complement)!, i]
		}

		map.set(nums[i], i)
	}
	return []
}

export const twoSum = twoSumOptimized

// Tests
console.log('nums = [2, 7, 11, 15], target = 9 =>', twoSum([2, 7, 11, 15], 9))
console.log('nums = [3, 2, 4], target = 6 =>', twoSum([3, 2, 4], 6))
console.log('nums = [3, 3], target = 6 =>', twoSum([3, 3], 6))
