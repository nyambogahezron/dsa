/**
 * @file online-stock-span.ts
 * @description Online Stock Span (LeetCode #901)
 *
 * --- Problem Description ---
 * Design an algorithm that collects daily price quotes for some stock and returns
 * the span of that stock's price for the current day. The span of the stock's
 * price today is defined as the maximum number of consecutive days (starting from
 * today and going backwards) for which the stock price was less than or equal to
 * today's price. Implement the `StockSpanner` class using a monotonic decreasing
 * stack that stores [price, span] pairs.
 *
 * --- Example ---
 * Input: prices = [100, 80, 60, 70, 60, 75, 85]
 * Output: [1, 1, 1, 2, 1, 4, 6]
 *
 * --- Constraints ---
 * - 1 <= price <= 10^5
 * - At most 10^4 calls to next.
 *
 * --- Target Complexity ---
 * Time Complexity: O(1) amortized per call
 * Space Complexity: O(N)
 *
 * --- Test Cases ---
 * 1. Basic Case
 *    Prices: [100, 80, 60, 70, 60, 75, 85]
 *    Expected spans: [1, 1, 1, 2, 1, 4, 6]
 * 2. All increasing
 *    Prices: [1, 2, 3, 4, 5]
 *    Expected spans: [1, 2, 3, 4, 5]
 * 3. All same
 *    Prices: [5, 5, 5, 5]
 *    Expected spans: [1, 2, 3, 4]
 */

export class StockSpanner {
    constructor() {
        // TODO: Implement StockSpanner constructor
        throw new Error("Method not implemented.");
    }

    next(price: number): number {
        // TODO: Implement next() for Online Stock Span
        throw new Error("Method not implemented.");
    }
}

// Sample Test Scaffold (enable after implementation)
// const spanner = new StockSpanner();
// [100, 80, 60, 70, 60, 75, 85].forEach(p => console.log(spanner.next(p)));
// Expected: 1 1 1 2 1 4 6
