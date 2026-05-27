/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
	const result: number[] = new Array(nums.length).fill(1);

	let total = 1;
	for (let index = 0; index < nums.length; ++index) {
		result[index] = total;
		total *= nums[index];
	}
	total = 1;
	for (let index = nums.length - 1; index >= 0; --index) {
		result[index] *= total;
		total *= nums[index];
	}
	return result;
}
// @lc code=end
// @leetcode:omit_start

/*
result.push(
	nums.reduce((acc, val, i) => {
		if (i == index) return acc;
		return (acc *= val);
	}, 1),
);
*/
// @leetcode:omit_end
