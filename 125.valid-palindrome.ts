/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
	const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	for (let index = 0; index <= cleanString.length / 2; ++index)
		if (cleanString[index] != cleanString[cleanString.length - index - 1])
			return false;
	return true;
}
// @lc code=end
