/**
 * @file text-justification.ts
 * 
 * 68. Text Justification
 * Hard
 * 
 * Given an array of strings words and a width maxWidth, format the text such that each line has exactly 
 * maxWidth characters and is fully (left and right) justified.
 * 
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line. 
 * Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
 * 
 * Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line 
 * does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 * 
 * For the last line of text, it should be left-justified, and no extra space is inserted between words.
 * 
 * Example 1:
 * Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
 * Output:
 * [
 *    "This    is    an",
 *    "example  of text",
 *    "justification.  "
 * ]
 * 
 * Constraints:
 * - 1 <= words.length <= 300
 * - 1 <= words[i].length <= 20
 * - words[i] consists of only English letters and symbols.
 * - 1 <= maxWidth <= 100
 * - words[i].length <= maxWidth
 */

export function fullJustify(words: string[], maxWidth: number): string[] {
    // Your implementation goes here
    return [];
}

// Tests
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
