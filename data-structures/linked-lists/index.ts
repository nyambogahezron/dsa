/**
 * @file index.ts
 * @description Implementation and examples of a Linked List data structure.
 */

export class LinkedListNode<T> {
    val: T;
    next: LinkedListNode<T> | null;
    constructor(val: T, next: LinkedListNode<T> | null = null) {
        this.val = val;
        this.next = next;
    }
}

export class LinkedList<T> {
    private head: LinkedListNode<T> | null;
    private tail: LinkedListNode<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Your implementation goes here
}

// --- Examples ---

// Example 1: Basic usage
// const list = new LinkedList<number>();
