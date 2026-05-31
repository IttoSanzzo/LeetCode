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
// @lc code=end
