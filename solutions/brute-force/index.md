# Brute Force

## Detailed Explanation
Brute Force (or Exhaustive Search) is a straightforward approach to solving a problem, relying on sheer computing power to try all possible candidates for the solution. It doesn't use any sophisticated optimization or shortcut heuristics; it simply guarantees correctness by checking every single possibility in the search space.

---

## When to Use & Key Identification Signals
1. When the input size (N) is extremely small, meaning the exponential or polynomial time complexity is acceptable.
2. As a baseline or benchmark implementation to verify the correctness of more optimized algorithms.
3. When correctness is paramount and the problem space is small enough that any optimization overhead is unnecessary.

---

## How to Consider & Analyze It
Ask yourself: 'If I had infinite computer time, what is the most straightforward way to solve this?' Look for combinations, nested iterations, or state exploration. If you are struggling to find an optimized pattern, write the brute force logic first to understand the problem constraints and correctness.

---

## How to Plan & Solve (Step-by-Step)
1. **Identify the Search Space**: Define what a valid candidate looks like.
2. **Iterate Exhaustively**: Use nested loops, recursions, or permutations to generate all candidates.
3. **Check Constraints**: Verify each candidate against the problem criteria.
4. **Select Best**: Track the optimum value (max, min) or first valid candidate found.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Guaranteed to find the correct solution if it exists. | Horribly inefficient for larger inputs ($O(N^2)$, $O(2^N)$, or $O(N!)$). |
| Extremely simple to design, write, and debug. | Scales poorly; small increases in $N$ can cause runtime crashes or timeouts. |
| Requires zero complex mathematical properties. | Does not demonstrate algorithmic efficiency or design principles. |

---

## Tips & Tricks (Trap Avoidance)
1. **Set Up a Base Case**: When using loops, make sure your bounds are perfectly defined to avoid off-by-one errors.
2. **Use it for Testing**: Write a simple automated script to compare your optimized algorithm against the brute-force results on random small test cases (Stress Testing).
3. **Prune early (if possible)**: Even in brute force, a simple break or return statement when an impossible state is reached can speed up the execution dramatically.

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Two Sum (Brute Force)**
2. **Naive Substring Search**
3. **Maximum Subarray (Brute Force)**
