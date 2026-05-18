/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Sliding Window pattern.
 */

/**
 * Template 1: Fixed-Size Sliding Window
 * Used when the window size (K) is constant.
 * 
 * @param arr Input array
 * @param k Size of the window
 * @returns Maximum/Minimum value or result matching the criteria
 */
export function slidingWindowFixed<T>(arr: T[], k: number): unknown[] {
    const result: unknown[] = [];
    let windowSum = 0; // Or other metrics like counts, hash maps, etc.
    
    // 1. Initialize the first window of size K
    for (let i = 0; i < k; i++) {
        // windowSum += arr[i]; // Process first K elements
    }
    
    // 2. Slide the window from index K to the end of the array
    for (let right = k; right < arr.length; right++) {
        const left = right - k;
        
        // Add the next element (right) to the window
        // Remove the outgoing element (left) from the window
        // windowSum += arr[right] - arr[left];
        
        // Store or update the result
    }
    
    return result;
}

/**
 * Template 2: Variable-Size / Dynamic Sliding Window
 * Used when the window grows and shrinks dynamically based on a condition.
 * 
 * @param arr Input array
 * @param isConditionViolated Function defining if the current window state violates constraints
 */
export function slidingWindowVariable<T>(
    arr: T[], 
    isConditionViolated: (windowState: any) => boolean
): number {
    let maxLength = 0;
    let left = 0;
    const windowMap = new Map<T, number>(); // State tracker (e.g. element counts)

    for (let right = 0; right < arr.length; right++) {
        // 1. Add current element to the window state
        const val = arr[right];
        windowMap.set(val, (windowMap.get(val) || 0) + 1);

        // 2. Shrink window from the left while the condition is violated
        while (isConditionViolated(windowMap)) {
            const leftVal = arr[left];
            windowMap.set(leftVal, windowMap.get(leftVal)! - 1);
            if (windowMap.get(leftVal) === 0) {
                windowMap.delete(leftVal);
            }
            left++; // Move left pointer inward
        }

        // 3. Update the optimal metric (e.g., maximum length)
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// --- Example Usage ---
// Finding maximum sum subarray of size K
// const maxSum = slidingWindowFixed([2, 1, 5, 1, 3, 2], 3);
