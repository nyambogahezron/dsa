/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Fast & Slow Pointers pattern (Floyd's Cycle Detection).
 */

interface ListNode<T> {
    value: T;
    next: ListNode<T> | null;
}

/**
 * Template 1: Cycle Detection
 * Determines if a linked list contains a cycle.
 */
export function hasCycle<T>(head: ListNode<T> | null): boolean {
    if (!head) return false;

    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;          // Moves 1 step
        fast = fast.next.next;      // Moves 2 steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle
}

/**
 * Template 2: Find Cycle Start Node
 * Finds the starting node of the cycle in a linked list.
 */
export function findCycleStart<T>(head: ListNode<T> | null): ListNode<T> | null {
    if (!head) return null;

    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head;
    let hasCycle = false;

    // Step 1: Detect if a cycle exists
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }

    if (!hasCycle) return null; // No cycle, so no cycle start

    // Step 2: Reset slow pointer to head and move both slow and fast pointers at 1x speed.
    // They will meet exactly at the start of the cycle.
    slow = head;
    while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
    }

    return slow; // The start node of the cycle
}
