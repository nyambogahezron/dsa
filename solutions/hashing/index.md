# Hashing & Prefix Sum

## Overview

**Hashing** uses hash maps/sets to trade space for time — converting O(N) scans into O(1) lookups. Combined with prefix sums, it unlocks powerful subarray and grouping patterns.

---

## Core Templates

### Template 1 — Frequency Map
```typescript
const freq = new Map<T, number>();
for (const item of items) {
    freq.set(item, (freq.get(item) ?? 0) + 1);
}
```

### Template 2 — Complement Lookup (Two Sum pattern)
```typescript
const seen = new Map<number, number>(); // value → index
for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (seen.has(comp)) return [seen.get(comp)!, i];
    seen.set(nums[i], i);
}
```

### Template 3 — Group by Canonical Key
```typescript
// Group anagrams: key = sorted characters
const key = word.split('').sort().join('');
groups.get(key)?.push(word) ?? groups.set(key, [word]);
```

---

## When to Use

| Signal | Pattern |
|---|---|
| "Find two elements summing to target" | Complement HashMap |
| "Count frequency / find duplicates" | Frequency Map |
| "Group elements sharing a property" | Canonical Key Map |
| "Longest consecutive sequence" | HashSet membership |
| "Count subarrays summing to k" | Prefix Sum + HashMap (see prefix-sum/) |

---

## Problems in This Section

| # | Problem | Key Idea | File |
|---|---|---|---|
| 1 | Two Sum | Complement HashMap | `problems/two-sum.ts` |
| 49 | Group Anagrams | Canonical sorted key | `problems/group-anagrams.ts` |
| 128 | Longest Consecutive Sequence | HashSet O(N) | `problems/longest-consecutive-sequence.ts` |
| 560 | Subarray Sum Equals K | → see `prefix-sum/problems/` | — |

---

## Complexity

| Operation | Time | Space |
|---|---|---|
| HashMap insert/lookup | O(1) average | O(N) |
| Frequency count | O(N) | O(N) |
| Group Anagrams | O(N * K log K) | O(N * K) |
| Longest Consecutive | O(N) | O(N) |
