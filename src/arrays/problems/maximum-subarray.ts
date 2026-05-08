/**
 * @file maximum-subarray.ts
 * @description
 * Given an integer array `nums`, find the subarray with the largest sum, and return its sum.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 *
 * Examples:
 * 1. Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 *    Output: 6
 *    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * 2. Input: nums = [1]
 *    Output: 1
 *    Explanation: The subarray [1] has the largest sum 1.
 * 3. Input: nums = [5,4,-1,7,8]
 *    Output: 23
 *    Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */

// Brute force approach
// Time: O(n^3) and space: O(1)

export function maxSubArray(nums: number[]): number {
	let max = -Infinity

	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			let sum = 0
			for (let k = i; k <= j; k++) {
				sum += nums[k]
			}

			if (sum > max) max = sum
		}
	}

	return max
}


// Optimized solution O(n)
// Time: O(n) and space: O(1)

export function maxSubArrayOptimized(nums: number[]): number {
	let max = -Infinity
	let sum = 0

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		if (sum > max) max = sum
		if (sum < 0) sum = 0
	}
	return max
}

export const maxSubArrayFn = maxSubArrayOptimized
// export const maxSubArrayFn = maxSubArray


console.log(
	'[-2, 1, -3, 4, -1, 2, 1, -5, 4] =>',
	maxSubArrayFn([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
)
console.log('[1] =>', maxSubArrayFn([1]))
console.log('[5,4,-1,7,8] =>', maxSubArrayFn([5, 4, -1, 7, 8]))



