/**
 * @file print-in-order.ts
 * @description Print in Order (LeetCode #1114)
 *
 * --- Problem Description ---
 * Suppose we have a class `Foo` with three methods: first(), second(), and third().
 * Three threads call these methods concurrently. Design a mechanism to ensure that
 * second() runs after first() and third() runs after second().
 * Use Promises or semaphore-like barriers (in TS: use async/await with flag variables
 * or callback coordination to simulate ordering).
 *
 * --- Example ---
 * Input: [1,2,3] (thread order)
 * Output: "firstsecondthird" always
 *
 * --- Constraints ---
 * - Concurrent calls to first, second, third in any order.
 *
 * --- Target Complexity ---
 * Time Complexity: O(1) per call
 * Space Complexity: O(1)
 *
 * --- Test Cases ---
 * 1. In order: first→second→third
 * 2. Out of order: third→first→second (must still print "firstsecondthird")
 * 3. Out of order: second→third→first (must still print "firstsecondthird")
 */

export class Foo {
    private afterFirst: Promise<void>;
    private resolveFirst!: () => void;
    private afterSecond: Promise<void>;
    private resolveSecond!: () => void;

    constructor() {
        // TODO: Initialize barriers using Promises
        this.afterFirst = new Promise(resolve => { this.resolveFirst = resolve; });
        this.afterSecond = new Promise(resolve => { this.resolveSecond = resolve; });
    }

    async first(printFirst: () => void): Promise<void> {
        // TODO: Call printFirst(), then signal that first is done
        throw new Error("Method not implemented.");
    }

    async second(printSecond: () => void): Promise<void> {
        // TODO: Wait for first, call printSecond(), signal second done
        throw new Error("Method not implemented.");
    }

    async third(printThird: () => void): Promise<void> {
        // TODO: Wait for second, then call printThird()
        throw new Error("Method not implemented.");
    }
}

// Sample Test Scaffold (enable after implementation)
// const foo = new Foo();
// foo.second(() => process.stdout.write("second"));
// foo.first(() => process.stdout.write("first"));
// foo.third(() => process.stdout.write("third"));
// Expected output: firstsecondthird
