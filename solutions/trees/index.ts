/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for Tree problems.
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Template 1: DFS Post-Order (bottom-up)
 * Compute something about a subtree before returning to parent.
 * Used for: height, diameter, path sum, LCA.
 *
 * @param node Current node
 * @returns Result for this subtree
 */
export function dfsPostOrder(node: TreeNode | null): number {
    if (!node) return 0; // base case: empty tree

    const left = dfsPostOrder(node.left);   // process left subtree
    const right = dfsPostOrder(node.right); // process right subtree

    // Combine results — e.g., height = 1 + Math.max(left, right)
    return 1 + Math.max(left, right);
}

/**
 * Template 2: DFS Pre-Order (top-down, passing info downward)
 * Used for: path from root, building string representations.
 *
 * @param node    Current node
 * @param current Accumulated state from root to this node
 * @param result  Collected results
 */
export function dfsPreOrder(node: TreeNode | null, current: number, result: number[]): void {
    if (!node) return;

    // Process node before children (e.g., add node.val to path)
    current = current * 10 + node.val;

    if (!node.left && !node.right) {
        result.push(current); // leaf — record accumulated value
        return;
    }

    dfsPreOrder(node.left, current, result);
    dfsPreOrder(node.right, current, result);
}

// --- Example Usage ---
// const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// console.log(dfsPostOrder(root)); // height = 2
