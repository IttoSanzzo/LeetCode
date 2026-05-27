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

/**
function removeDuplicates(nums: number[]): number {
	let numbersCount = 1;
	for (let index = 1; index < nums.length; ++index)
		if (nums[index] != nums[numbersCount - 1])
			nums[numbersCount++] = nums[index];
	return numbersCount;
}

function removeDuplicates(nums: number[]): number {
	let i = 0;
	for (let val of new Set(nums).values()) nums[i++] = val;
	return i;
}
 */
