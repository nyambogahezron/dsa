/**
 * @file subsets.ts
 * 
 * 78. Subsets
 * Medium
 * 
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10
 * - -10 <= nums[i] <= 10
 * - All the numbers of nums are unique.
 */

export function subsets(nums: number[]): number[][] {
    // Your implementation goes here
    return [];
}

// Tests
console.log('[1,2,3] =>', subsets([1, 2, 3]));
console.log('[0] =>', subsets([0]));
