/**
 * @file insert-interval.ts
 * @description Insert Interval (LeetCode #57)
 *
 * --- Problem Description ---
 * You are given an array of non-overlapping intervals `intervals` sorted in ascending
 * order by start time, and an interval `newInterval`. Insert `newInterval` into
 * `intervals` such that the array is still sorted and non-overlapping (merge if necessary).
 * Walk through three phases: add intervals before new, merge overlapping, add after.
 *
 * --- Example ---
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * --- Constraints ---
 * - 0 <= intervals.length <= 10^4
 * - intervals[i].length == 2
 * - 0 <= start_i <= end_i <= 10^5
 * - intervals is sorted in ascending order by start_i.
 * - newInterval.length == 2
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 *    Expected: [[1,5],[6,9]]
 * 2. Insert at start
 *    Input: intervals = [[3,5],[6,9]], newInterval = [1,2]
 *    Expected: [[1,2],[3,5],[6,9]]
 * 3. Merge all
 *    Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 *    Expected: [[1,2],[3,10],[12,16]]
 */

export function insert(intervals: number[][], newInterval: number[]): number[][] {
    // TODO: Implement the solution for Insert Interval
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(insert([[1,3],[6,9]], [2,5])); // Expected: [[1,5],[6,9]]
