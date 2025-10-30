/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
	digits[digits.length - 1] += 1;
	for (
		let index = digits.length - 1;
		index > 0 && digits[index] == 10;
		--index
	) {
		digits[index] = 0;
		digits[index - 1] += 1;
	}
	if (digits[0] >= 10) {
		digits[0] = 1;
		digits.push(0);
	}
	return digits;
}
// @lc code=end
