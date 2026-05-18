# Sliding Window

The Sliding Window pattern is used to perform a highly efficient, single-pass iteration over a linear data structure (arrays, strings, linked lists). Instead of using nested loops to re-calculate metrics over subsegments, it maintains a 'window' of elements using two pointers (left and right) and updates the metrics in $O(1)$ as the window slides.

---

## When to Use & Key Identification Signals
1. The problem involves linear structures (arrays, strings) and asks for a contiguous subarray or substring.
2. You are asked to find an optimal subarray/substring (longest, shortest, maximum, minimum) meeting a constraint.
3. The naive solution requires nested loops ($O(N^2)$), but you want a linear $O(N)$ solution.

---

## How to Consider & Analyze It
Watch for keywords like: 'contiguous subarray', 'longest substring', 'subsegment of size K'. If the problem constraint is monotonic (i.e. if a subarray matches a condition, any sub-segment within it also matches, or if it violates the condition, expanding it further will still violate it), Sliding Window is highly applicable.

---

## How to Plan & Solve (Step-by-Step)
1. **Initialize**: Set up a `left` pointer at `0`, a `right` pointer at `0`, a state container (like a map or sum), and a variable to track the optimal value.
2. **Expand**: Increment `right` to bring elements into the window. Update your state.
3. **Shrink**: While the window condition is violated (for variable-size) or the window exceeds size `K` (for fixed-size), increment `left` to shrink the window, and remove outgoing elements from the state.
4. **Update**: After validating the window, update your optimal metric (e.g. `maxLength = Math.max(maxLength, right - left + 1)`).

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Converts $O(N^2)$ nested loops into $O(N)$ linear time. | Only works on **contiguous** structures (fails on non-contiguous subsets). |
| Very low memory footprint (often $O(1)$ or $O(K)$ where $K$ is the character alphabet size). | Does not work if elements are not monotonic or if constraints are highly complex and non-local. |
| Standardized implementation blueprint that is easy to write. | Tricky pointer indexing; off-by-one bugs are common at boundaries. |

---

## Tips & Tricks (Trap Avoidance)
1. **Use Frequency Arrays**: For substrings, use a simple `Int32Array(128)` or `Map` to keep counts of characters in the current window. This enables $O(1)$ lookup for uniqueness or matching.
2. **Right is the Leader**: Think of the `right` pointer as the 'explorer' that always moves forward. The `left` pointer is the 'corrector' that only moves forward when constraints are broken.
3. **Dynamic vs Fixed**: Identify early if the window size is constant (e.g. size `K`) or dynamic. If dynamic, the `while` loop checks the constraint. If fixed, the `if` checks window length.

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Longest Substring Without Repeating Characters**
2. **Minimum Size Subarray Sum**
3. **Permutation in String**
