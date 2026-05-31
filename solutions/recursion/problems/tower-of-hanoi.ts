/**
 * @file tower-of-hanoi.ts
 * @description Tower of Hanoi
 *
 * --- Problem Description ---
 * The Tower of Hanoi is a classic recursion problem. Given n disks on peg 'A',
 * move all disks to peg 'C' using peg 'B' as auxiliary, following these rules:
 *   1. Only one disk can be moved at a time.
 *   2. Each move takes the upper disk from one peg and places it on another.
 *   3. A disk may only be placed on top of a larger disk.
 * Print or return the sequence of moves. Recurse: move n-1 to aux, move nth to dest, move n-1 from aux to dest.
 *
 * --- Example ---
 * Input: n = 3
 * Output: [A→C, A→B, C→B, A→C, B→A, B→C, A→C] — 7 moves
 *
 * --- Constraints ---
 * - 1 <= n <= 20
 *
 * --- Target Complexity ---
 * Time Complexity: O(2^N) — 2^n - 1 moves
 * Space Complexity: O(N) — recursion depth
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: n = 3
 *    Expected: 7 moves (2^3 - 1)
 * 2. Single disk
 *    Input: n = 1
 *    Expected: 1 move: A → C
 * 3. Two disks
 *    Input: n = 2
 *    Expected: 3 moves (A→B, A→C, B→C)
 */

export function hanoi(n: number, from = 'A', to = 'C', aux = 'B'): string[] {
    // TODO: Implement Tower of Hanoi recursively, returning list of moves
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(hanoi(3)); // Expected: 7 moves
