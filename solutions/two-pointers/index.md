# Two Pointers

The Two Pointers pattern utilizes two reference indexes to traverse a linear data structure simultaneously. It is highly optimized for sorted arrays or linked lists, enabling searches, comparisons, and in-place modifications to run in $O(N)$ time with $O(1)$ space rather than nested loops.

---

## When to Use & Key Identification Signals
1. When operating on a sorted array or list where you need to find pairs, triplets, or reversals.
2. When modifying an array in-place (e.g. removing duplicates, grouping elements).
3. When calculating symmetric properties (like Palindromes) or volumes (like Container Water).

---

## How to Consider & Analyze It
If the input array is sorted, or if you can sort it without violating problem requirements, Two Pointers is highly likely. Ask: 'Can I make a decision to shrink my search space from both ends based on whether the sum/value is too large or small?' If yes, use Two Pointers.

---

## How to Plan & Solve (Step-by-Step)
**For Opposite Ends Pattern**:
1. **Initialize**: Place `left` pointer at `0` and `right` pointer at `arr.length - 1`.
2. **Iterate**: Write a `while (left < right)` loop.
3. **Move Pointers**: Compare the sum/metric. If too small, increment `left` to get a larger value. If too large, decrement `right` to get a smaller value.
**For Same Direction Pattern (Deduplication)**:
1. Place a `write` pointer at `0` and a `read` pointer at `0`.
2. Loop `read` to the end. If `arr[read]` matches condition, copy it to `arr[write]` and increment `write`.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Operates in $O(N)$ linear time complexity. | Mostly requires the input array to be **sorted** (if not, sorting takes $O(N \log N)$). |
| Space complexity is $O(1)$ (no extra tables or memory allocations). | Cannot handle problems where you need to check elements at arbitrary indices. |
| In-place modifications reduce memory allocation churn. | Edge cases like arrays of size $< 2$ or duplicates require careful tracking. |

---

## Tips & Tricks (Trap Avoidance)
1. **Avoid Duplicates in Triplets**: When solving 3-Sum or 4-Sum, after finding a match and moving pointers, remember to write a loop to skip adjacent duplicate values to ensure unique triplets.
2. **Sorted Array is a Cheat Code**: If you are trying to find two elements with a specific criteria, always sort first (takes $O(N \log N)$). It makes Two Pointers immediately possible.
3. **Inward Convergence**: The opposite-pointer approach works because sorting creates monotonic values. Increasing `left` increases the sum; decreasing `right` decreases it. Use this mathematical proof.

---

## Practice Problems 
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **3Sum**
2. **Container With Most Water**
3. **Remove Duplicates from Sorted Array**
