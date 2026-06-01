/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
	s.reverse();
}

/*
let temp = "";

for (let index = 0; index < s.length / 2; ++index) {
	temp = s[index];
	s[index] = s[s.length - 1 - index];
	s[s.length - 1 - index] = temp;
}
*/
// @lc code=end
