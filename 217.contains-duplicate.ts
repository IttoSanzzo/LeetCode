/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
	const uniqueNumbers: number[] = Array.from(new Set<number>(nums));
	return uniqueNumbers.length !== nums.length;
}
// @lc code=end
