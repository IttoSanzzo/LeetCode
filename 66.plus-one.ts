/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
	const lastIndex = digits.length - 1;
	digits[lastIndex] = digits[lastIndex] + 1;
	return digits;
}
// @lc code=end
