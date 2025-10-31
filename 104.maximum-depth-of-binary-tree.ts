/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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
function calculateMaxDepthRecursively(root: TreeNode | null): number {
	if (root == null) return 0;
	const leftLength = calculateMaxDepthRecursively(root.left);
	const rightLength = calculateMaxDepthRecursively(root.right);
	return 1 + (leftLength > rightLength ? leftLength : rightLength);
}
function maxDepth(root: TreeNode | null): number {
	return calculateMaxDepthRecursively(root);
}
// @lc code=end
