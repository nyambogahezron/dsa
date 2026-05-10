/**
 * @file design-circular-queue.ts
 * @description 
 * Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
 * 
 * Implement the `MyCircularQueue` class:
 * - `MyCircularQueue(k)` Initializes the object with the size of the queue to be k.
 * - `int Front()` Gets the front item from the queue. If the queue is empty, return -1.
 * - `int Rear()` Gets the last item from the queue. If the queue is empty, return -1.
 * - `boolean enQueue(value)` Inserts an element into the circular queue. Return true if the operation is successful.
 * - `boolean deQueue()` Deletes an element from the circular queue. Return true if the operation is successful.
 * - `boolean isEmpty()` Checks whether the circular queue is empty or not.
 * - `boolean isFull()` Checks whether the circular queue is full or not.
 * 
 * Constraints:
 * - 1 <= k <= 1000
 * - 0 <= value <= 1000
 * - At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.
 */

export class MyCircularQueue {
    constructor(k: number) {
        // Your implementation goes here
    }

    enQueue(value: number): boolean {
        // Your implementation goes here
        return false;
    }

    deQueue(): boolean {
        // Your implementation goes here
        return false;
    }

    Front(): number {
        // Your implementation goes here
        return -1;
    }

    Rear(): number {
        // Your implementation goes here
        return -1;
    }

    isEmpty(): boolean {
        // Your implementation goes here
        return true;
    }

    isFull(): boolean {
        // Your implementation goes here
        return false;
    }
}
