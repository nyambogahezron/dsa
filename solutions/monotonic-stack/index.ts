/**
 * @file index.ts
 * @description Implementation, blueprint templates, and examples for the Monotonic Stack pattern.
 */

/**
 * Template 1: Monotonic Decreasing Stack (Next Greater Element)
 * Maintains a stack of indices in decreasing order of values.
 * When a larger element is found, pop and resolve all smaller pending elements.
 *
 * @param nums Input array
 * @returns Array where result[i] = next greater element for nums[i], or -1 if none
 */
export function nextGreaterElement(nums: number[]): number[] {
    const result = new Array(nums.length).fill(-1);
    const stack: number[] = []; // stores indices (decreasing value order)

    for (let i = 0; i < nums.length; i++) {
        // While current element is greater than the element at stack top
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            const idx = stack.pop()!;
            result[idx] = nums[i]; // nums[i] is the next greater for idx
        }
        stack.push(i);
    }

    return result; // remaining indices in stack have no next greater → -1
}

/**
 * Template 2: Monotonic Increasing Stack (Next Smaller Element / Span)
 * Maintains a stack of indices in increasing order of values.
 *
 * @param nums Input array
 * @returns Array where result[i] = next smaller element for nums[i], or -1 if none
 */
export function nextSmallerElement(nums: number[]): number[] {
    const result = new Array(nums.length).fill(-1);
    const stack: number[] = []; // stores indices (increasing value order)

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            const idx = stack.pop()!;
            result[idx] = nums[i];
        }
        stack.push(i);
    }

    return result;
}

// --- Example Usage ---
// nextGreaterElement([2, 1, 2, 4, 3]) => [4, 2, 4, -1, -1]
