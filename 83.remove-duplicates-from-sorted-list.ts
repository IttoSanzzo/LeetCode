/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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
function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (head == null) return null;
	let dummy: ListNode | null = head;
	while (dummy && dummy.next) {
		if (dummy.next.val == dummy.val) dummy.next = dummy.next.next;
		else dummy = dummy.next;
	}
	return head;
}
// @lc code=end
