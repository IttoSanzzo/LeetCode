/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start

function isPalindrome(x: number): boolean {
	if (x < 0) return false;
	const numberString = String(x);
	const halfLength = numberString.length / 2;
	for (let index = 0; index < halfLength; ++index)
		if (numberString[index] != numberString[numberString.length - 1 - index])
			return false;
	return true;
}

// @lc code=end
