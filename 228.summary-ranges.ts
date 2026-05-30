/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
	if (nums.length == 0) return [];
	const ranges: string[] = [String(nums[0])];

	for (let index = 1; index < nums.length; ++index)
		if (nums[index - 1] != nums[index] - 1) {
			closeRangeIfNecessary(ranges, nums[index - 1]);
			ranges.push(String(nums[index]));
		}
	closeRangeIfNecessary(ranges, nums[nums.length - 1]);

	return ranges;
}

function closeRangeIfNecessary(ranges: string[], lastValue: number) {
	if (ranges[ranges.length - 1] != lastValue.toString())
		ranges[ranges.length - 1] += `->${lastValue}`;
}
// @lc code=end
