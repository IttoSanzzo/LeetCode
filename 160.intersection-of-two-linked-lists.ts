/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

function getIntersectionNode(
	headA: ListNode | null,
	headB: ListNode | null
): ListNode | null {
	const stack = new Set<ListNode>();
	while (headA) {
		stack.add(headA);
		headA = headA.next;
	}
	while (headB) {
		if (stack.has(headB)) return headB;
		headB = headB.next;
	}
	return null;
}
// @lc code=end
