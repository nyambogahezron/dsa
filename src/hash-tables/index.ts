/**
 * @file index.ts
 * @description Implementation and examples of a Hash Table data structure.
 */

export class HashTable<K, V> {
    private table: any[];
    private size: number;

    constructor(size: number = 127) {
        this.table = new Array(size);
        this.size = 0;
    }

    // Your implementation goes here
}

// --- Examples ---

// Example 1: Basic usage
// const table = new HashTable<string, number>();
