# BFS / DFS

## Overview

**BFS** (Breadth-First Search) and **DFS** (Depth-First Search) are the two fundamental graph/tree traversal strategies.

| | BFS | DFS |
|---|---|---|
| Data Structure | Queue | Stack / Recursion |
| Order | Level by level | Deep branch first |
| Best for | Shortest path, level-order | Cycle detection, path finding, flood fill |
| Space | O(W) — max width | O(H) — max height / depth |

---

## Core Templates

### BFS (Queue)
```typescript
const queue = [start];
const visited = new Set([start]);
while (queue.length) {
    const node = queue.shift()!;
    for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
        }
    }
}
```

### DFS Grid (Recursion)
```typescript
const DIRS = [[0,1],[0,-1],[1,0],[-1,0]];
function dfs(r, c) {
    if (outOfBounds || visited) return;
    mark visited;
    for (const [dr, dc] of DIRS) dfs(r+dr, c+dc);
}
```

### BFS Level-Order (Tree)
```typescript
while (queue.length) {
    const levelSize = queue.length;     // capture current level count
    for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
```

---

## Problems in This Section

| # | Problem | Key Idea | File |
|---|---|---|---|
| 994 | Rotting Oranges | Multi-source BFS | `problems/rotting-oranges.ts` |
| 102 | Binary Tree Level Order Traversal | BFS with level capture | `problems/level-order-traversal.ts` |
| 133 | Clone Graph | BFS + HashMap old→new | `problems/clone-graph.ts` |
| 200 | Number of Islands | → see `island-traversal/` | — |

---

## Complexity

| Traversal | Time | Space |
|---|---|---|
| BFS/DFS on graph | O(V + E) | O(V) |
| BFS/DFS on grid (N×M) | O(N*M) | O(N*M) |
| Tree level-order BFS | O(N) | O(W) max level width |
