/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
	const numSet = new Set(nums);
	let longest = 0;

	for (let num of numSet) {
		if (numSet.has(num - 1)) continue;
		let currentCount = 1;
		while (numSet.has(num + 1)) {
			++currentCount;
			++num;
		}
		if (currentCount > longest) longest = currentCount;
	}
	return longest;
}
// @lc code=end
