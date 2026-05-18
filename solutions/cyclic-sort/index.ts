/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Cyclic Sort pattern.
 */

/**
 * Standard Blueprint for Cyclic Sort
 * Sorts an array containing numbers from 1 to N in-place in O(N) time.
 * 
 * @param nums Input array of numbers in the range [1, N]
 * @returns Sorted array
 */
export function cyclicSort(nums: number[]): number[] {
    let i = 0;
    const n = nums.length;

    while (i < n) {
        const correctIndex = nums[i] - 1; // For 1-based indexing. For 0-based, it's just nums[i].
        
        // Swap if current number is in the valid range and not at its correct index
        if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[correctIndex]) {
            // Swap nums[i] with nums[correctIndex]
            const temp = nums[i];
            nums[i] = nums[correctIndex];
            nums[correctIndex] = temp;
        } else {
            i++; // Increment only when the element at index `i` is in its correct place
        }
    }

    return nums;
}

// --- Example Usage ---
// const sorted = cyclicSort([3, 1, 5, 4, 2]); // Output: [1, 2, 3, 4, 5]
