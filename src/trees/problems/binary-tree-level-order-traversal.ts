/**
 * @file binary-tree-level-order-traversal.ts
 * @description 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 2000].
 * - -1000 <= Node.val <= 1000
 * 
 * Examples:
 * 1. Input: root = [3,9,20,null,null,15,7]
 *    Output: [[3],[9,20],[15,7]]
 * 2. Input: root = [1]
 *    Output: [[1]]
 * 3. Input: root = []
 *    Output: []
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

export function levelOrder(root: TreeNode | null): number[][] {
    // Your implementation goes here
    return [];
}
