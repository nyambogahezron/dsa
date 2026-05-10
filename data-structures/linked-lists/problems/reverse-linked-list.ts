/**
 * @file reverse-linked-list.ts
 * @description 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Constraints:
 * - The number of nodes in the list is the range [0, 5000].
 * - -5000 <= Node.val <= 5000
 * 
 * Examples:
 * 1. Input: head = [1,2,3,4,5]
 *    Output: [5,4,3,2,1]
 * 2. Input: head = [1,2]
 *    Output: [2,1]
 * 3. Input: head = []
 *    Output: []
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function reverseList(head: ListNode | null): ListNode | null {
    // Your implementation goes here
    return null;
}
