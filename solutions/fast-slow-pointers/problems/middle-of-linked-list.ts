/**
 * @file middle-of-linked-list.ts
 * @description Middle of the Linked List (LeetCode #876)
 *
 * --- Problem Description ---
 * Given the head of a singly linked list, return the middle node. If there are
 * two middle nodes, return the second one.
 * Use fast-slow pointers: fast moves 2, slow moves 1. When fast reaches end, slow is at middle.
 *
 * --- Example ---
 * Input: head = [1, 2, 3, 4, 5]
 * Output: node with val 3 → [3, 4, 5]
 *
 * Input: head = [1, 2, 3, 4, 5, 6]
 * Output: node with val 4 → [4, 5, 6]
 *
 * --- Constraints ---
 * - The number of nodes in the list is in the range [1, 100].
 * - 1 <= Node.val <= 100
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. Odd length
 *    Input: [1,2,3,4,5]
 *    Expected: node 3
 * 2. Even length
 *    Input: [1,2,3,4,5,6]
 *    Expected: node 4
 * 3. Single node
 *    Input: [1]
 *    Expected: node 1
 */

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val = 0, next: ListNode | null = null) {
        this.val = val; this.next = next;
    }
}

export function middleNode(head: ListNode | null): ListNode | null {
    // TODO: Implement using fast-slow pointer technique
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// Build list [1,2,3,4,5] and call middleNode(head) → expect node with val=3
