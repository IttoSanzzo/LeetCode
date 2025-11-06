/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
	let absoluteNumber = Math.abs(x);
	let mirroredNumber = 0;
	while (absoluteNumber > 0) {
		mirroredNumber = mirroredNumber * 10 + (absoluteNumber % 10);
		absoluteNumber = Math.floor(absoluteNumber / 10);
	}
	if (mirroredNumber > 2147483647 || mirroredNumber < -2147483648) return 0;
	return mirroredNumber * (x < 0 ? -1 : 1);
}
// @lc code=end
