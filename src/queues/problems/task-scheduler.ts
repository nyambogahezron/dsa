/**
 * @file task-scheduler.ts
 * @description 
 * Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
 * However, there is a non-negative integer `n` that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
 * Return the least number of units of time that the CPU will take to finish all the given tasks.
 * 
 * Constraints:
 * - 1 <= tasks.length <= 10^4
 * - tasks[i] is upper-case English letter.
 * - 0 <= n <= 100
 * 
 * Examples:
 * 1. Input: tasks = ["A","A","A","B","B","B"], n = 2
 *    Output: 8
 *    Explanation: A -> B -> idle -> A -> B -> idle -> A -> B
 */

export function leastInterval(tasks: string[], n: number): number {
    // Your implementation goes here
    return 0;
}
