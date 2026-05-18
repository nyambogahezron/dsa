# Fast and Slow Pointers

The Fast and Slow Pointers pattern (also known as Floyd's Cycle Detection or Tortoise and Hare) uses two pointers that traverse a linked list or sequence at different speeds (usually one at $1x$ speed and the other at $2x$ speed). It is incredibly elegant for identifying structural cycles or midpoints without allocating memory.

---

## When to Use & Key Identification Signals
1. Identifying cycles in linked lists, arrays, cyclic numbers, or state graphs.
2. Finding the middle node of a linked list in a single traversal.
3. Checking if a linked list is a Palindrome, or finding loop lengths.

---

## How to Consider & Analyze It
Look for linked list questions, or problems where a series of operations loop back into previously generated states. If a naive solution requires checking a `Set` of visited elements ($O(N)$ space), Fast & Slow pointer can solve it in $O(1)$ space.

---

## How to Plan & Solve (Step-by-Step)
1. **Initialize**: Place `slow` and `fast` pointers at the start (`head`).
2. **Traverse**: Run a loop while `fast !== null && fast.next !== null` (to prevent Null Pointer Errors).
3. **Progress**: Advance `slow` by 1 step (`slow = slow.next`) and `fast` by 2 steps (`fast = fast.next.next`).
4. **Analyze Cycle**: If `slow === fast`, a cycle exists. To find cycle start, reset `slow` to `head` and advance both pointers at 1x speed until they meet.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Solves cycle detection with $O(1)$ space (no extra visited set/table). | Only works on linear, pointer-linked, or sequence-generating structures. |
| Finds list midpoint in a single pass (avoiding a double pass to count length). | Can result in Infinite Loops if pointer steps and boundaries are not written correctly. |
| Mathematically guaranteed to converge if a cycle exists. | Code is highly specific; not easily generalized to non-cyclic structures. |

---

## Tips & Tricks (Trap Avoidance)
1. **Guard Against Nulls**: The number one bug in Fast & Slow pointers is accessing `.next` on a `null` node. Always check: `while (fast !== null && fast.next !== null)`.
2. **Cycle Start Node Math**: When `slow` and `fast` meet in a cycle of length $C$, the distance from the `head` to the cycle start node is mathematically identical to the distance from the meeting point to the cycle start node (modulo $C$). Reset `slow` to `head` and move both at $1x$ speed; they will meet exactly at the cycle entrance!
3. **Happy Number Sequence**: Think of numbers as nodes! If you compute the sum of squares of digits recursively, it either lands at 1 or loops forever in a cycle. Apply Floyd's Cycle Detection here!

---

## Practice Problems 
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Linked List Cycle II (Entrance Node)**
2. **Palindrome Linked List**
3. **Happy Number**
