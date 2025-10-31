/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 0) return "";
	else if (strs.length === 1) return strs[0];

	for (let i = 0; i < strs[0].length; ++i) {
		for (let y = 1; y < strs.length; ++y) {
			if (strs[0][i] != strs[y][i]) return strs[0].slice(0, i);
		}
	}
	return strs[0];
}
// @lc code=end
