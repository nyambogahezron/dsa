# Cyclic Sort

Cyclic Sort is a unique sorting pattern specifically designed for problems where the input array contains numbers within a closed, contiguous range (e.g. $[1, N]$ or $[0, N]$). It sorts the array in-place in $O(N)$ time by swapping numbers to their 'correct' index (value `x` should reside at index `x - 1`).

---

## When to Use & Key Identification Signals
1. When the input array contains numbers in a strict range from $1$ to $N$ (or $0$ to $N$).
2. When asked to find a missing, duplicate, or first incorrect positive integer in that range.
3. When you have strict $O(N)$ time constraints and must solve the problem in $O(1)$ auxiliary space.

---

## How to Consider & Analyze It
Look for keywords like: 'contains numbers from 1 to N', 'find the missing number', 'in-place in O(N)'. If the values themselves double as index references, you have found a perfect match for Cyclic Sort.

---

## How to Plan & Solve (Step-by-Step)
1. **Initialize**: Set a index pointer `i` at `0`.
2. **Cycle through Array**: While `i < arr.length`:
   * Calculate the `correctIndex` for the current number `nums[i]`. (e.g., `nums[i] - 1`).
   * **Swap**: If `nums[i]` is in bounds and does not match the element at its correct index (`nums[i] !== nums[correctIndex]`), swap them. Do not increment `i`.
   * **Progress**: If `nums[i]` is already in its correct spot (or out of bounds), increment `i`.
3. **Scan**: Loop through the sorted array; the first index `j` where `nums[j] !== j + 1` reveals the missing/duplicate value.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Achieves $O(N)$ time sorting (bypassing the $O(N \log N)$ comparison bound). | Only works when values are bounded in a strict range $[0, N]$ or similar. |
| Operates strictly in $O(1)$ space, making it highly memory-optimal. | Mutates the original array, which may not be acceptable in all software environments. |
| Simplicity: no complicated tree or heap setups are needed. | Boundary checking requires precise attention; index out of bounds errors are common. |

---

## Tips & Tricks (Trap Avoidance)
1. **Value as Index**: Think of the value in the cell as an instructions card pointing you to another cell in the array! If `nums[i]` is at index `i`, its 'home' is index `nums[i] - 1`. Send it home!
2. **Don't Increment on Swap**: When you swap `nums[i]` with the element at `correctIndex`, the new element placed at `i` is still unsorted. You must process it again, so **do not** increment `i`.
3. **Handle Duplicates**: If `nums[i] === nums[correctIndex]`, stop swapping to prevent an infinite loop! This duplicate is exactly the value you are looking for.

---

## Practice Problems 
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Missing Number**
2. **Find All Duplicates in an Array**
3. **First Missing Positive**
