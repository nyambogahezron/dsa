/**
 * @file palindrome-linked-list.ts
 * @description Palindrome Linked List
 * 
 * --- Problem Description ---
 * Given the head of a singly linked list, return `true` if it is a palindrome or `false` otherwise.
Solve this in O(N) time and O(1) space by: 1. Finding middle (Fast/Slow), 2. Reversing second half, 3. Comparing both halves.
 * 
 * --- Example ---
 * Input: head = [1, 2, 2, 1]
Output: true
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

export function isPalindromeList(head: ListNode | null): boolean {
    // TODO: Implement the solution for Palindrome Linked List
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(isPalindromeList(/* TODO: add test input */));
