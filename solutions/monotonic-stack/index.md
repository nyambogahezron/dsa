# Monotonic Stack

## Overview

A **Monotonic Stack** is a stack that maintains elements in strictly increasing or decreasing order. It processes each element in O(1) amortized time — each element is pushed and popped at most once — giving **O(N) total** for problems that would otherwise be O(N²).

---

## Core Idea

```
For each element, pop all stack elements that violate the monotonic property.
The popped elements have found their "answer" (next greater / next smaller).
```

### Decreasing Stack → Solves "Next Greater Element"
```typescript
while (stack.length && nums[i] > nums[stack.top()]) {
    result[stack.pop()] = nums[i]; // nums[i] is the answer for popped index
}
stack.push(i);
```

### Increasing Stack → Solves "Next Smaller Element / Span"
```typescript
while (stack.length && nums[i] < nums[stack.top()]) {
    result[stack.pop()] = nums[i];
}
stack.push(i);
```

---

## When to Use

| Signal | Pattern |
|---|---|
| "Next greater / smaller element" | Monotonic decreasing / increasing stack |
| "How many days until warmer" | Next greater with index difference |
| "Largest rectangle in histogram" | Monotonic increasing stack for boundaries |
| "Stock span / consecutive days" | Monotonic decreasing, count popped elements |

---

## Problems in This Section

| # | Problem | Stack Type | File |
|---|---|---|---|
| 739 | Daily Temperatures | Decreasing | `problems/daily-temperatures.ts` |
| 503 | Next Greater Element II (circular) | Decreasing | `problems/next-greater-element-ii.ts` |
| 84 | Largest Rectangle in Histogram | Increasing | `problems/largest-rectangle-histogram.ts` |
| 901 | Online Stock Span | Decreasing | `problems/online-stock-span.ts` |

---

## Complexity

| Operation | Time | Space |
|---|---|---|
| Each element pushed/popped once | O(N) total | O(N) stack |
