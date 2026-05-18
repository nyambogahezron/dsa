# Two Heaps

The Two Heaps pattern uses a Max-Heap to store the smaller half of elements and a Min-Heap to store the larger half of elements. This enables highly efficient dynamic partitioning, allowing you to query the exact median or boundary value in $O(1)$ time while inserting new elements in $O(\log N)$.

---

## When to Use & Key Identification Signals
1. Problems requiring you to keep track of the median of a streaming dataset.
2. When you need to partition numbers into two parts and access the largest of one part and the smallest of the other.
3. Dynamic priority problems like scheduling projects based on capital thresholds.

---

## How to Consider & Analyze It
If the problem requires finding the middle element (median) in a highly dynamic, constantly changing array of numbers, Two Heaps is almost certainly the optimal solution. Sorting the list on every insertion would take $O(N \log N)$, whereas heaps do it in $O(\log N)$.

---

## How to Plan & Solve (Step-by-Step)
1. **Initialize**: Define a `maxHeap` (holds smaller half) and a `minHeap` (holds larger half).
2. **Insert**: Compare the new value. If it's smaller than the top of `maxHeap`, push to `maxHeap`. Otherwise, push to `minHeap`.
3. **Balance**: Ensure the size difference between the two heaps is at most 1: `|maxHeap.size - minHeap.size| <= 1`. If not, pop the top element from the larger heap and push it into the smaller one.
4. **Median**: If the heaps are of equal size, the median is the average of their tops. If one is larger, its top element is the median.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Ultra-fast median retrieval ($O(1)$ time). | Implementing min/max heaps from scratch in TypeScript requires significant boilerplate code. |
| Insertion is highly efficient ($O(\log N)$). | Space complexity is $O(N)$ because all streaming elements are stored. |
| Very stable, mathematically clean approach to dynamic sorting. | Does not easily support range queries or arbitrary index edits (unlike Segment Trees). |

---

## Tips & Tricks (Trap Avoidance)
1. **Design a Helper Class**: Since JavaScript/TypeScript does not have a native Priority Queue or Heap in its standard library, build a generic `Heap` class or use a standard array-backed binary tree implementation.
2. **Balance is Critical**: Always perform heap balancing immediately after every insert operation to ensure your median calculation remains valid.
3. **Max-Heap is Left, Min-Heap is Right**: Think of the max-heap as the left-side bucket containing the smaller half of sorted numbers, and the min-heap as the right-side bucket containing the larger half. The 'median' sits right at the border of their tops!

---

## Practice Problems 
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Find Median from Data Stream**
2. **Sliding Window Median**
3. **IPO (Maximize Capital)**
