/**
 * @file index.ts
 * @description Implementation and examples of Graph data structures.
 */

export class Graph<T> {
    private adjacencyList: Map<T, T[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    // Your implementation goes here
}

// --- Examples ---

// Example 1: Basic usage
// const graph = new Graph<string>();
