/**
 * @file task-scheduler.ts
 * @description Task Scheduler (LeetCode #621)
 *
 * --- Problem Description ---
 * Given a characters array `tasks` representing CPU tasks and a non-negative integer
 * `n` that represents a cooldown interval, return the minimum number of intervals
 * needed to finish all tasks. Tasks of the same type must be at least n intervals apart.
 * Use a max-heap (greedy): always schedule the most frequent remaining task.
 *
 * --- Example ---
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A → B → idle → A → B → idle → A → B
 *
 * --- Constraints ---
 * - 1 <= tasks.length <= 10^4
 * - tasks[i] is an uppercase English letter.
 * - 0 <= n <= 100
 *
 * --- Target Complexity ---
 * Time Complexity: O(N log 26) = O(N)
 * Space Complexity: O(1) (at most 26 task types)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: tasks = ["A","A","A","B","B","B"], n = 2
 *    Expected: 8
 * 2. No cooldown
 *    Input: tasks = ["A","A","A","B","B","B"], n = 0
 *    Expected: 6
 * 3. Single task type
 *    Input: tasks = ["A","A","A"], n = 2
 *    Expected: 7
 */

export function leastInterval(tasks: string[], n: number): number {
    // TODO: Implement the solution for Task Scheduler
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(leastInterval(["A","A","A","B","B","B"], 2)); // Expected: 8
