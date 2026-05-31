# Binary Search

## Overview

**Binary Search** eliminates half the search space each iteration, reducing O(N) linear scans to **O(log N)**. It works on any **monotonic** (sorted/ordered) space — not just arrays, but also answer spaces.

---

## Core Templates

### Template 1 — Classic (exact match)
```typescript
while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
}
```

### Template 2 — Lower Bound (first true)
Find the minimum `x` satisfying a condition (`false...false → true...true`):
```typescript
while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (condition(mid)) hi = mid;   // might be answer, narrow right
    else lo = mid + 1;              // not answer, move right
}
// lo == hi == answer
```

### Template 3 — Upper Bound (last true)
Find the maximum `x` satisfying a condition (`true...true → false...false`):
```typescript
while (lo < hi) {
    const mid = lo + Math.floor((hi - lo + 1) / 2); // right-biased
    if (condition(mid)) lo = mid;   // might be answer, narrow left
    else hi = mid - 1;              // not answer, move left
}
```

---

## When to Use

| Signal | Pattern |
|---|---|
| Sorted array, find target | Classic binary search |
| "Find minimum valid X" | Lower bound on answer space |
| "Find maximum valid X" | Upper bound on answer space |
| Array rotated but still sorted | Modified binary search |

---

## Problems in This Section

| # | Problem | Key Idea | File |
|---|---|---|---|
| 33 | Search in Rotated Sorted Array | Identify sorted half | `problems/search-rotated-array.ts` |
| 153 | Find Minimum in Rotated Sorted Array | Min is the pivot | `problems/find-min-rotated.ts` |
| 875 | Koko Eating Bananas | Binary search on speed | `problems/koko-eating-bananas.ts` |
| 1011 | Capacity To Ship Packages | Binary search on capacity | `problems/ship-packages.ts` |

---

## Complexity

| Operation | Time | Space |
|---|---|---|
| Classic binary search | O(log N) | O(1) |
| Answer-space binary search | O(log(max) * check) | O(1) |
