/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
	if (n == 1) return true;
	if (n < 1) return false;
	return isPowerOfThree(n / 3);
}
// @lc code=end

// @leetcode:omit_start
/*
{
	if (n == 1) return true;
	if (n < 1) return false;
	return isPowerOfThree(n / 3);
}
{
	if (n <= 0) return false;
	let divided = Math.log(n) / Math.log(3);
	return Math.abs(divided - Math.round(divided)) < 1e-10;
}
{
return Number.isInteger(
	Math.trunc(10000000000 * (Math.log(n) / 1.0986122886681096)) / 10000000000,
);
}
{
	return (Math.log(n) / 1.0986122886681096).toFixed(9).endsWith(".000000000");
}
*/
// @leetcode:omit_end
