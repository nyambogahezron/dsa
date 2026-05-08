/**
 * @file contains-duplicate.ts
 * @description
 * Given an integer array `nums`, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * Examples:
 * 1. Input: nums = [1,2,3,1]
 *    Output: true
 * 2. Input: nums = [1,2,3,4]
 *    Output: false
 * 3. Input: nums = [1,1,1,3,3,4,3,2,4,2]
 *    Output: true
 */


//  * APPROACH 1: Set Size (Most concise)
//  * Time: O(n) | Space: O(n)

export function containsDuplicateSetSize(nums: number[]): boolean {
	return new Set(nums).size !== nums.length;
}

//  * APPROACH 2: Hash Set with Early Exit (Most efficient for large arrays with early duplicates)
//  * Time: O(n) | Space: O(n)

export function containsDuplicateHashSet(nums: number[]): boolean {
	const seen = new Set<number>();
	for (const num of nums) {
		if (seen.has(num)) return true;
		seen.add(num);
	}
	return false;
}

//  * APPROACH 3: Sorting (Memory efficient)
//  * Time: O(n log n) | Space: O(1) or O(n) depending on sort implementation

export function containsDuplicateSorting(nums: number[]): boolean {
	const sorted = [...nums].sort((a, b) => a - b);
	for (let i = 0; i < sorted.length - 1; i++) {
		if (sorted[i] === sorted[i + 1]) return true;
	}
	return false;
}

export const containsDuplicate = containsDuplicateSetSize



console.log('[1,2,3,1] =>', containsDuplicate([1, 2, 3, 1]));
console.log('[1,2,3,4] =>', containsDuplicate([1, 2, 3, 4]));
console.log(
	'[1,1,1,3,3,4,3,2,4,2] =>',
	containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]),
);
