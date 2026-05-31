/**
 * @file random-pick-with-weight.ts
 * @description Random Pick with Weight (LeetCode #528)
 *
 * --- Problem Description ---
 * Given an array `w` where `w[i]` describes the weight of `w[i]` index i, implement
 * the function pickIndex() which randomly picks an index in the range [0, w.length-1]
 * and returns it. The probability of picking index i is `w[i] / sum(w)`.
 * Build a prefix sum array; generate a random number in [1, sum]; binary search for
 * the first prefix sum >= that random number.
 *
 * --- Example ---
 * Input: w = [1, 3]; pickIndex() called
 * Output: 0 (prob 1/4) or 1 (prob 3/4)
 *
 * --- Constraints ---
 * - 1 <= w.length <= 10^4
 * - 1 <= w[i] <= 10^5
 * - pickIndex will be called at most 10^4 times.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N) init, O(log N) per pick
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Equal weights
 *    Input: w = [1,1]; pickIndex() ~50% each
 * 2. Skewed weights
 *    Input: w = [1,99]; pickIndex() ~99% returns 1
 * 3. Single weight
 *    Input: w = [5]; pickIndex() always returns 0
 */

export class RandomPickWithWeight {
    private prefix: number[];
    private total: number;

    constructor(w: number[]) {
        // TODO: Build prefix sum array
        this.prefix = [];
        this.total = 0;
        throw new Error("Method not implemented.");
    }

    pickIndex(): number {
        // TODO: Random number + binary search on prefix array
        throw new Error("Method not implemented.");
    }
}

// Sample Test Scaffold (enable after implementation)
// const sol = new RandomPickWithWeight([1,3]);
// console.log(sol.pickIndex()); // 0 or 1 with probabilities 1/4 and 3/4
