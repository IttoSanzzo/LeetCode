/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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
function calculateMinDepthRecursively(root: TreeNode): number {
	if (root.left == null && root.right == null) return 1;
	if (root.left == null) return 1 + calculateMinDepthRecursively(root.right!);
	if (root.right == null) return 1 + calculateMinDepthRecursively(root.left!);
	const leftLength = calculateMinDepthRecursively(root.left);
	const rightLength = calculateMinDepthRecursively(root.right);
	return 1 + (leftLength < rightLength ? leftLength : rightLength);
}
function minDepth(root: TreeNode | null): number {
	if (root == null) return 0;
	return calculateMinDepthRecursively(root);
}
// @lc code=end
