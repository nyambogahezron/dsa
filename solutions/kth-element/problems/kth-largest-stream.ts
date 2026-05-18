/**
 * @file kth-largest-stream.ts
 * @description Kth Largest Element in a Stream
 * 
 * --- Problem Description ---
 * Design a class `KthLargest` to find the `k-th` largest element in a stream.
Note that it is the `k-th` largest element in the sorted order, not the `k-th` distinct element.
Your `KthLargest` class should have a constructor which accepts an integer `k` and an integer array `nums`,
and a method `add(val: number): number` which appends a new integer `val` to the stream and returns the `k-th` largest element.
 * 
 * --- Example ---
 * KthLargest stream = new KthLargest(3, [4, 5, 8, 2]);
stream.add(3);   // returns 4
stream.add(5);   // returns 5
stream.add(10);  // returns 5
 * 
 * --- Target Complexity ---
 * Time Complexity: O(log K) per add operation
Space Complexity: O(K)
 */

export class KthLargest {
    // TODO: Implement using a MinHeap of size K
    constructor(k: number, nums: number[]) {}
    add(val: number): number { return 0; }
} {
    // TODO: Implement the solution for Kth Largest Element in a Stream
    throw new Error("Method not implemented.");
}
