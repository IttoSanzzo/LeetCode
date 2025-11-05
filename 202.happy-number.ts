/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
	if (n >= 2 && n <= 4) return false;
	const numberString = n.toString();
	let happyNumber = 0;
	for (let index = 0; index < numberString.length; ++index) {
		const number = Number(numberString[index]);
		happyNumber += number * number;
	}
	if (happyNumber == 1) return true;
	return isHappy(happyNumber);
}
// @lc code=end
