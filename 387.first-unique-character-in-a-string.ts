/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
	const chars = new Map<string, number>();
	for (let i = 0; i < s.length; ++i) chars.set(s[i], chars.has(s[i]) ? -1 : i);
	for (const [_, index] of chars) if (index != -1) return index;
	return -1;
}
// @lc code=end
