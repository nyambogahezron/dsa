/**
 * @file implement-trie.ts
 * @description 
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 * 
 * Implement the `Trie` class:
 * - `Trie()` Initializes the trie object.
 * - `void insert(String word)` Inserts the string word into the trie.
 * - `boolean search(String word)` Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 * - `boolean startsWith(String prefix)` Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 * 
 * Constraints:
 * - 1 <= word.length, prefix.length <= 2000
 * - word and prefix consist only of lowercase English letters.
 * - At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.
 */

class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

export class Trie {
    constructor() {
        // Your implementation goes here
    }

    insert(word: string): void {
        // Your implementation goes here
    }

    search(word: string): boolean {
        // Your implementation goes here
        return false;
    }

    startsWith(prefix: string): boolean {
        // Your implementation goes here
        return false;
    }
}
