/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
	if (nums[0] > target) return 0;
	if (nums[nums.length - 1] < target) return nums.length;

	let leftLimit = 0;
	let rightLimit = nums.length - 1;
	let middle = Math.floor(rightLimit / 2);

	while (
		nums[middle] != target &&
		middle != leftLimit &&
		middle != rightLimit
	) {
		if (target > nums[middle]) {
			leftLimit = middle;
			middle += Math.floor((rightLimit - leftLimit) / 2);
			continue;
		}
		rightLimit = middle;
		middle -= Math.floor((rightLimit - leftLimit) / 2);
	}
	if (nums[middle] == target) return middle;
	if (nums[leftLimit] == target) return leftLimit;
	return rightLimit;
}
// @lc code=end
// @leetcode:omit_below
/*
function searchInsert(nums: number[], target: number): number {
	for (let index = 0; index < nums.length; ++index) {
		if (nums[index] >= target) return index;
	}
	return nums.length;
}
*/
