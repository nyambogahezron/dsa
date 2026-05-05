/**
 * @file merge-k-sorted-lists.ts
 * @description 
 * You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Constraints:
 * - k == lists.length
 * - 0 <= k <= 10^4
 * - 0 <= lists[i].length <= 500
 * - -10^4 <= lists[i][j] <= 10^4
 * - lists[i] is sorted in ascending order.
 * - The sum of lists[i].length will not exceed 10^6.
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
    // Your implementation goes here
    return null;
}
