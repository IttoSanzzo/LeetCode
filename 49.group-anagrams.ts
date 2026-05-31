/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
	const anagrams = new Map<string, string[]>();

	for (const [index, str] of strs.entries()) {
		const sortedStr = [...str].sort().join("");
		if (anagrams.has(sortedStr)) anagrams.get(sortedStr)?.push(strs[index]);
		else anagrams.set(sortedStr, [strs[index]]);
	}
	return [...anagrams.values()];
}

/*
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
*/
// @lc code=end
