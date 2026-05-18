/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Merge Intervals pattern.
 */

export type Interval = [number, number];

/**
 * Standard Blueprint for Merging Overlapping Intervals
 * 
 * @param intervals List of [start, end] intervals
 * @returns List of merged, non-overlapping intervals
 */
export function mergeIntervals(intervals: Interval[]): Interval[] {
    if (intervals.length <= 1) {
        return intervals;
    }

    // 1. Sort the intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged: Interval[] = [];
    let currentInterval = intervals[0];
    merged.push(currentInterval);

    // 2. Iterate through sorted intervals and merge if overlapping
    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];
        const [currentStart, currentEnd] = currentInterval;
        const [nextStart, nextEnd] = nextInterval;

        if (nextStart <= currentEnd) {
            // Overlapping intervals: Merge by updating the end time of the current interval
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            // Non-overlapping: Move to the next interval
            currentInterval = nextInterval;
            merged.push(currentInterval);
        }
    }

    return merged;
}

// --- Example Usage ---
// const merged = mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
// Output: [[1, 6], [8, 10], [15, 18]]
