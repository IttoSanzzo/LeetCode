/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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

function invertNodes(root: TreeNode | null) {
	if (root == null) return;
	[root.right, root.left] = [root.left, root.right];
	invertNodes(root.left);
	invertNodes(root.right);
}

function invertTree(root: TreeNode | null): TreeNode | null {
	invertNodes(root);
	return root;
}
// @lc code=end
