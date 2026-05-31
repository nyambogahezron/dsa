/**
 * @file lowest-common-ancestor.ts
 * @description Lowest Common Ancestor of a Binary Tree (LeetCode #236)
 *
 * --- Problem Description ---
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes p and q.
 * The LCA of two nodes p and q in a tree is defined as the lowest node that has both
 * p and q as descendants (a node can be a descendant of itself).
 * Use post-order DFS: if current node is p or q, return it; otherwise return whichever
 * subtree returns non-null (both non-null means current is LCA).
 *
 * --- Example ---
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 *
 * --- Constraints ---
 * - The number of nodes is in the range [2, 10^5].
 * - -10^9 <= Node.val <= 10^9
 * - All Node.val are unique.
 * - p != q and both p and q exist in the tree.
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(H)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: root=[3,5,1,...], p=5, q=1
 *    Expected: Node with val=3
 * 2. One is ancestor of the other
 *    Input: root=[3,5,1,...], p=5, q=4
 *    Expected: Node with val=5
 * 3. Adjacent nodes
 *    Input: root=[1,2], p=1, q=2
 *    Expected: Node with val=1
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val; this.left = left; this.right = right;
    }
}

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    // TODO: Implement the solution for Lowest Common Ancestor
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// Build tree and call lowestCommonAncestor(root, p, q)
