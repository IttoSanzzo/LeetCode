/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

const correspondingClosingBracket = {
	"(": ")",
	"[": "]",
	"{": "}",
};

// @lc code=start
function isValid(s: string): boolean {
	let waitingStack: string[] = [];
	for (const bracket of s) {
		if (correspondingClosingBracket[bracket])
			waitingStack.push(correspondingClosingBracket[bracket]);
		else if (waitingStack.pop() != waitingStack[waitingStack.length - 1])
			return false;
	}
	return waitingStack.length == 0;
}
// @lc code=end
