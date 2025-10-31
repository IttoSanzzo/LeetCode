/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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
function checkSimmetryRecursively(
	leftSide: TreeNode | null,
	rightSide: TreeNode | null
): boolean {
	if (leftSide == null && rightSide == null) return true;
	if (leftSide == null || rightSide == null || leftSide!.val !== rightSide!.val)
		return false;
	return (
		checkSimmetryRecursively(leftSide!.left, rightSide!.right) &&
		checkSimmetryRecursively(leftSide!.right, rightSide!.left)
	);
}
function isSymmetric(root: TreeNode | null): boolean {
	if (root == null) return true;
	return checkSimmetryRecursively(root.left, root.right);
}
// @lc code=end
