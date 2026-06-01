/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
	const sums: number[] = Array<number>(nums.length).fill(0);
	let totals = [0, 0];

	for (let index = 0; index < nums.length; ++index) {
		sums[index] += totals[0];
		sums[nums.length - 1 - index] -= totals[1];
		totals[0] += nums[index];
		totals[1] += nums[nums.length - 1 - index];
	}
	for (let index = 0; index < sums.length; ++index)
		if (sums[index] == 0) return index;
	return -1;
}
// @lc code=end
