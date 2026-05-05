/**
 * @file index.ts
 * @description Implementation and examples of an Array-based data structure.
 */

export class MyArray<T> {
    private data: { [key: number]: T };
    private length: number;

    constructor() {
        this.data = {};
        this.length = 0;
    }

    // Your implementation goes here
}

// --- Examples ---

// Example 1: Basic usage
// const arr = new MyArray<number>();
// console.log(arr);
