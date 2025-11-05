/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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

function preorderTraversal(root: TreeNode | null): number[] {
	if (!root) return [];
	const preorderValues: number[] = [];
	const nodesStack: TreeNode[] = [root];

	while (nodesStack[nodesStack.length - 1]) {
		const dummy = nodesStack[nodesStack.length - 1];
		nodesStack.pop();
		preorderValues.push(dummy.val);
		if (dummy.right) nodesStack.push(dummy.right);
		if (dummy.left) nodesStack.push(dummy.left);
	}
	return preorderValues;
}
// @lc code=end
