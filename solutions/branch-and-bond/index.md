# Branch and Bound

## Detailed Explanation
Branch and Bound (B&B) is an algorithm design paradigm for solving combinatorial optimization problems. It explores the search space systematically using a tree structure (branching) but prunes massive parts of the tree by calculating bounds (bounding) on the optimal solution. It is similar to backtracking, but uses a global heuristic value to prune non-optimal branches in optimization problems.

---

## When to Use & Key Identification Signals
1. Discrete optimization problems where you need to find the *absolute optimal* solution (not just any valid solution).
2. Hard NP-complete optimization problems (0/1 Knapsack, TSP, Job Scheduling) when input sizes are moderate.
3. When you need a guaranteed mathematical proof of optimality, which greedy methods cannot provide.

---

## How to Consider & Analyze It
B&B is generally considered when you are dealing with optimization problems (minimizing cost, maximizing profit) that would otherwise require checking $2^N$ or $N!$ states via brute force. By calculating a 'bound' (e.g. using a relaxed greedy estimate like fractional knapsack), you can skip paths that cannot beat your current best answer.

---

## How to Plan & Solve (Step-by-Step)
1. **Branching strategy**: Decide how to partition the problem (usually BFS or Best-First Search with a Priority Queue).
2. **Bounding function**: Define a quick algorithm to calculate the absolute best possible outcome for any node's children (e.g., fractional knapsack bound).
3. **Pruning strategy**: If a child's bound is worse than the current global best solution, discard (prune) that node immediately.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Guarantees finding the global optimal solution. | In the worst case, it can still search all states ($O(2^N)$), causing high time complexity. |
| Prunes vast search paths, executing significantly faster than pure brute force. | Implementing the bounding heuristic is highly complex and problem-specific. |
| Can be terminated early to give an approximate solution with a known error bound. | Storing active branch nodes in memory (especially BFS/Best-First) can lead to high memory consumption ($O(2^N)$ space). |

---

## Tips & Tricks (Trap Avoidance)
1. **Best-First Search (Least Cost Search)**: Use a Priority Queue to always expand the node with the most promising bound first. This finds the optimal solution much faster than standard BFS/DFS.
2. **Initialize with Greedy**: Run a fast Greedy algorithm first to establish a solid 'global best' bound before starting the B&B search. This enables heavy early pruning.
3. **Relax the Problem**: To calculate bounds, 'relax' a constraint. For example, in 0/1 Knapsack, relax the rule that items cannot be split (giving the fractional knapsack bound).

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **0/1 Knapsack (Branch and Bound)**
2. **Travelling Salesperson Problem (Branch & Bound)**
3. **Job Assignment Problem**
