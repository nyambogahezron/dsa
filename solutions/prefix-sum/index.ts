/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Prefix Sum pattern.
 */

/**
 * Template 1: Build a Prefix Sum Array
 * Precompute cumulative sums so any range sum [l, r] is answered in O(1).
 *
 * @param nums Input array of numbers
 * @returns Prefix sum array where prefix[i] = sum of nums[0..i-1]
 */
export function buildPrefixSum(nums: number[]): number[] {
    const prefix = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    return prefix;
}

/**
 * Template 2: Range Sum Query using Prefix Array
 * Returns the sum of elements in nums[left..right] (inclusive, 0-indexed).
 *
 * @param prefix Pre-built prefix sum array
 * @param left   Left index (0-indexed, inclusive)
 * @param right  Right index (0-indexed, inclusive)
 */
export function rangeSum(prefix: number[], left: number, right: number): number {
    return prefix[right + 1] - prefix[left];
}

/**
 * Template 3: Prefix Sum with HashMap (for subarray sum problems)
 * Pattern: track prefixSum counts to find subarrays summing to a target.
 *
 * @param nums   Input array
 * @param target Target subarray sum
 * @returns      Number of subarrays whose elements sum to target
 */
export function countSubarraysSumToTarget(nums: number[], target: number): number {
    const prefixCounts = new Map<number, number>();
    prefixCounts.set(0, 1); // Empty subarray base case
    let count = 0;
    let currentSum = 0;

    for (const num of nums) {
        currentSum += num;
        // If (currentSum - target) was seen before, those subarrays sum to target
        count += prefixCounts.get(currentSum - target) ?? 0;
        prefixCounts.set(currentSum, (prefixCounts.get(currentSum) ?? 0) + 1);
    }

    return count;
}

// --- Example Usage ---
// const prefix = buildPrefixSum([1, 2, 3, 4, 5]);
// console.log(rangeSum(prefix, 1, 3)); // Sum of [2,3,4] = 9
