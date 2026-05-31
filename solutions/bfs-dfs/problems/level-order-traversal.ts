/**
 * @file level-order-traversal.ts
 * @description Binary Tree Level Order Traversal (LeetCode #102)
 *
 * --- Problem Description ---
 * Given the root of a binary tree, return the level order traversal of its nodes'
 * values (i.e., from left to right, level by level).
 * Use BFS with a queue; at each step record the current level size to group nodes.
 *
 * --- Example ---
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: [[3], [9, 20], [15, 7]]
 *
 * --- Constraints ---
 * - The number of nodes in the tree is in the range [0, 2000].
 * - -1000 <= Node.val <= 1000
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(W) — maximum width of the tree
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [3,9,20,null,null,15,7]
 *    Expected: [[3],[9,20],[15,7]]
 * 2. Single node
 *    Input: [1]
 *    Expected: [[1]]
 * 3. Empty tree
 *    Input: null
 *    Expected: []
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val; this.left = left; this.right = right;
    }
}

export function levelOrder(root: TreeNode | null): number[][] {
    // TODO: Implement the solution for Binary Tree Level Order Traversal
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// console.log(levelOrder(root)); // Expected: [[3],[9,20],[15,7]]
