/**
 * @file three-sum-closest.ts
 * 
 * 16. 3Sum Closest
 * Medium
 * 
 * Given an integer array nums of length n and an integer target, find three integers in nums 
 * such that the sum is closest to target.
 * 
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 * 
 * Example 1:
 * Input: nums = [-1,2,1,-4], target = 1
 * Output: 2
 * Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * Example 2:
 * Input: nums = [0,0,0], target = 1
 * Output: 0
 * Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 * 
 * Constraints:
 * - 3 <= nums.length <= 500
 * - -1000 <= nums[i] <= 1000
 * - -10^4 <= target <= 10^4
 */

export function threeSumClosest(nums: number[], target: number): number {
    // Your implementation goes here
    return 0;
}

// Tests
console.log('nums = [-1,2,1,-4], target = 1 =>', threeSumClosest([-1, 2, 1, -4], 1));
console.log('nums = [0,0,0], target = 1 =>', threeSumClosest([0, 0, 0], 1));
