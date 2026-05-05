/**
 * @file maximum-depth-of-binary-tree.ts
 * @description 
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 10^4].
 * - -100 <= Node.val <= 100
 * 
 * Examples:
 * 1. Input: root = [3,9,20,null,null,15,7]
 *    Output: 3
 * 2. Input: root = [1,null,2]
 *    Output: 2
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

export function maxDepth(root: TreeNode | null): number {
    // Your implementation goes here
    return 0;
}
