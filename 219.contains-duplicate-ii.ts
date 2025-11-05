/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
	const pastNumbers: { [number: number]: number } = {};
	for (let index = 0; index < nums.length; ++index) {
		if (pastNumbers[nums[index]] != null) {
			if (index - pastNumbers[nums[index]] <= k) return true;
			pastNumbers[nums[index]] = index;
		} else pastNumbers[nums[index]] = index;
	}
	return false;
}
// @lc code=end
