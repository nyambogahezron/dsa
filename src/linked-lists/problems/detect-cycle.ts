/**
 * @file detect-cycle.ts
 * @description 
 * Given `head`, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Constraints:
 * - The number of nodes in the list is in the range [0, 10^4].
 * - -10^5 <= Node.val <= 10^5
 * 
 * Examples:
 * 1. Input: head = [3,2,0,-4], pos = 1
 *    Output: true
 * 2. Input: head = [1,2], pos = 0
 *    Output: true
 * 3. Input: head = [1], pos = -1
 *    Output: false
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function hasCycle(head: ListNode | null): boolean {
    // Your implementation goes here
    return false;
}
