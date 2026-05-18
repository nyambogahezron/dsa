/**
 * @file meeting-rooms-ii.ts
 * @description Meeting Rooms II
 * 
 * --- Problem Description ---
 * Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...]` (s < e), find the minimum number of conference rooms required.
Solve this using a Min-Heap tracking active room end times, or by sorting start times and end times separately.
 * 
 * --- Example ---
 * Input: intervals = [[0, 30],[5, 10],[15, 20]]
Output: 2
Explanation: We need Room 1 for [0,30]. Room 2 can take [5,10] and [15,20] because they don't overlap with each other, but they do overlap with Room 1.
 * 
 * 
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for duplicates, ordering, and empty-like edge cases where applicable.
 * 
 * --- Target Complexity ---
 * Time Complexity: O(N log N)
Space Complexity: O(N)
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

export function minMeetingRooms(intervals: Interval[]): number {
    // TODO: Implement the solution for Meeting Rooms II
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(minMeetingRooms(/* TODO: add test input */));
