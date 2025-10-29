/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const charValue = {
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
		if (charValue[s[index]] < charValue[s[index + 1]])
			integer -= charValue[s[index]];
		else integer += charValue[s[index]];
	}
	return integer;
}
// @lc code=end
