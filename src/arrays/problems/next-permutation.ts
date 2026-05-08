/**
 * @file next-permutation.ts
 * 
 * 31. Next Permutation
 * Medium
 * 
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
 * - For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].
 * 
 * The next permutation of an array of integers is the next lexicographically greater permutation of its integer. 
 * More formally, if all the permutations of the array are sorted in a container according to their lexicographical order, 
 * then the next permutation of that array is the permutation that follows it in the sorted container. 
 * If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [1,3,2]
 * 
 * Example 2:
 * Input: nums = [3,2,1]
 * Output: [1,2,3]
 * 
 * Example 3:
 * Input: nums = [1,1,5]
 * Output: [1,5,1]
 * 
 * Constraints:
 * - 1 <= nums.length <= 100
 * - 0 <= nums[i] <= 100
 */

export function nextPermutation(nums: number[]): void {
    // Your implementation goes here (mutate nums in-place)
}

// Tests
const t1 = [1, 2, 3];
nextPermutation(t1);
console.log('[1,2,3] =>', t1);

const t2 = [3, 2, 1];
nextPermutation(t2);
console.log('[3,2,1] =>', t2);
