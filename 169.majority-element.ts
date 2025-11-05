/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
	const elements: { [number: number]: number } = {};
	for (let index = 0; index < nums.length; ++index) {
		if (elements[nums[index]]) {
			elements[nums[index]] += 1;
			if (elements[nums[index]] > nums.length / 2) return nums[index];
		} else elements[nums[index]] = 1;
	}
	return nums[0];
}
// @lc code=end
