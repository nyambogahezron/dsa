# Trees

## Overview

Most binary tree problems are solved with **DFS** (pre-order, in-order, or post-order recursion) or **BFS** (level-order traversal). The key insight is choosing the right traversal direction for the problem.

---

## Core Templates

### Post-Order DFS (bottom-up) — most common
Solve for children first, then combine at parent:
```typescript
function dfs(node): Info {
    if (!node) return baseCase;
    const left  = dfs(node.left);
    const right = dfs(node.right);
    // update global answer using left + right + node.val
    return combineForParent(left, right, node.val);
}
```
Used for: **height, diameter, LCA, max path sum**.

### Pre-Order DFS (top-down)
Pass information from parent to children:
```typescript
function dfs(node, accumulated): void {
    if (!node) return;
    accumulated = update(accumulated, node.val);
    if (isLeaf(node)) { result.push(accumulated); return; }
    dfs(node.left, accumulated);
    dfs(node.right, accumulated);
}
```
Used for: **root-to-leaf paths, path prefix sums**.

---

## Problems in This Section

| # | Problem | Pattern | File |
|---|---|---|---|
| 104 | Maximum Depth of Binary Tree | Post-order DFS | `problems/max-depth.ts` |
| 236 | Lowest Common Ancestor | Post-order DFS | `problems/lowest-common-ancestor.ts` |
| 543 | Diameter of Binary Tree | Post-order DFS, global max | `problems/diameter.ts` |
| 124 | Binary Tree Maximum Path Sum | Post-order DFS, global max | `problems/max-path-sum.ts` |

---

## Complexity

| Operation | Time | Space |
|---|---|---|
| DFS traversal | O(N) | O(H) — stack depth |
| BFS traversal | O(N) | O(W) — max width |
| Balanced tree height | O(log N) | — |
| Skewed tree height | O(N) | — |
