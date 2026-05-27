/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
// @leetcode:omit_start
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
// @leetcode:omit_end

function checkPalindrome(numbers: number[]): boolean {
	const halfLength = numbers.length / 2;
	for (let index = 0; index < halfLength; ++index)
		if (numbers[index] != numbers[numbers.length - 1 - index]) return false;
	return true;
}

function isPalindrome(head: ListNode | null): boolean {
	const numbers: number[] = [];
	while (head != null) {
		numbers.push(head.val);
		head = head.next;
	}
	return checkPalindrome(numbers);
}
// @lc code=end
