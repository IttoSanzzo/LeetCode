/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
	return 1 + ((num - 1) % 9);
}
// @lc code=end

// @leetcode:omit_start
/*
function addDigits(num: number): number {
	while (num > 9) num = (num % 10) + addDigits(Math.floor(num / 10));
	return num;
}
*/
// @leetcode:omit_end
