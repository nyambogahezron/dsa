/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Binary Search pattern.
 */

/**
 * Template 1: Classic Binary Search (exact match)
 * Finds the index of `target` in a sorted array, or -1 if not found.
 *
 * @param nums   Sorted array
 * @param target Value to find
 */
export function binarySearch(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2); // avoids overflow
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // not found
}

/**
 * Template 2: Left Boundary Binary Search
 * Finds the leftmost index where condition is first true (lower bound).
 * Useful for: "find minimum x such that f(x) is true".
 *
 * @param lo        Lower bound of search space (inclusive)
 * @param hi        Upper bound of search space (inclusive)
 * @param condition Monotonic predicate — false...false...true...true
 */
export function lowerBound(lo: number, hi: number, condition: (mid: number) => boolean): number {
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (condition(mid)) hi = mid;       // mid might be the answer, narrow right
        else lo = mid + 1;                  // mid is definitely not the answer
    }
    return lo; // smallest value satisfying condition
}

/**
 * Template 3: Right Boundary Binary Search
 * Finds the rightmost index where condition is still true (upper bound).
 * Useful for: "find maximum x such that f(x) is true".
 *
 * @param lo        Lower bound of search space (inclusive)
 * @param hi        Upper bound of search space (inclusive)
 * @param condition Monotonic predicate — true...true...false...false
 */
export function upperBound(lo: number, hi: number, condition: (mid: number) => boolean): number {
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo + 1) / 2); // bias toward right
        if (condition(mid)) lo = mid;       // mid might be the answer, narrow left
        else hi = mid - 1;
    }
    return lo; // largest value satisfying condition
}

// --- Example Usage ---
// const idx = binarySearch([1, 3, 5, 7, 9], 7); // 3
// const firstGe5 = lowerBound(0, 10, (x) => x >= 5); // 5
