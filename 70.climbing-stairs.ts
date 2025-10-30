/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
	if (n <= 0) return 0;
	if (n == 1) return 1;

	let totalWays = 1;
	let oneBefore = 0;
	let twoBefore = 0;

	for (let index = 0; index < n; ++index) {
		twoBefore = oneBefore;
		oneBefore = totalWays;
		totalWays = oneBefore + twoBefore;
	}

	return totalWays;
}
// @lc code=end
// @leetcode:omit_below

/*
function makeStep(stepSize: number, remaining: number): number {
	remaining -= stepSize;
	if (remaining == 0 || remaining == 1) return 1;
	return makeStep(1, remaining) + makeStep(2, remaining);
}

// @lc code=start
function climbStairs(n: number): number {
	if (n <= 0) return 0;
	if (n == 1) return 1;
	return makeStep(1, n) + makeStep(2, n);
}
*/

/*
Input: n = 1 output: 1
1. 1

Input: n = 2 output: 2
1. 1 + 1
2. 2

Input: n = 3 output: 3
1. 1 + 1 + 1
2. 1 + 2
3. 2 + 1

Input: n = 4 output: 5
1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 2 + 1
4. 2 + 1 + 1
5. 2 + 2
*/
