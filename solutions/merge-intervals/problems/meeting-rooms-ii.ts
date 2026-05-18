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
 * --- Target Complexity ---
 * Time Complexity: O(N log N)
Space Complexity: O(N)
 */

export type Interval = [number, number];

export function minMeetingRooms(intervals: Interval[]): number {
    // TODO: Implement the solution for Meeting Rooms II
    throw new Error("Method not implemented.");
}
