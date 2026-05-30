/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
	let total = nums.reduce((acc, val) => (acc += val), 0);
	return -1 * (total - (nums.length * (nums.length + 1)) / 2);
}
// @lc code=end
