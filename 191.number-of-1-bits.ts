/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
	let count = 0;
	while (n > 0) {
		if (n & 1) ++count;
		n >>= 1;
	}
	return count;
}
// @lc code=end
