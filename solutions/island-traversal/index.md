# Island Traversal

Island Traversal represents matrix-grid searches using standard Graph DFS/BFS algorithms. It treats a multi-dimensional array as an adjacency grid, where cells (coordinates) represent nodes and adjacent cells (up, down, left, right) represent edges. It traverses and processes connected components while marking visited cells to avoid infinite cycles.

---

## When to Use & Key Identification Signals
1. Grid-based problems involving grids of land ('1') and water ('0').
2. Flooding, pathfinding, or connected component counting in a 2D matrix.
3. Finding shortest path or cell distance in unweighted grids (use BFS).

---

## How to Consider & Analyze It
Look for input matrices, 2D arrays, and keywords like: 'horizontal and vertical connections', 'number of islands', 'connected regions'. If you need to explore all neighboring coordinates to calculate a cluster size, use Island Traversal.

---

## How to Plan & Solve (Step-by-Step)
1. **Scan Matrix**: Loop through every cell in the 2D grid using a nested `for` loop.
2. **Trigger Traversal**: When you hit a target cell (e.g. land '1') that has not been visited, trigger a DFS/BFS traversal.
3. **Explore Neighbors (DFS/BFS)**:
   * **Base Case**: If coordinates are out of bounds, or if the cell is water/visited, return.
   * **Mark Visited**: Set `grid[r][c] = '0'` (in-place sinking) or use a `visited` boolean grid.
   * **Recurse**: Call DFS/BFS recursively on all 4 directions (up, down, left, right).

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Guaranteed to traverse and identify all connected components in a grid. | Recursive DFS stack depth can equal grid size ($O(R \cdot C)$ space), which risks stack overflow on massive grids. |
| In-place sinking (mutating grid to '0') eliminates the need for $O(R \cdot C)$ visited grids. | Modifying the input grid directly may not always be allowed or thread-safe. |
| BFS guarantees finding the shortest path in unweighted cell grids. | Code involves high boilerplate for direction vectors and boundary checks. |

---

## Tips & Tricks (Trap Avoidance)
1. **Use Direction Vectors**: Instead of writing 4 separate recursive calls, define a `dirs` array: `const dirs = [[-1,0],[1,0],[0,-1],[0,1]]` and loop through it. This keeps your code incredibly clean!
2. **In-place Sinking**: To avoid memory allocation, 'sink' the island cells you have visited by changing their values from `'1'` to `'0'` (or a dummy character like `'#'`) immediately upon visiting.
3. **Queue for BFS**: If finding shortest paths (like in Word Ladder or Maze runner), always use BFS with a Queue instead of DFS. DFS is not optimal for shortest path finding.

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Max Area of Island**
2. **Flood Fill**
3. **Surrounding Regions (Capture Board)**
