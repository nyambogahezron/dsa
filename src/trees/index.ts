/**
 * @file index.ts
 * @description Implementation and examples of Tree data structures (e.g., BST).
 */

export class TreeNode<T> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree<T> {
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Your implementation goes here
}

// --- Examples ---

// Example 1: Basic usage
// const bst = new BinarySearchTree<number>();
