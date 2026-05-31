/**
 * @file max-depth.ts
 * @description Maximum Depth of Binary Tree (LeetCode #104)
 *
 * --- Problem Description ---
 * Given the root of a binary tree, return its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root
 * node down to the farthest leaf node.
 * Use post-order DFS: depth = 1 + max(left depth, right depth).
 *
 * --- Example ---
 * Input: root = [3, 9, 20, null, null, 15, 7]
 * Output: 3
 *
 * --- Constraints ---
 * - The number of nodes is in the range [0, 10^4].
 * - -100 <= Node.val <= 100
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(H) where H is the height of the tree
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [3,9,20,null,null,15,7]
 *    Expected: 3
 * 2. Single node
 *    Input: [1]
 *    Expected: 1
 * 3. Empty tree
 *    Input: null
 *    Expected: 0
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val; this.left = left; this.right = right;
    }
}

export function maxDepth(root: TreeNode | null): number {
    // TODO: Implement the solution for Maximum Depth of Binary Tree
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// console.log(maxDepth(root)); // Expected: 3
