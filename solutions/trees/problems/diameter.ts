/**
 * @file diameter.ts
 * @description Diameter of Binary Tree (LeetCode #543)
 *
 * --- Problem Description ---
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * The length is the number of edges between the nodes.
 * Use post-order DFS: at each node, diameter candidate = leftHeight + rightHeight.
 * Track the global maximum.
 *
 * --- Example ---
 * Input: root = [1, 2, 3, 4, 5]
 * Output: 3
 * Explanation: The path [4,2,1,3] or [5,2,1,3] has length 3.
 *
 * --- Constraints ---
 * - The number of nodes in the tree is in the range [1, 10^4].
 * - -100 <= Node.val <= 100
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(H)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [1,2,3,4,5]
 *    Expected: 3
 * 2. Single node
 *    Input: [1]
 *    Expected: 0
 * 3. Straight line (skewed)
 *    Input: [1,2,null,3]
 *    Expected: 2
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val; this.left = left; this.right = right;
    }
}

export function diameterOfBinaryTree(root: TreeNode | null): number {
    // TODO: Implement the solution for Diameter of Binary Tree
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
// console.log(diameterOfBinaryTree(root)); // Expected: 3
