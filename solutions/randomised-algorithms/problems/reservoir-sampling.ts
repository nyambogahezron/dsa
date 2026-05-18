/**
 * @file reservoir-sampling.ts
 * @description Reservoir Sampling (k samples from a stream)
 *
 * --- Problem Description ---
 * Given a potentially unbounded stream and an integer k, maintain a uniform
 * random sample of k elements after processing the full stream.
 *
 * 
 * --- Constraints ---
 * - Follow the canonical constraints for this problem statement.
 * - Validate minimal input, typical input, and upper-bound input sizes.
 * - Ensure behavior is correct for duplicates, ordering, and empty-like edge cases where applicable.
 * 
 * --- Target Complexity ---
 * Time Complexity: O(N)
 * Space Complexity: O(K)
 * 
 * --- Test Cases ---
 * 1. Basic Case
 *    Input: Use a representative normal input from the example.
 *    Expected: Correct output for the standard scenario.
 * 2. Edge Case
 *    Input: Minimal valid input (e.g., empty/single element/smallest grid).
 *    Expected: Correct base-condition behavior.
 * 3. Boundary Case
 *    Input: Large valid input near constraints.
 *    Expected: Correct output within target complexity bounds.
 */

export function reservoirSampling(stream: number[], k: number): number[] {
    // TODO: Implement Reservoir Sampling
    throw new Error("Method not implemented.");
}

// Sample Test Scaffold (enable after implementation)
// console.log(reservoirSampling(/* TODO: add test input */));
