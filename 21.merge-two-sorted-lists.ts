/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

interface NodeLists {
	newNode: ListNode;
	currentNode1: ListNode | null;
	currentNode2: ListNode | null;
	finalListNode: ListNode | null;
}

function pushNodeAndMoveList(
	nodeLists: NodeLists,
	targetListNode: "currentNode1" | "currentNode2"
) {
	nodeLists.newNode.next = new ListNode(nodeLists[targetListNode]!.val, null);
	nodeLists[targetListNode] = nodeLists[targetListNode]!.next;
	nodeLists.newNode = nodeLists.newNode.next;
}

function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	if (!list1 && !list2) return null;
	else if (!list1) return list2;
	else if (!list2) return list1;

	const nodeLists: NodeLists = {
		newNode: new ListNode(),
		currentNode1: list1,
		currentNode2: list2,
		finalListNode: null,
	};
	nodeLists.finalListNode = nodeLists.newNode;
	while (nodeLists.currentNode1 != null && nodeLists.currentNode2 != null) {
		if (nodeLists.currentNode1.val < nodeLists.currentNode2.val)
			pushNodeAndMoveList(nodeLists, "currentNode1");
		else pushNodeAndMoveList(nodeLists, "currentNode2");
	}
	if (nodeLists.currentNode1) nodeLists.newNode.next = nodeLists.currentNode1;
	if (nodeLists.currentNode1) nodeLists.newNode.next = nodeLists.currentNode2;
	return nodeLists.finalListNode!.next;
}
// @lc code=end
