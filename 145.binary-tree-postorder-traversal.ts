/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
 */

// @lc code=start
// @leetcode:omit_start
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
// @leetcode:omit_end

function postorderTraversal(root: TreeNode | null): number[] {
	if (!root) return [];
	const preorderValues: number[] = [];
	const nodesStack: TreeNode[] = [root];

	while (nodesStack[nodesStack.length - 1]) {
		const dummy = nodesStack[nodesStack.length - 1];
		if (dummy.left) {
			nodesStack.push(dummy.left);
			dummy.left = null;
			continue;
		}
		if (dummy.right) {
			nodesStack.push(dummy.right);
			dummy.right = null;
			continue;
		}
		preorderValues.push(dummy.val);
		nodesStack.pop();
	}
	return preorderValues;
}
// @lc code=end
