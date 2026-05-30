/**
 * @file move-zeroes.ts
 * @description Move Zeroes
 *
 * --- Problem Description ---
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Do this in-place without making a copy of the array.
 *
 * --- Example ---
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 *
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Preserve the relative order of all non-zero elements.
 * - Use O(1) extra space.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: Use a representative normal input from the example.
 *    Expected: Correct output for the standard scenario.
 * 2. Edge Case
 *    Input: Minimal valid input (e.g. empty/single element/smallest grid).
 *    Expected: Correct base-condition behavior.
 * 3. Boundary Case
 *    Input: Large valid input near constraints.
 *    Expected: Correct output within target complexity bounds.
 */


// Approach: Two Pointers
// time complexity: O(N) - We traverse the array once with the right pointer, and then fill in zeros with the left pointer.
// space complexity: O(1) - We are modifying the array in place and using only a constant amount of extra space for the pointers.
export function moveZeroes(nums: number[]): number[] {
  if (nums.length === 0) return nums;

  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 0) {
      nums[l] = nums[r];
      l++;
    }
  }

  for (let i = l; i < nums.length; i++) nums[i] = 0;

  return nums;
}


// Alternative Approach: Two Pointers with Swapping
// Complexity: Time O(n), Space O(1).
export function SwapZeroes(nums: number[]): number[] {
	let l = 0
	let step = 0

	for (let r = 0; r < nums.length; r++) {
		if (nums[r] !== 0) {
			if (r !== l) {
				console.log(
					`Step ${++step}: swap ${l} <-> ${r} | before: [${nums.join(', ')}]`,
				)
				nums[l] = nums[r]
				nums[r] = nums[l]
				console.log(`          after:  [${nums.join(', ')}]`)
			} else {
				console.log(
					`Step ${++step}: place non-zero at ${l} (no swap) | value=${nums[r]} | state: [${nums.join(', ')}]`,
				)
			}
			l++
		}
	}

	console.log(`Finished (${step} steps): [${nums.join(', ')}]`)
	return nums
}


// Test
console.log('[0, 1, 0, 3, 12] =>', SwapZeroes([0, 1, 0, 3, 12]))
console.log('[0, 0, 0, 3, 12] =>', SwapZeroes([0, 0, 0, 3, 12]))
console.log('[0] =>', SwapZeroes([0]));
