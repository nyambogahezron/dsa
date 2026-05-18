# Backtracking

Backtracking is an algorithmic paradigm that searches depth-first for a solution by building candidates incrementally and abandoning ('backtracking') a candidate as soon as it determines that the candidate cannot possibly lead to a valid solution. It is essentially an elegant, state-aware recursion with intelligent tree-pruning.

A bonding function is used to determine if the current candidate is valid or not. If it is valid, we continue to explore deeper; if it is invalid, we backtrack immediately without exploring further down that path.



---

## When to Use & Key Identification Signals
1. When asked to find *all* possible configurations or combinations that satisfy constraints.
2. When solving classic constraint-satisfaction problems (Sudoku, N-Queens, Map Coloring).
3. When the solution is represented as a path or sequence of decisions.

---

## How to Consider & Analyze It
Look for keywords like: 'Find all combinations...', 'Generate all permutations...', 'Solve the puzzle...'. The solution is typically built step-by-step, where at each step, you make a choice, recurse, and then undo the choice (backtrack) to try other alternatives.

---

## How to Plan & Solve (Step-by-Step)
The universal backtracking formula consists of:
1. **Identify Choices**: What decisions can you make at the current state?
2. **Determine Constraints**: Is the choice valid in the current state?
3. **Identify Base Case**: When do we stop and save a valid solution?
4. **State Management**: Modify state $\rightarrow$ Recurse $\rightarrow$ Revert (backtrack) state.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Finds all valid solutions, not just one. | Extremely expensive in terms of time; worst case is usually exponential ($O(2^N)$ or $O(N!)$). |
| Extremely structured and highly reusable recursive structure. | High call stack space depth; can lead to Stack Overflow if recursion depth is too high. |
| Prunes vast branches of search space early, saving massive compute. | Hard to debug because state transitions happen recursively. |

---

## Tips & Tricks (Trap Avoidance)
1. **Use a State-Tracker**: Always pass references or maintain primitive state arrays/sets (e.g. `visited` sets) to perform $O(1)$ constraint checking.
2. **Pruning is King**: The faster you identify an invalid state and return, the faster your backtracking will execute. Focus heavily on pruning conditions.
3. **In-place Mutation**: Mutate the input array or search container directly instead of copying, and revert it immediately after recursion to save memory allocation overhead.

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **N-Queens**
2. **Subsets II (Unique Subsets)**
3. **Word Search (Grid Backtracking)**
