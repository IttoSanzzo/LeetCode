/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
	const trimmedString = s.trimEnd();
	return trimmedString.length - (trimmedString.lastIndexOf(" ") + 1);
}
// @lc code=end
