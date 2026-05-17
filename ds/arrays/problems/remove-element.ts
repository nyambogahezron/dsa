/**
 * @file remove-element.ts
 * 
 * 27. Remove Element
 * Easy
 * 
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * 
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 * - Modify the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * - Return k.
 * 
 * Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 2.
 * 
 * Example 2:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,3,0,4,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
 * 
 * Constraints:
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 */

export function removeElement(nums: number[], val: number): number {
    // Your implementation goes here
    return 0;
}

// Tests
const test1 = [3, 2, 2, 3];
const k1 = removeElement(test1, 3);
console.log('[3,2,2,3], val=3 => k =', k1, ', nums =', test1.slice(0, k1));

const test2 = [0, 1, 2, 2, 3, 0, 4, 2];
const k2 = removeElement(test2, 2);
console.log('[0,1,2,2,3,0,4,2], val=2 => k =', k2, ', nums =', test2.slice(0, k2));
