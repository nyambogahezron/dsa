/**
 * @file fruit-into-baskets.ts
 * @description Fruit Into Baskets (LeetCode #904)
 *
 * --- Problem Description ---
 * You are visiting a farm that has a single row of fruit trees arranged from left to
 * right. The trees are represented by an integer array `fruits` where `fruits[i]` is
 * the type of fruit the ith tree produces. You want to collect as much fruit as possible.
 * However, the owner has some strict rules: you only have two baskets, and each basket
 * can only hold a single type of fruit. Starting from any tree, you must pick exactly
 * one fruit from every tree (including the start tree) while moving to the right.
 * The picked fruits must fit in one of your baskets.
 * Return the maximum number of fruits you can pick.
 *
 * Key insight: This is equivalent to "Longest Subarray With At Most 2 Distinct Values".
 * Use a variable-size sliding window with a frequency map.
 *
 * --- Example ---
 * Input: fruits = [1, 2, 1]
 * Output: 3
 * Explanation: We can pick from all 3 trees.
 *
 * --- Constraints ---
 * - 1 <= fruits.length <= 10^5
 * - 0 <= fruits[i] < fruits.length
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(1) — at most 3 entries in the map
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: fruits = [1, 2, 1]
 *    Expected: 3
 * 2. Switch needed
 *    Input: fruits = [0, 1, 2, 2]
 *    Expected: 3
 * 3. Longer window
 *    Input: fruits = [1, 2, 3, 2, 2]
 *    Expected: 4
 */

export function totalFruit(fruits: number[]): number {
    // TODO: Implement the solution for Fruit Into Baskets
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(totalFruit([1, 2, 1]));     // Expected: 3
// console.log(totalFruit([0, 1, 2, 2]));  // Expected: 3
// console.log(totalFruit([1, 2, 3, 2, 2])); // Expected: 4
