/**
 * @file k-closest-points.ts
 * @description K Closest Points to Origin
 * 
 * --- Problem Description ---
 * Given an array of `points` where `points[i] = [x, y]` represents a point on the X-Y plane and an integer `k`,
return the `k` closest points to the origin `(0, 0)`.
The distance between two points on the X-Y plane is the Euclidean distance (`sqrt((x1 - x2)^2 + (y1 - y2)^2)`).
You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)
Solve this using a Max-Heap of size K.
 * 
 * --- Example ---
 * Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation: Distance of [1,3] is sqrt(10). Distance of [-2,2] is sqrt(8). [1,3] is closer.
 * 
 * --- Target Complexity ---
 * Time Complexity: O(N log K)
Space Complexity: O(K)
 */

export type Point = [number, number];

export function kClosest(points: Point[], k: number): Point[] {
    // TODO: Implement the solution for K Closest Points to Origin
    throw new Error("Method not implemented.");
}
