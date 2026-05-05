/**
 * @file reorder-list.ts
 * @description 
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 * 
 * Constraints:
 * - The number of nodes in the list is in the range [1, 5 * 10^4].
 * - 1 <= Node.val <= 1000
 * 
 * Examples:
 * 1. Input: head = [1,2,3,4]
 *    Output: [1,4,2,3]
 * 2. Input: head = [1,2,3,4,5]
 *    Output: [1,5,2,4,3]
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function reorderList(head: ListNode | null): void {
    // Your implementation goes here
}
