/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
	let subarrays = 0;
	let total = 0;
	const resultsMap = new Map<number, number>();

	for (const num of nums) {
		resultsMap.set(total, (resultsMap.get(total) ?? 0) + 1);
		total += num;
		if (resultsMap.has(total - k)) subarrays += resultsMap.get(total - k) ?? 0;
	}
	return subarrays;
}
// @lc code=end
