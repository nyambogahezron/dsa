/**
 * @file plus-one.ts
 * 
 * 66. Plus One
 * Easy
 * 
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant in left-to-right order. 
 * The large integer does not contain any leading zeros, except the number 0 itself.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * Example 1:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].
 * 
 * Example 2:
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * 
 * Example 3:
 * Input: digits = [9]
 * Output: [1,0]
 * 
 * Constraints:
 * - 1 <= digits.length <= 100
 * - 0 <= digits[i] <= 9
 * - digits does not contain any leading zeros.
 */

export function plusOne(digits: number[]): number[] {
    // Your implementation goes here
    return [];
}

// Tests
console.log('[1,2,3] =>', plusOne([1, 2, 3]));
console.log('[4,3,2,1] =>', plusOne([4, 3, 2, 1]));
console.log('[9] =>', plusOne([9]));
