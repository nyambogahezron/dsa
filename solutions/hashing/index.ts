/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Hashing pattern.
 */

/**
 * Template 1: Two-Pass Frequency Map
 * Count occurrences of elements; answer queries in O(1).
 *
 * @param items Input array
 * @returns Map of element → count
 */
export function buildFrequencyMap<T>(items: T[]): Map<T, number> {
    const freq = new Map<T, number>();
    for (const item of items) {
        freq.set(item, (freq.get(item) ?? 0) + 1);
    }
    return freq;
}

/**
 * Template 2: HashMap as Index / Complement Lookup
 * Used for problems like Two Sum: store seen values for O(1) lookup.
 *
 * @param nums   Input array
 * @param target Target sum
 * @returns Indices of the two numbers that add to target
 */
export function twoSumTemplate(nums: number[], target: number): [number, number] | null {
    const seen = new Map<number, number>(); // value → index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }
        seen.set(nums[i], i);
    }
    return null;
}

/**
 * Template 3: Group by Key (Canonical Form Hashing)
 * Used for problems like Group Anagrams: map each item to its canonical key.
 *
 * @param items     Input array
 * @param keyOf     Function deriving a canonical grouping key from an item
 * @returns         Groups of items sharing the same canonical key
 */
export function groupByKey<T>(items: T[], keyOf: (item: T) => string): Map<string, T[]> {
    const groups = new Map<string, T[]>();
    for (const item of items) {
        const key = keyOf(item);
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key)!.push(item);
    }
    return groups;
}

// --- Example Usage ---
// const freq = buildFrequencyMap([1, 2, 1, 3, 2]);
// const pair = twoSumTemplate([2, 7, 11, 15], 9); // [0, 1]
