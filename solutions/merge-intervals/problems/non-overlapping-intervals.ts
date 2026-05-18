/**
 * @file non-overlapping-intervals.ts
 * @description Non-overlapping Intervals
 * 
 * --- Problem Description ---
 * Given an array of intervals `intervals` where `intervals[i] = [start, end]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
Solve this using a greedy strategy: sort by end times and select intervals that end as early as possible.
 * 
 * --- Example ---
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 * 
 * 
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for duplicates, ordering, and empty-like edge cases where applicable.
 * 
 * --- Target Complexity ---
 * Time Complexity: O(N log N)
Space Complexity: O(1)
 * 
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: Use a representative normal input from the example.
 *    Expected: Correct output for the standard scenario.
 * 2. Edge Case
 *    Input: Minimal valid input (e.g., empty/single element/smallest grid).
 *    Expected: Correct base-condition behavior.
 * 3. Boundary Case
 *    Input: Large valid input near constraints.
 *    Expected: Correct output within target complexity bounds.
 */

export type Interval = [number, number];

export function eraseOverlapIntervals(intervals: Interval[]): number {
    // TODO: Implement the solution for Non-overlapping Intervals
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(eraseOverlapIntervals(/* TODO: add test input */));
