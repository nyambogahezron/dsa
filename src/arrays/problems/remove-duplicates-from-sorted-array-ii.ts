/**
 * @file remove-duplicates-from-sorted-array-ii.ts
 * @description
 * Given an integer array `nums` sorted in non-decreasing order, remove some duplicates in-place 
 * such that each unique element appears at most twice. The relative order of the elements should be kept the same.
 * 
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums is sorted in non-decreasing order.
 *
 * Examples:
 * 1. Input: nums = [1,1,1,2,2,3]
 *    Output: 5, nums = [1,1,2,2,3,_]
 * 2. Input: nums = [0,0,1,1,1,1,2,3,3]
 *    Output: 7, nums = [0,0,1,1,2,3,3,_,_]
 */

/**
 * APPROACH: Two Pointers
 * Since the array is sorted, we can keep track of where to write the next valid element.
 * We allow an element if it's different from the element two positions before the current write index.
 * 
 * Time: O(n) | Space: O(1)
 */
export function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let k = 2; // The first two elements are always allowed (at most twice)
    
    for (let i = 2; i < nums.length; i++) {
        // Compare current element with the element two positions before the write pointer
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

// Tests
const test1 = [1, 1, 1, 2, 2, 3];
const k1 = removeDuplicates(test1);
console.log('Test 1: [1,1,1,2,2,3] => k =', k1, ', nums =', test1.slice(0, k1));

const test2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const k2 = removeDuplicates(test2);
console.log('Test 2: [0,0,1,1,1,1,2,3,3] => k =', k2, ', nums =', test2.slice(0, k2));
