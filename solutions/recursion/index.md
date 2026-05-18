# Recursion

Recursion is a problem-solving strategy where a function solves a problem by calling itself on smaller subproblems until it reaches a base case. It is a core pillar behind many paradigms including divide and conquer, backtracking, and dynamic programming.

---

## When to Use & Key Identification Signals
1. The problem can be naturally decomposed into smaller subproblems of the same form.
2. Tree-like exploration is needed (choices, branches, include/exclude decisions).
3. The iterative solution is possible but significantly less readable than recursive form.

---

## How to Consider & Analyze It
Always identify two components first: the base case (termination) and the recurrence relation (how the function reduces the problem size). If either is ambiguous, recursion will likely fail.

---

## How to Plan & Solve (Step-by-Step)
1. **Define Function Meaning**: Clearly state what `f(x)` returns.
2. **Write Base Cases**: Cover smallest inputs and invalid boundaries.
3. **Reduce Problem Size**: Make recursive calls on strictly smaller inputs.
4. **Combine Results**: Build the final answer from recursive returns.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Elegant for trees, divide-and-conquer, and DFS style traversal. | Risk of stack overflow for deep recursion. |
| Mirrors mathematical recurrence directly. | Can be slower due to call overhead if not optimized. |
| Simplifies reasoning for branching problems. | Easy to introduce infinite recursion if base cases are wrong. |

---

## Tips & Tricks (Trap Avoidance)
1. **Progress Guarantee**: Every recursive call must move closer to a base case.
2. **Trace Small Inputs**: Dry-run with tiny examples to validate call order.
3. **Memoize Overlap**: If subproblems repeat, cache results (DP memoization).

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Factorial**
2. **Fibonacci (Recursive + Memoization)**
3. **Generate Permutations**
