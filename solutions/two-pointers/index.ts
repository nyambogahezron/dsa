/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Two Pointers pattern.
 */

/**
 * Template 1: Two Pointers from Opposite Ends
 * Typically used on sorted arrays/lists to find pairs or meet a condition.
 * 
 * @param arr Input sorted array
 * @param target Target sum or value
 * @returns Array indices of the matching pair, or null
 */
export function twoPointersOpposite(arr: number[], target: number): [number, number] | null {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === target) {
            return [left, right]; // Found matching pair
        } else if (currentSum < target) {
            left++; // Sum is too small, increase left pointer to get a larger value
        } else {
            right--; // Sum is too big, decrease right pointer to get a smaller value
        }
    }

    return null; // No pair found
}

/**
 * Template 2: Same Direction / Fast & Slow (Read & Write) Pointers
 * Typically used for in-place modifications (e.g. deduplication or filtering).
 * 
 * @param arr Input array
 * @returns New length of the array after in-place modification
 */
export function twoPointersSameDirection<T>(arr: T[]): number {
    if (arr.length === 0) return 0;
    
    let writeIndex = 0; // Slow pointer (where we write/insert the valid value)

    for (let readIndex = 0; readIndex < arr.length; readIndex++) {
        // Condition: If current element is valid / not a duplicate
        const isValid = true; // Replace with condition (e.g., arr[readIndex] !== arr[readIndex - 1])
        
        if (isValid) {
            arr[writeIndex] = arr[readIndex];
            writeIndex++;
        }
    }

    return writeIndex; // Returns new length
}

// --- Example Usage ---
// Finding a pair that sums to a target:
// const indices = twoPointersOpposite([1, 2, 3, 4, 6], 6); // [1, 3] -> (2 + 4 = 6)
