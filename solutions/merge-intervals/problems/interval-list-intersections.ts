/**
 * @file interval-list-intersections.ts
 * @description Interval List Intersections
 * 
 * --- Problem Description ---
 * You are given two lists of closed intervals, `firstList` and `secondList`, where `firstList[i] = [start_i, end_i]` and `secondList[j] = [start_j, end_j]`.
Each list of intervals is pairwise pairwise disjoint and in sorted order.
Return the intersection of these two interval lists.
Use two pointers (one for each list), incrementing the pointer of the interval that ends earlier.
 * 
 * --- Example ---
 * Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 * 
 * 
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for duplicates, ordering, and empty-like edge cases where applicable.
 * 
 * --- Target Complexity ---
 * Time Complexity: O(N + M)
Space Complexity: O(1) auxiliary (excluding output)
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

export function intervalIntersection(firstList: Interval[], secondList: Interval[]): Interval[] {
    // TODO: Implement the solution for Interval List Intersections
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(intervalIntersection(/* TODO: add test input */));
