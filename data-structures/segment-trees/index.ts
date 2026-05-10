/**
 * @file index.ts
 * @description Implementation and examples of a Segment Tree data structure.
 */

export class SegmentTree {
    private tree: number[];
    private n: number;

    constructor(data: number[]) {
        this.n = data.length;
        this.tree = new Array(4 * this.n);
        // this.build(data, 1, 0, this.n - 1);
    }

    // Your implementation goes here
}

// --- Examples ---

// Example 1: Basic usage
// const st = new SegmentTree([1, 3, 5, 7, 9, 11]);
