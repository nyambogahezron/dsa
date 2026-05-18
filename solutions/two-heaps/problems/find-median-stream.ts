/**
 * @file find-median-stream.ts
 * @description Find Median from Data Stream
 * 
 * --- Problem Description ---
 * Implement the `MedianFinder` class which supports adding numbers from a data stream and finding the median of the current numbers.
* `addNum(num: number): void` adds the integer `num` from the data stream to the data structure.
* `findMedian(): number` returns the median of all elements so far.
Solve this using Two Heaps (a Max-Heap for the lower half, a Min-Heap for the upper half).
 * 
 * --- Example ---
 * MedianFinder mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
mf.findMedian(); // returns 1.5
mf.addNum(3);
mf.findMedian(); // returns 2.0
 * 
 * --- Target Complexity ---
 * Time Complexity: O(log N) for addNum, O(1) for findMedian
Space Complexity: O(N)
 */

export class MedianFinder {
    // TODO: Implement using two heaps (MinHeap and MaxHeap)
    constructor() {}
    addNum(num: number): void {}
    findMedian(): number { return 0; }
} {
    // TODO: Implement the solution for Find Median from Data Stream
    throw new Error("Method not implemented.");
}
