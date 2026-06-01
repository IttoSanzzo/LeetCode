/*
 * @lc app=leetcode id=930 lang=typescript
 *
 * [930] Binary Subarrays With Sum
 */

// @lc code=start
function numSubarraysWithSum(nums: number[], goal: number): number {
	const results = new Map<number, number>();
	let total = 0;
	let count = 0;
	for (const num of nums) {
		results.set(total, (results.get(total) ?? 0) + 1);
		total += num;
		count += results.get(total - goal) ?? 0;
	}
	return count;
}
// @lc code=end
