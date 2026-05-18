/**
 * @file index.ts
 * @description Implementations demonstrating the six common computational runtimes (Big O).
 * Includes an interactive benchmarking suite to visualize growth rates.
 */

// Global operations counter to track actual step scaling in benchmarks
let opsCount = 0;

/**
 * 1. Constant Time — O(1)
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


interface BenchmarkResult {
    complexity: string;
    n: number;
    ops: number;
    timeMs: string;
}

/**
 * Executes a function, tracking time elapsed and operations performed.
 *
 * @param name Runtime notation representation
 * @param n Input size
 * @param fn Callback function to benchmark
 * @returns BenchmarkResult
 */
function benchmark(name: string, n: number, fn: () => void): BenchmarkResult {
    opsCount = 0;
    const start = process.hrtime.bigint();
    fn();
    const end = process.hrtime.bigint();

    // Convert nanoseconds to milliseconds
    const durationMs = Number(end - start) / 1_000_000;

    return {
        complexity: name,
        n,
        ops: opsCount,
        timeMs: durationMs < 0.001 ? "< 0.001" : durationMs.toFixed(4)
    };
}

/**
 * Run and print all computational complexity benchmarks
 */
export function runBenchmarks(): void {
	const results: BenchmarkResult[] = []

	// O(1) Constant Benchmarks
	const o1ArraySmall = Array.from({ length: 10 }, (_, i) => i)
	const o1ArrayHuge = Array.from({ length: 1_000_000 }, (_, i) => i)
	results.push(
		benchmark('O(1) [Constant]', 10, () =>
			constantTimeExample(o1ArraySmall, 5),
		),
	)
	results.push(
		benchmark('O(1) [Constant]', 1_000_000, () =>
			constantTimeExample(o1ArrayHuge, 999_999),
		),
	)

	// O(log n) Logarithmic Benchmarks
	const oLogNArraySmall = Array.from({ length: 10 }, (_, i) => i)
	const oLogNArrayHuge = Array.from({ length: 1_000_000 }, (_, i) => i)
	results.push(
		benchmark('O(log n) [Logarithmic]', 10, () =>
			logarithmicTimeExample(oLogNArraySmall, 9),
		),
	)
	results.push(
		benchmark('O(log n) [Logarithmic]', 1_000_000, () =>
			logarithmicTimeExample(oLogNArrayHuge, 999_999),
		),
	)

	// O(n) Linear Benchmarks
	const oNArraySmall = Array.from({ length: 10 }, (_, i) => i)
	const oNArrayHuge = Array.from({ length: 100_000 }, (_, i) => i)
	results.push(
		benchmark('O(n) [Linear]', 10, () => linearTimeExample(oNArraySmall)),
	)
	results.push(
		benchmark('O(n) [Linear]', 100_000, () => linearTimeExample(oNArrayHuge)),
	)

	// O(n^2) Polynomial/Quadratic Benchmarks
	const oN2ArraySmall = Array.from({ length: 10 }, (_, i) => i)
	const oN2ArrayMid = Array.from({ length: 1_000 }, (_, i) => i)
	results.push(
		benchmark('O(n^2) [Polynomial]', 10, () =>
			polynomialTimeExample(oN2ArraySmall),
		),
	)
	results.push(
		benchmark('O(n^2) [Polynomial]', 1_000, () =>
			polynomialTimeExample(oN2ArrayMid),
		),
	)

	// O(2^n) Exponential Benchmarks
	results.push(
		benchmark('O(2^n) [Exponential]', 5, () => exponentialTimeExample(5)),
	)
	results.push(
		benchmark('O(2^n) [Exponential]', 25, () => exponentialTimeExample(25)),
	)

	// O(n!) Factorial Benchmarks
	const oNFactorialSmall = Array.from({ length: 3 }, (_, i) =>
		String.fromCharCode(65 + i),
	)
	const oNFactorialLarge = Array.from({ length: 8 }, (_, i) =>
		String.fromCharCode(65 + i),
	)
	results.push(
		benchmark('O(n!) [Factorial]', 3, () =>
			factorialTimeExample(oNFactorialSmall),
		),
	)
	results.push(
		benchmark('O(n!) [Factorial]', 8, () =>
			factorialTimeExample(oNFactorialLarge),
		),
	)

	// Beautiful CLI table print
	console.log(
		'\x1b[32m%s\x1b[0m',
		'| Complexity             | Input Size (N) | Operations Performed | Execution Time (ms) |',
	)

	for (const res of results) {
		const compCol = res.complexity.padEnd(23)
		const nCol = res.n.toString().toLocaleString().padStart(14)
		const opsCol = res.ops.toString().toLocaleString().padStart(20)
		const timeCol = res.timeMs.padStart(19)

		// Highlight explosive scaling complexities O(2^n) and O(n!) in red warnings
		if (
			res.complexity.includes('Exponential') ||
			res.complexity.includes('Factorial')
		) {
			console.log(
				`| \x1b[31m${compCol}\x1b[0m | ${nCol} | \x1b[31m${opsCol}\x1b[0m | ${timeCol} |`,
			)
		} else {
			console.log(`| ${compCol} | ${nCol} | ${opsCol} | ${timeCol} |`)
		}
	}

	console.log('\x1b[33m%s\x1b[0m', '\nObservation:')
	console.log(
		'1. For O(1) and O(log n), increasing input from 10 to 1,000,000 has negligible impact.',
	)
	console.log('2. For O(n), scale is perfectly linear.')
	console.log(
		'3. For O(n^2), N=1,000 generates nearly 500,000 nested operations!',
	)
	console.log(
		'4. Notice how for O(2^n) and O(n!), operations explode catastrophically even with tiny inputs.',
	)
}

// Execute benchmark runner if run directly
if (require.main === module) {
    runBenchmarks();
}
