/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
	let numberCount = 0;
	for (const number of nums) if (number != val) nums[numberCount++] = number;
	return numberCount;
}
// @lc code=end
// @leetcode:omit_below

/*
function removeElement(nums: number[], val: number): number {
	let advancingIndex = 0;
	let returningIndex = nums.length;
	while (advancingIndex < returningIndex) {
		while (advancingIndex < returningIndex && nums[advancingIndex] != val)
			++advancingIndex;
		while (returningIndex > advancingIndex && nums[--returningIndex] == val) {}
		if (advancingIndex == returningIndex) break;
		nums[advancingIndex++] = nums[returningIndex];
	}
	return advancingIndex;
}
*/
