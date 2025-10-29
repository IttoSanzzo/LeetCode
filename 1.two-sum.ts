/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): [number, number] {
	const hash: Map<number, number> = new Map();

	for (let index = 0; index < nums.length; ++index) {
		const missingValue = target - nums[index];
		if (hash[missingValue] != null && hash[missingValue] != index)
			return [hash[missingValue], index];
		hash[nums[index]] = index;
	}
	return [0, 1];
}
// @lc code=end
