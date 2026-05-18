# Divide and Conquer

Divide and Conquer (D&C) breaks a problem down into two or more subproblems of the same or related type, solves these subproblems recursively, and then combines their solutions to solve the original problem.

---

## When to Use & Key Identification Signals
1. When a problem can be split into *independent* subproblems (unlike DP, where subproblems overlap).
2. When solving operations on sorted lists, arrays, tree structures, or geometric spaces.
3. When you can bypass linear scans to achieve logarithmic running times $O(\log N)$ or $O(N \log N)$.

---

## How to Consider & Analyze It
Look for midpoints, balanced splitting, or recursive partitions. If a problem can be solved by splitting the input array in half, solving both halves independently, and then doing some work to combine the two halves, D&C is the natural fit.

---

## How to Plan & Solve (Step-by-Step)
1. **Divide**: Split the problem into subproblems (usually at the midpoint `left + (right - left) / 2`).
2. **Conquer**: Solve the subproblems recursively. If subproblems are small enough (base case), solve directly.
3. **Combine**: Merge the results of subproblems into a unified solution for the original problem.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Drastically reduces time complexity (e.g. from $O(N^2)$ to $O(N \log N)$). | Relies heavily on recursion, creating call-stack overhead ($O(\log N)$ space). |
| Highly parallelizable because subproblems are completely independent. | Combining solutions can sometimes be highly complex and slow down the algorithm if not designed well. |
| Solves hard recursive problems elegantly (e.g. Fast Fourier Transform, Matrix Multiplication). | Harder to debug than standard iterative loops. |

---

## Tips & Tricks (Trap Avoidance)
1. **Avoid Stack Overflow**: Calculate the midpoint safely using `mid = left + Math.floor((right - left) / 2)` to avoid integer overflow.
2. **Master the Merge**: In many D&C algorithms (like Merge Sort or Closest Pair), the 'Divide' and 'Conquer' parts are trivial. The entire algorithmic power and complexity lies in the **Combine** (merge) step. Design the merge step carefully.
3. **Master the Partition**: In Quickselect or Quicksort, the entire power lies in the **Divide** step (partitioning around a pivot), while the 'Combine' step is trivial.

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Merge Sort**
2. **Kth Largest Element (Quickselect)**
3. **Closest Pair of Points**
