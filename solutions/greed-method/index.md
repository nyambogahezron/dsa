# Greedy Method

## Detailed Explanation
The Greedy Method builds up a solution piece-by-piece, always choosing the next piece that offers the most obvious and immediate benefit. In other words, it makes the locally optimal choice at each stage with the expectation that this will lead to a globally optimal solution.

---

## When to Use & Key Identification Signals
1. When the problem exhibits **Optimal Substructure** (an optimal solution contains optimal solutions to subproblems).
2. When the problem exhibits the **Greedy Choice Property** (global optimal solution can be reached by making local optimal decisions).
3. When approximation or extremely fast solutions are required for NP-hard problems.

---

## How to Consider & Analyze It
Check if sorting the input simplifies your choices. Ask: 'If I sort my options, does selecting the best one right now ever hurt my future moves?' If a local choice doesn't limit future options or lock you into a dead-end, a Greedy approach is highly likely.

---

## How to Plan & Solve (Step-by-Step)
1. **Define the Greedy Criterion**: Determine what parameter makes a choice 'optimal' right now (e.g. earliest end time, lowest cost, highest ratio).
2. **Sort or Heapify**: Order your elements based on this greedy criterion.
3. **Iterate & Accumulate**: Select the best choice at each step, verify it fits parameters, and aggregate the result.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Exceptionally fast; usually operates in $O(N)$ or $O(N \log N)$ time. | Hard to prove mathematically that a greedy algorithm is globally optimal. |
| Extremely low memory footprint; usually $O(1)$ or $O(N)$ space. | If greedy choice property fails, it results in highly incorrect answers. |
| Highly intuitive to write and implement. | Fails completely on problems requiring backtracking or looking ahead. |

---

## Tips & Tricks (Trap Avoidance)
1. **Sort First**: Most greedy algorithms begin by sorting inputs. If you suspect greedy, try sorting by different dimensions (start times, end times, sizes, weights).
2. **Look for Sub-arrays/Jump conditions**: If a problem involves moving across an array with step sizes, tracking the furthest reachable index is a classic greedy paradigm.
3. **Mathematical Proof**: If you can prove that making an alternative choice right now results in an equal or worse final outcome (the Exchange Argument), greedy is correct.

---

## Practice Problems (No Solution)
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Coin Change (Greedy Case)**
2. **Fractional Knapsack**
3. **Gas Station**
