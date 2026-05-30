/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
	if (s.length != t.length) return false;
	const letters = new Int16Array(26);
	for (let index = 0; index < s.length; ++index) {
		++letters[s.charCodeAt(index) - 97];
		--letters[t.charCodeAt(index) - 97];
	}
	for (const letter of letters) if (letter != 0) return false;
	return true;
}
// @lc code=end

// @leetcode:omit_start
/*
function isAnagram(s: string, t: string): boolean {
	if (s.length != t.length) return false;
	const sMap: { [letter: string]: number } = {};
	const tMap: { [letter: string]: number } = {};
	for (let index = 0; index < s.length; ++index) {
		sMap[s[index]] = (sMap[s[index]] ?? 0) + 1;
		tMap[t[index]] = (tMap[t[index]] ?? 0) + 1;
	}
	const tMapKeys = Object.keys(tMap);
	for (const key of Object.keys(sMap))
		if (!tMapKeys.includes(key) || tMap[key] != sMap[key]) return false;
	return true;
}
*/
// @leetcode:omit_end
