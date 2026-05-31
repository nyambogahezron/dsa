# Prefix Sum

## Overview

The **Prefix Sum** (also called *Cumulative Sum*) pattern precomputes a running total over an array so that **any contiguous subarray sum can be answered in O(1)** after an O(N) preprocessing step.

---

## Core Idea

Given an array `nums`, build an auxiliary array `prefix` where:

```
prefix[0] = 0
prefix[i] = nums[0] + nums[1] + ... + nums[i-1]
```

Then the sum of `nums[left..right]` (0-indexed, inclusive) is:

```
rangeSum(left, right) = prefix[right + 1] - prefix[left]
```

---

## Templates

### Template 1 — Static Range Query

Build once, query many times in O(1):

```typescript
const prefix = buildPrefixSum(nums);
const sum = rangeSum(prefix, l, r);
```

### Template 2 — HashMap + Running Sum (Subarray Count)

When you need to **count subarrays** that sum to a target `k`:

```typescript
// Key insight: if (currentSum - k) was seen before, there's a valid subarray
prefixCounts.set(0, 1); // base case: empty prefix
```

---

## When to Use

| Signal | Use Prefix Sum |
|---|---|
| "Sum of subarray from index l to r" | ✅ Static range query |
| "Count subarrays with sum = k" | ✅ HashMap + running sum |
| "Range update + range query" | ❌ Prefer Segment Tree / BIT |
| Sliding window is enough | ❌ Prefer Sliding Window |

---

## Problems in This Section

| Problem | Key Variant | File |
|---|---|---|
| Subarray Sum Equals K | HashMap + running sum | `problems/subarray-sum-equals-k.ts` |
| Range Sum Query – Immutable | Static prefix array | `problems/range-sum-query.ts` |

---

## Time & Space Complexity

| Operation | Time | Space |
|---|---|---|
| Build prefix array | O(N) | O(N) |
| Range sum query | O(1) | O(1) |
| Count subarrays (HashMap) | O(N) | O(N) |
