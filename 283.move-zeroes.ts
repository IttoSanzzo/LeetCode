/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	let lastIndex = 0;
	while (lastIndex < nums.length - 1 && nums[lastIndex] != 0) ++lastIndex;
	for (let index = lastIndex + 1; index < nums.length; ++index)
		if (nums[index] != 0) {
			nums[lastIndex++] = nums[index];
			nums[index] = 0;
		}
}
// @lc code=end
