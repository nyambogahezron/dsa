# Dynamic Programming

Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler, overlapping subproblems. It solves each subproblem exactly once and stores its answer in a table (memoization or tabulation) to prevent redundant recalculations. It combines the speed of greedy approaches with the exhaustiveness of search.

---

## When to Use & Key Identification Signals
1. When the problem exhibits **Overlapping Subproblems** (solving the same subproblem multiple times recursively).
2. When the problem exhibits **Optimal Substructure** (global optimum constructed from local subproblem optimums).
3. Problems asking for: 'Number of ways...', 'Maximum profit...', 'Minimum cost...', or 'Is it possible to...'.

---

## How to Consider & Analyze It
Check if you can write a recursive relation where the state depends only on previous decisions. If your recursive calls contain identical parameters (e.g. `solve(i, j)` is called multiple times), you have overlapping subproblems, making DP the optimal choice.

---

## How to Plan & Solve (Step-by-Step)
1. **Define the State**: Determine the parameters that uniquely identify a subproblem (e.g., `dp[i]` or `dp[i][w]`).
2. **State Transition Relation**: Formulate the mathematical recurrence relation connecting the current state to previous states.
3. **Define Base Cases**: Identify states with known, constant values (e.g. `dp[0] = 0`).
4. **Choose Approach**:
   * **Top-down (Memoization)**: Add a map/hash array to check if a recursive state is already solved.
   * **Bottom-up (Tabulation)**: Initialize a table and write nested loops to populate it from the base cases up.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Converts exponential time $O(2^N)$ into linear $O(N)$ or polynomial $O(N^2)$ time. | High spatial complexity ($O(N)$ or $O(N^2)$) to store values in the DP table. |
| Highly structured, reliable, and mathematically rigorous. | Hardest technique to identify, conceptualize, and formulate transitions. |
| Once transition is found, code is usually short and elegant. | Debugging index boundaries and off-by-one errors is highly frustrating. |

---

## Tips & Tricks (Trap Avoidance)
1. **State Reduction (Space Optimization)**: Notice if your current row in a 2D table `dp[i][j]` only depends on the previous row `dp[i-1][k]`. If so, you can optimize the space from $O(N^2)$ to $O(N)$ by keeping only two rows (or one row traversing backwards).
2. **Start with Recursion**: If stuck, write the exhaustive backtracking solution first. Then, notice which parameters change in the recursive call, cache them, and boom—you have Top-Down DP!
3. **Categorize the DP**: Learn classic DP categories: Knapsack, LIS (Longest Increasing Subsequence), Grid Pathfinding, Interval DP, String Alignment (LCS/Edit Distance).

---

## Practice Problems 
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Longest Common Subsequence**
2. **0/1 Knapsack (Dynamic Programming)**
3. **Edit Distance (Levenshtein Distance)**
