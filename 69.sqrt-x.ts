/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
	if (x < 2) return x;
	if (x < 4) return 1;
	let sqrt = 51;
	let result = sqrt * sqrt;
	while (result < x) {
		sqrt += 50;
		result = sqrt * sqrt;
	}
	sqrt -= 50;
	result = sqrt * sqrt;
	while (result < x) {
		sqrt += 1;
		result = sqrt * sqrt;
	}
	if (result == x) return sqrt;
	return sqrt - 1;
}
// @lc code=end
