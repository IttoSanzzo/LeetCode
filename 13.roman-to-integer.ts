/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const romans: { [key: string]: number } = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

function romanToInt(s: string): number {
	let integer = 0;
	for (let index = s.length - 1; index >= 0; --index) {
		if (romans[s[index]] < romans[s[index + 1]]) integer -= romans[s[index]];
		else integer += romans[s[index]];
	}
	return integer;
}
// @lc code=end
