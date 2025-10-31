/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
	let min: number = prices[0];
	let profit: number = 0;

	for (let y: number = 1; y < prices.length; ++y)
		if (prices[y] - prices[0] > profit) profit = prices[y] - prices[0];

	for (let i: number = 1; i < prices.length; ++i) {
		if (prices[i] < min) {
			min = prices[i];
			for (let y: number = i + 1; y < prices.length; ++y) {
				if (prices[y] - prices[i] > profit) profit = prices[y] - prices[i];
			}
		}
	}
	return profit;
}
// @lc code=end
