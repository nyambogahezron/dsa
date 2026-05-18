/**
 * @file linked-list-cycle-ii.ts
 * @description Linked List Cycle II (Entrance Node)
 * 
 * --- Problem Description ---
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.
Do not modify the linked list. You must solve this in O(1) space.
 * 
 * --- Example ---
 * Input: head = [3, 2, 0, -4], pos = 1 (loop starts at node index 1)
Output: Node with value 2
 * 
 * 
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for duplicates, ordering, and empty-like edge cases where applicable.
 * 
 * --- Target Complexity ---
 * Time Complexity: O(N)
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

export interface ListNode { value: number; next: ListNode | null; }

export function detectCycle(head: ListNode | null): ListNode | null {
    // TODO: Implement the solution for Linked List Cycle II (Entrance Node)
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(detectCycle(/* TODO: add test input */));
