/**
 * @file balanced-binary-tree.ts
 * @description Balanced Binary Tree (LeetCode #110)
 *
 * --- Problem Description ---
 * Given a binary tree, determine if it is height-balanced. A height-balanced binary
 * tree is a binary tree in which the depth of the two subtrees of every node never
 * differs by more than one.
 * Use post-order DFS: return -1 if a subtree is unbalanced, otherwise return its height.
 * This avoids redundant recomputation by combining height and balance check in one pass.
 *
 * --- Example ---
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: true
 *
 * Input: root = [1, 2, 2, 3, 3, null, null, 4, 4]
 * Output: false
 *
 * --- Constraints ---
 * - The number of nodes in the tree is in the range [0, 5000].
 * - -10^4 <= Node.val <= 10^4
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(H)
 *
 * --- Test Cases ---
 * 1. Balanced tree
 *    Input: [3,9,20,null,null,15,7]
 *    Expected: true
 * 2. Unbalanced tree
 *    Input: [1,2,2,3,3,null,null,4,4]
 *    Expected: false
 * 3. Empty tree
 *    Input: null
 *    Expected: true
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val; this.left = left; this.right = right;
    }
}

export function isBalanced(root: TreeNode | null): boolean {
    // TODO: Implement the solution for Balanced Binary Tree
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// console.log(isBalanced(root)); // Expected: true
