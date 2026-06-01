/*
 * @lc app=leetcode id=1248 lang=typescript
 *
 * [1248] Count Number of Nice Subarrays
 */

// @lc code=start
function numberOfSubarrays(nums: number[], k: number): number {
	const results = new Map<number, number>();
	let subarraysCount = 0;
	let total = 0;

	for (const num of nums) {
		results.set(total, (results.get(total) ?? 0) + 1);
		total += num % 2 == 0 ? 0 : 1;
		subarraysCount += results.get(total - k) ?? 0;
	}

	return subarraysCount;
}
// @lc code=end
