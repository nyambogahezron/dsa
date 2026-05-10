/**
 * @file remove-duplicates-from-sorted-array.ts
 * 
 * 26. Remove Duplicates from Sorted Array
 * Easy
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
 * such that each unique element appears only once. The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 * 
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 * - Modify the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
 * - Return k.
 * 
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * 
 * Example 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 * 
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -100 <= nums[i] <= 100
 * - nums is sorted in non-decreasing order.
 */

export function removeDuplicates(nums: number[]): number {
    // Your implementation goes here
    return 0;
}

// Tests
const test1 = [1, 1, 2];
const k1 = removeDuplicates(test1);
console.log('[1,1,2] => k =', k1, ', nums =', test1.slice(0, k1));

const test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(test2);
console.log('[0,0,1,1,1,2,2,3,3,4] => k =', k2, ', nums =', test2.slice(0, k2));
