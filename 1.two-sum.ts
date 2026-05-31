/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): [number, number] {
	const hash = new Map<number, number>();

	for (let index = 0; index < nums.length; ++index) {
		const missingValue = target - nums[index];
		if (hash.has(missingValue)) return [hash.get(missingValue)!, index];
		hash.set(nums[index], index);
	}
	return [0, 1];
}
// @lc code=end
