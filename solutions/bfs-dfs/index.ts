/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for BFS/DFS on graphs and grids.
 */

// ── Common TreeNode type (shared with trees/) ──────────────────────────────
export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// ── Template 1: BFS on a Graph (Adjacency List) ───────────────────────────
/**
 * Level-order BFS. Visit each node once using a queue.
 * @param start   Starting node id
 * @param graph   Adjacency list: Map<node, neighbor[]>
 */
export function bfsGraph(start: number, graph: Map<number, number[]>): number[] {
    const visited = new Set<number>();
    const queue: number[] = [start];
    const order: number[] = [];

    visited.add(start);
    while (queue.length > 0) {
        const node = queue.shift()!;
        order.push(node);
        for (const neighbor of graph.get(node) ?? []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return order;
}

// ── Template 2: DFS on a Grid (4-directional) ─────────────────────────────
const DIRS = [[0, 1], [0, -1], [1, 0], [-1, 0]];

/**
 * DFS flood-fill on an m×n grid. Visits all reachable cells matching `target`.
 * @param grid   2D grid
 * @param r      Starting row
 * @param c      Starting column
 * @param target Character/value to match
 */
export function dfsGrid(grid: string[][], r: number, c: number, target: string): void {
    const rows = grid.length, cols = grid[0].length;
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    if (grid[r][c] !== target) return;

    grid[r][c] = '#'; // mark visited in-place
    for (const [dr, dc] of DIRS) {
        dfsGrid(grid, r + dr, c + dc, target);
    }
}

// ── Template 3: BFS Level-Order on a Binary Tree ──────────────────────────
/**
 * Returns nodes grouped by level.
 */
export function levelOrderBFS(root: TreeNode | null): number[][] {
    if (!root) return [];
    const result: number[][] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const level: number[] = [];
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}

// --- Example Usage ---
// const g = new Map([[1, [2,3]], [2, [4]], [3, []], [4, []]]);
// bfsGraph(1, g); // [1, 2, 3, 4]
