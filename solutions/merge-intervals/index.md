# Merge Intervals

The Merge Intervals pattern deals with overlapping interval ranges (usually representing time, coordinates, or schedules). It relies on sorting intervals by their start points and then iterating through them to merge overlapping boundaries into consolidated segments.

---

## When to Use & Key Identification Signals
1. The problem involves intervals, schedules, calendar meetings, or overlapping ranges.
2. You are asked to merge overlapping segments, insert new intervals, or find minimum scheduling containers.
3. Finding total coverage length or intersection points of multiple intervals.

---

## How to Consider & Analyze It
Ask: 'If I sort my intervals by start time, do adjacent segments tell me if they overlap?' If `interval_A.end >= interval_B.start`, they overlap. Sorting reduces an $O(N^2)$ intersection search into a single linear $O(N)$ pass after an $O(N \log N)$ sort.

---

## How to Plan & Solve (Step-by-Step)
1. **Sort**: Sort the intervals based on start time ascending `arr.sort((a, b) => a.start - b.start)`.
2. **Initialize**: Maintain a list of `merged` intervals, starting with the first sorted interval.
3. **Iterate & Merge**: Iterate from the second interval. Compare `currentInterval.end` with `nextInterval.start`:
   * **Overlapping**: If `nextInterval.start <= currentInterval.end`, merge by updating `currentInterval.end = Math.max(currentInterval.end, nextInterval.end)`.
   * **Non-overlapping**: Append `nextInterval` as the new active interval in the `merged` list.

---

## Pros and Cons
| Pros | Cons |
| :--- | :--- |
| Reduces complex 2D boundary matching to a simple linear scan after sorting. | Sorting takes $O(N \log N)$ time, which is the bottleneck. |
| In-place merging is highly space-efficient. | Edge cases with identical start times or sub-segments require absolute care. |
| Extremely logical and highly transferable to calendar/booking systems. | Fails if intervals are multi-dimensional (e.g., 2D rectangles) which require segment trees. |

---

## Tips & Tricks (Trap Avoidance)
1. **Sort is Mandatory**: Never skip the sorting step. Sorting by start time is what guarantees that you only need to look at the *last merged interval* to make overlapping decisions.
2. **Math.max for Endpoints**: When merging overlapping intervals, the new end point is `Math.max(current.end, next.end)`. Do not just copy `next.end`, because `current` might completely enclose `next`!
3. **Graph Interpretation**: Intervals can be modeled as nodes in a graph. An overlap is an edge. Merging intervals is equivalent to finding the Connected Components in this interval graph.

---

## Practice Problems 
Check out the `problems/` directory in this folder to implement these challenge problems:
1. **Interval List Intersections**
2. **Non-overlapping Intervals**
3. **Meeting Rooms II**
