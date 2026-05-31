/**
 * @file max-path-sum.ts
 * @description Binary Tree Maximum Path Sum (LeetCode #124)
 *
 * --- Problem Description ---
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes
 * has an edge connecting them. A node can only appear once in the path, and the
 * path does not need to pass through the root. The path sum is the sum of the
 * node's values in the path. Given the root of a binary tree, return the maximum
 * path sum of any non-empty path.
 * Use post-order DFS: at each node, the gain from a subtree = max(0, subtreeMax).
 * The path candidate through current node = node.val + leftGain + rightGain.
 *
 * --- Example ---
 * Input: root = [-10, 9, 20, null, null, 15, 7]
 * Output: 42
 * Explanation: The path is 15 → 20 → 7 with sum 42.
 *
 * --- Constraints ---
 * - The number of nodes in the tree is in the range [1, 3 * 10^4].
 * - -1000 <= Node.val <= 1000
 *
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(H)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: [-10,9,20,null,null,15,7]
 *    Expected: 42
 * 2. All negative
 *    Input: [-3]
 *    Expected: -3
 * 3. Single positive
 *    Input: [1, 2, 3]
 *    Expected: 6
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val; this.left = left; this.right = right;
    }
}

export function maxPathSum(root: TreeNode | null): number {
    // TODO: Implement the solution for Binary Tree Maximum Path Sum
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// const root = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// console.log(maxPathSum(root)); // Expected: 42
