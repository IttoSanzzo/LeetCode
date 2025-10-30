/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
	let numbersCount = 1;
	for (let index = 1; index < nums.length; ++index)
		if (nums[index] != nums[numbersCount - 1])
			nums[numbersCount++] = nums[index];
	return numbersCount;
}
// @lc code=end
