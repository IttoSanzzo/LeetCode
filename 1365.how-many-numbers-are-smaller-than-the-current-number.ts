/*
 * @lc app=leetcode id=1365 lang=typescript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
function smallerNumbersThanCurrent(nums: number[]): number[] {
	const counts = new Map<number, number>();
	[...nums]
		.sort((a, b) => a - b)
		.forEach((value, index) => {
			if (!counts.has(value)) counts.set(value, index);
		});
	return nums.map((value) => counts.get(value)!);
}
// @lc code=end
