/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
	const charMap: { [string: string]: string } = {};
	for (let index = 0; index < s.length; ++index) {
		if (charMap[t[index]]) {
			if (charMap[t[index]] != s[index]) return false;
		} else {
			if (Object.values(charMap).includes(s[index])) return false;
			charMap[t[index]] = s[index];
		}
	}
	return true;
}
// @lc code=end
