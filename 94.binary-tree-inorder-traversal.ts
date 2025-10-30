/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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
function inorderTraversal(root: TreeNode | null): number[] {
	if (root == null) return [];
	const valuesStack: number[] = [];
	const nodesStack: TreeNode[] = [root];

	while (nodesStack.length != 0) {
		const currentNode = nodesStack[nodesStack.length - 1];
		if (currentNode.left == null) valuesStack.push(currentNode.val);
		if (currentNode.left) {
			nodesStack.push(currentNode.left);
			currentNode.left = null;
		} else if (currentNode.right) {
			nodesStack.pop();
			nodesStack.push(currentNode.right);
			currentNode.right = null;
		} else nodesStack.pop();
	}
	return valuesStack;
}
// @lc code=end
