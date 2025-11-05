/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
function reverseBits(n: number): number {
	let reversed = 0;
	for (let index = 0; index < 32; ++index) {
		reversed <<= 1;
		reversed |= n & 1;
		n >>>= 1;
	}
	return reversed >>> 0;
}
// @lc code=end
