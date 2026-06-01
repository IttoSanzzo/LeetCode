/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
	for (let i = 0, j = numbers.length - 1; i < j; ) {
		if (numbers[i] + numbers[j] == target) return [i + 1, j + 1];
		if (numbers[i] + numbers[j] < target) ++i;
		else --j;
	}
	return [];
}
// @lc code=end
