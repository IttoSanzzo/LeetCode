/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
	return nums.reduce((a, b) => a ^ b);
}
// @lc code=end
// @leetcode:omit_below
/*
function singleNumber(nums: number[]): number {
	const numbersObject: { [string: number]: boolean | undefined } = {};
	if (nums.length == 1) return nums[0];
	for (let index = 0; index < nums.length; ++index) {
		if (numbersObject[nums[index]]) delete numbersObject[nums[index]];
		else numbersObject[nums[index]] = true;
	}
	return Number(Object.keys(numbersObject)[0]);
}
*/
