/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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
function isBalanced(root: TreeNode | null): boolean {
	if (root == null) return true;
	if (isBalanced(root.left) == false || isBalanced(root.right) == false)
		return false;
	return (
		Math.abs(
			calculateMaxDepthRecursively(root.left) -
				calculateMaxDepthRecursively(root.right)
		) <= 1
	);
}
// @lc code=end
