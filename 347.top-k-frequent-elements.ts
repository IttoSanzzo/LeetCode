/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
	const tops = new Map<number, number>();
	for (const num of nums) tops.set(num, (tops.get(num) ?? 0) + 1);
	return [...tops.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map((value) => value[0]);
}
// @lc code=end
