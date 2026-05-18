/**
 * @file best-time-to-buy-and-sell-stock.ts
 *
 * 121. Best Time to Buy and Sell Stock
 * Easy
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 *
 * Constraints:
 * - 1 <= prices.length <= 10^5
 * - 0 <= prices[i] <= 10^4
 */

// One Pass - Sliding Window
// Time: O(n) | Space: O(1)
export function maxProfit(prices: number[]): number {
	let minPrice = Infinity
	let profit = 0

	for (const price of prices) {
		if (price < minPrice) minPrice = price

		if (price - minPrice > profit) {
			profit = price - minPrice
		}
	}
	return profit
}


// Brute Force
// Time: O(n^2) | Space: O(1)
function maxProfitBruteForce(prices: number[]): number {
	let maxProfit = 0

	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[j] > prices[i]) {
				const profit = prices[j] - prices[i]
				if (profit > maxProfit) {
					maxProfit = profit
				}
			}
		}
	}
	return maxProfit
}

export default {
	maxProfit,
	maxProfitBruteForce,
}

// Tests
console.log('[7,1,5,3,6,4] =>', maxProfitBruteForce([7, 1, 5, 3, 6, 4]))
console.log('[7,6,4,3,1] =>', maxProfitBruteForce([7, 6, 4, 3, 1]))
