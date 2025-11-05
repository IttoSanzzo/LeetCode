/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

function reverseList(head: ListNode | null): ListNode | null {
	if (head == null) return null;
	let dummy = new ListNode(head.val);
	while (head.next) {
		dummy = new ListNode(head.next.val, dummy);
		head = head.next;
	}
	return dummy;
}
// @lc code=end
