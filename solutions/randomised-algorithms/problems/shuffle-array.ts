/**
 * @file shuffle-array.ts
 * @description Shuffle an Array (LeetCode #384)
 *
 * --- Problem Description ---
 * Given an integer array `nums`, design an algorithm to randomly shuffle it.
 * All permutations of the array should be equally likely. Implement the Fisher-Yates
 * (Knuth) shuffle: iterate from end to start, swap each element with a random element
 * at or before its position.
 *
 * Also implement reset() to restore the original configuration.
 *
 * --- Example ---
 * Input: ["Shuffle",[1,2,3],"Shuffle","Reset","Shuffle"]
 * Output: [null,[...],[...],[1,2,3],[...]]
 *
 * --- Constraints ---
 * - 1 <= nums.length <= 200
 * - -10^6 <= nums[i] <= 10^6
 * - All the elements of nums are unique.
 * - At most 5 * 10^4 calls to reset and shuffle.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N) per shuffle
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic shuffle
 *    Input: nums = [1,2,3]; shuffle()
 *    Expected: some permutation of [1,2,3]
 * 2. Reset after shuffle
 *    Input: shuffle(); reset()
 *    Expected: [1,2,3]
 * 3. Single element
 *    Input: nums = [1]; shuffle()
 *    Expected: [1]
 */

export class ShuffleArray {
    private original: number[];
    private arr: number[];

    constructor(nums: number[]) {
        this.original = [...nums];
        this.arr = [...nums];
    }

    reset(): number[] {
        // TODO: Restore and return the original array
        throw new Error("Method not implemented.");
    }

    shuffle(): number[] {
        // TODO: Implement Fisher-Yates shuffle
        throw new Error("Method not implemented.");
    }
}

// Sample Test Scaffold (enable after implementation)
// const s = new ShuffleArray([1,2,3]);
// console.log(s.shuffle()); // random permutation
// console.log(s.reset());   // [1,2,3]
