/**
 * @file index.ts
 * @description Implementations demonstrating the six common computational runtimes (Big O).
 * Includes an interactive benchmarking suite to visualize growth rates.
 */

// Global operations counter to track actual step scaling in benchmarks
let opsCount = 0;

/**
 * 1. Constant Time  O(1)
 * The execution time of this function remains completely constant,
 * regardless of the size of the input array.
 *
 * @param arr Input array of elements
 * @param index Target index to access (default 0)
 * @returns Element at the given index or undefined
 */
export function constantTimeExample<T>(arr: T[], index: number = 0): T | undefined {
    opsCount++; // Only 1 operation: accessing by index
    return arr[index];
}

/**
 * 2. Logarithmic Time — O(log n)
 * Performs a Binary Search on a sorted array. At each step, it cuts the search
 * space in half, resulting in logarithmic execution growth.
 *
 * @param arr Sorted array of numbers
 * @param target Value to find
 * @returns Index of the target value, or -1 if not found
 */
export function logarithmicTimeExample(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        opsCount++; // Loop step counter
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

/**
 * 3. Linear Time — O(n)
 * Iterates through the entire array exactly once. The execution steps scale
 * on a 1-to-1 basis with the size of the input array.
 *
 * @param arr Array of numbers to sum
 * @returns The sum of all elements in the array
 */
export function linearTimeExample(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        opsCount++; // Iteration counter
        sum += arr[i];
    }
    return sum;
}

/**
 * 4. Polynomial/Quadratic Time — O(n^2)
 * Searches for all unique pairs in an array using nested loops.
 * The execution steps grow proportionally to the square of the input size (n * n).
 *
 * @param arr Array of numbers
 * @returns An array of all unique coordinate pairs
 */
export function polynomialTimeExample(arr: number[]): [number, number][] {
    const pairs: [number, number][] = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            opsCount++; // Inner loop iteration counter
            pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
}

/**
 * 5. Exponential Time — O(2^n)
 * Recursively calculates the n-th Fibonacci number. With each increase of n,
 * the recursion tree doubles in size, representing O(2^n) growth.
 *
 * @param n Fibonacci sequence index
 * @returns The n-th Fibonacci number
 */
export function exponentialTimeExample(n: number): number {
    opsCount++; // Function call tracking
    if (n <= 1) return n;
    return exponentialTimeExample(n - 1) + exponentialTimeExample(n - 2);
}

/**
 * 6. Factorial Time — O(n!)
 * Generates all unique permutations of an array.
 * The search space scales at n! (n factorial), making it highly intractable for n > 10.
 *
 * @param arr Input array of elements
 * @returns An array of all possible permutations
 */
export function factorialTimeExample<T>(arr: T[]): T[][] {
    opsCount++; // Tracker for recursive call
    if (arr.length === 0) return [[]];

    const result: T[][] = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPermutations = factorialTimeExample(remaining);

        for (const perm of remainingPermutations) {
            opsCount++; // Permutation mapping operations
            result.push([current, ...perm]);
        }
    }
    return result;
}


